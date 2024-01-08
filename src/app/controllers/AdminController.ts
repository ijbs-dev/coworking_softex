import { Request, Response, Router } from "express";
import Admin from "../entities/Admin";
import IAdmin from "../interfaces/IAdmin";
import { AdminRepository } from "../repositories/AdminRepository";
import IAdminUpdate from "../interfaces/IAdminUpdate";

class AdminController {

    constructor(private adminRepository: AdminRepository) {}
    
    async create(dadosAdmin: IAdmin): Promise<void> {
        // const admin = await this.adminRepository.findById(dadosAdmin.idAdmin);
        
        //  if(admin) {
        //      throw new Error("Administrador já existente!");
        //  }
        await this.adminRepository.create(dadosAdmin);
    }

    async list(): Promise<Admin[]> {
        return await this.adminRepository.list();
    }

    async findById(id: number): Promise<Admin> {
        const admin = await this.adminRepository.findById(id);

        if(!admin) {
            throw new Error("Administrado inexistente!");
        }
        return admin;
    }

    async update(id: number, dadosAdmin: IAdminUpdate): Promise<void> {
        const admin = await this.adminRepository.findById(id);
        if(!admin) {
            throw new Error("Administrado inexistente!");
        }
        await this.adminRepository.update(id, dadosAdmin);
    }

    async deleteById(id: number): Promise<void> {
        const admin = await this.adminRepository.findById(id);

        if(!admin) {
            throw new Error("Administrador não existente!");
        }
        await this.adminRepository.delete(id);
    }
}

export {AdminController };


// adminRouter.post("/createAdmin", async (req: Request, resp: Response): Promise<Response> => {
//     try {
//         const adminRepository = new AdminRepository();
//         const novoAdmin = req.body as Admin;
//         const adminCriado = await adminRepository.createAdmin(novoAdmin);
              
//         if(adminCriado !== null) {
//             return resp.status(201).json(adminCriado);
//         } else {
//             return resp.status(409).json({ error: "Admin com o mesmo e-mail ou login já existente"});
//         }
//     } catch (error) {
//         return resp.status(500).json({ message: "Erro ao criar admin", error: error});
//     }
// });
// adminRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
//     try {
//         const adminRepository = new AdminRepository();
//         const idAdmin = parseInt(req.params.id, 10);

//         console.log("ID do Admin:", idAdmin);

//         if (isNaN(idAdmin)) {
//             console.log("ID do Admin inválido!");
//             return resp.status(400).json({ error: "ID do admin inválido!" });   
//         }
        
//         const adminEncontrado = await adminRepository.getAdminById(idAdmin);

//         console.log("Admin Encontrado:", adminEncontrado);

//         if (adminEncontrado && adminEncontrado.length > 0) {
//             return resp.status(200).json(adminEncontrado);
//         } else {
//             console.log("Admin não encontrado.");
//             return resp.status(404).json({ error: "Admin não encontrado." });
//         }        
//     } catch(error) {
//         console.log("Erro ao buscar admin por ID:", error);
//         return resp.status(500).json({ error: "Erro ao buscar admin por ID.", details: error });
//     }
// });