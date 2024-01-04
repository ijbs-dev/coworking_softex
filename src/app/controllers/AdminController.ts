import { Request, Response, Router } from "express";
import Admin from "../entities/Admin";
import IAdmin from "../interfaces/IAdmin";
import AdminRepository from "../repositories/AdminRepository";

const adminRouter = Router();

adminRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const adminRepository = new AdminRepository();
    const admin = await adminRepository.getAdmin();
    return resp.status(200).json(admin);
});

adminRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const adminRepository = new AdminRepository();
        const idAdmin = parseInt(req.params.id, 10);

        console.log("ID do Admin:", idAdmin);

        if (isNaN(idAdmin)) {
            console.log("ID do Admin inválido!");
            return resp.status(400).json({ error: "ID do admin inválido!" });   
        }
        
        const adminEncontrado = await adminRepository.getAdminById(idAdmin);

        console.log("Admin Encontrado:", adminEncontrado);

        if (adminEncontrado && adminEncontrado.length > 0) {
            return resp.status(200).json(adminEncontrado);
        } else {
            console.log("Admin não encontrado.");
            return resp.status(404).json({ error: "Admin não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar admin por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar admin por ID.", details: error });
    }
});

/**
 * [
	{
		"idAdmin": 1000,
		"idUsuario": 1		
	}
   ]
 */

adminRouter.post("/createAdmin", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const adminRepository = new AdminRepository();
        const novoAdmin = req.body as Admin;
        const adminCriado = await adminRepository.createAdmin(novoAdmin);
              
        if(adminCriado !== null) {
            return resp.status(201).json(adminCriado);
        } else {
            return resp.status(409).json({ error: "Admin com o mesmo e-mail ou login já existente"});
        }
    } catch (error) {
        return resp.status(500).json({ message: "Erro ao criar admin", error: error});
    }
});

adminRouter.put("/updateAdmin", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const adminRepository = new AdminRepository();
        const novoAdmin = req.body as Admin;
        const adminAtualizado = await adminRepository.updateAdmin(novoAdmin);
        
        if(adminAtualizado !== null) {
            return resp.status(201).json(adminAtualizado);
        } else {
            return resp.status(409).json({ error: "Admin com o mesmo e-mail ou login já existente"});
        }
    } catch (error) {
        return resp.status(500).json({ message: "Erro ao atualizar admin", error: error});
    }
});

export default adminRouter;