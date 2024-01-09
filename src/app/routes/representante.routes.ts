import { Router } from "express";
import RepresentanteRepository from "../repositories/RepresentanteRepository";
import RepresentanteController from "../controllers/RepresentanteController";

const representanteRoutes = Router();
const representanteRepository = new RepresentanteRepository();
//const representanteController = new RepresentanteController(representanteRepository);


/* representanteRoutes.get("/", async (request, response) => {
    const representantes = await representanteController.list();

    return response.status(200).json(representantes);
})

representanteRoutes.get("/id/:id", async (request, response) => {
    const id = Number(request.params.id);

    try {
        const representante = await representanteController.findById(id);
        response.status(200).json(representante);
    } catch (error) {
        response.status(400).json(error);
    }
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

representanteRoutes.post("/", async (request, response) => {
    const { nomeRepresentante, emailRepresentante, telefoneRepresentante, cpfRepresentante } = request.body;

    try {
        await representanteController.create({
            nomeRepresentante,
            emailRepresentante,
            telefoneRepresentante,
            cpfRepresentante
        })

        response.status(201).json({ message: "Representante Criado!" });
    } catch (error) {
        response.status(400).json({ message: error });
    }
})

representanteRoutes.put("/:id", async (request, response) => {
    const id = Number(request.params.id);
    const { nomeRepresentante, emailRepresentante, telefoneRepresentante, cpfRepresentante } = request.body;

    try {
        await representanteController.update(id, {
            nomeRepresentante,
            emailRepresentante,
            telefoneRepresentante,
            cpfRepresentante
        })

        response.status(201).json({ message: "Representante Atualizado!" });
    } catch (error) {
        response.status(400).json({ message: error });
    }
})

representanteRoutes.delete("/:id", async (request, response) => {
    const id = Number(request.params.id);

    try {
        await representanteController.delete(id);
        response.status(200).json({ message: "Representante deletado!" });
    } catch (error) {
        response.status(400).json({ message: error });
    }
}) */

export { representanteRoutes };


