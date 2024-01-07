import { Router } from "express";
import { AdminRepository } from "../repositories/AdminRepository";
import { AdminController } from "../controllers/AdminController";

const adminRoutes = Router();
const adminRepository = new AdminRepository();
const adminController = new AdminController(adminRepository);

adminRoutes.get("/", async(request, response) => {
    const admins = await adminController.list();
    
    return response.status(200).json(admins);
})

adminRoutes.get("/id/:id", async(request, response) => {
    const id = Number(request.params.id);

    try {
        const admin = await adminController.findById(id);
        response.status(200).json(admin);
    } catch(error) {
        response.status(400).json(error);
    }
})

adminRoutes.post("/", async(request, response) => {
    const { idAdmin, idUsuario } = request.body;

    try {
        await adminController.create({
            idAdmin,
            idUsuario
        })
        response.status(201).json({ message: "Admin Criado!" });
    } catch (error) {
        response.status(400).json({ message: error});
    }
})

adminRoutes.delete("/:id", async (request, response) => {

    const idAdmin = Number(request.params.id);

    try {
        adminController.deleteById(idAdmin);
        response.status(200).json({ message: "Administrador excluído! "});
    } catch (error) {
        response.status(400).json({ message: "Erro ao excluir administrador!" })
    }
})

export { adminRoutes };