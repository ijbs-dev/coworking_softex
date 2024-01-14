import { Router } from "express";
import { RepresentanteRepository } from "../repositories/RepresentanteRepository";
import { RepresentanteController } from "../controllers/RepresentanteController";

const representanteRoutes = Router();
const representanteRepository = new RepresentanteRepository();
const representanteController = new RepresentanteController(representanteRepository);

representanteRoutes.get("/", async (request, response) => {
    const representantes = await representanteController.list();

    return response.status(200).json(representantes);
})

representanteRoutes.get("/ativos", async (request, response) => {
    const representantes = await representanteController.listAtivos();

    return response.status(200).json(representantes);
})

representanteRoutes.get("/inativos", async (request, response) => {
    const representantes = await representanteController.listInativos();

    return response.status(200).json(representantes);
})

representanteRoutes.get("/email/:email", async (request, response) => {

    const email = request.params.email;

    try {
        const representante = await representanteController.findByEmail(email);
        response.status(200).json(representante);
    } catch (error) {
        response.status(400).json(error);
    }
})

representanteRoutes.get("/id/:id", async (request, response) => {

    const id = Number(request.params.id);

    try {
        const representante = await representanteController.findById(id);
        response.status(200).json(representante);
    } catch (error) {
        response.status(400).json(error)
    }
})

representanteRoutes.post("/", async (request, response) => {

    const { nomeRepresent, emailRepresent, telefoneRepresent, idPJuridica} = request.body;

    try {
        await representanteController.create({
            nomeRepresent,
            emailRepresent,
            telefoneRepresent,
            idPJuridica
        })

        response.status(201).json({ message: "Representante Criado!" });
    } catch (error) {
        response.status(400).json(error);
    }

})

representanteRoutes.put("/:id", async (request, response) => {

    const idRepresentante = parseInt(request.params.id);
    const {emailRepresent, telefoneRepresent} = request.body;

    try {
            
        await representanteController.update(idRepresentante, { emailRepresent, telefoneRepresent });
            
        response.status(200).json({ message: "Representante atualizado!" });
    } catch (error) {
        return response.status(400).json(error);
    }
})

representanteRoutes.delete("/:id", async (request, response) => {
    
    const idRepresentante = Number(request.params.id);

    try {
        await representanteController.delete(idRepresentante);
        response.status(200).json({ message: "Representante excluido!" })
    } catch (error) {
        response.status(400).json(error)
    }
})

representanteRoutes.patch("/inativar/:id", async (request, response) => {

    const idRepresentante = Number(request.params.id);

    try {
        await representanteController.inativar(idRepresentante);
        response.status(200).json({ message: "Representante inativado!" })
    } catch (error) {
        response.status(400).json(error)
    }
})

representanteRoutes.patch("/ativar/:id", async (request, response) => {

    const idRepresentante = Number(request.params.id);

    try {
        await representanteController.ativar(idRepresentante);
        response.status(200).json({ message: "Representante inativado!" })
    } catch (error) {
        response.status(400).json(error)
    }
})

export { representanteRoutes };