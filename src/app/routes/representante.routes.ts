import { Router } from "express";
import {RepresentanteRepository} from "../repositories/RepresentanteRepository";
import {RepresentanteController} from "../controllers/RepresentanteController";

const representanteRoutes = Router();
const representanteRepository = new RepresentanteRepository();
const representanteController = new RepresentanteController(representanteRepository);

representanteRoutes.get("/", async (request, response) => {
    try {
        const representantes = await representanteController.list();
        return response.status(200).json(representantes);
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor.", details: error });
    }
});

representanteRoutes.get("/id/:id", async (request, response) => {
    try {
        const idRepresent = parseInt(request.params.id, 10);

        if (isNaN(idRepresent)) {
            return response.status(400).json({ error: "ID do representante inválido!" });
        }

        const representante = await representanteController.findById(idRepresent);

        if (representante) {
            return response.status(200).json(representante);
        } else {
            return response.status(404).json({ error: "Representante não encontrado." });
        }
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor.", details: error });
    }
});

representanteRoutes.post("/", async (request, response) => {
    try {
        const dadosRepresentante = request.body;
        await representanteController.create(dadosRepresentante);
        return response.status(201).json({ message: "Representante cadastrado!" });
    } catch (error) {
        return response.status(400).json({ message: `Erro ao cadastrar o representante: ${error}` });
    }
});

representanteRoutes.put("/:id", async (request, response) => {
    try {
        const idRepresent = parseInt(request.params.id, 10);

        if (isNaN(idRepresent)) {
            return response.status(400).json({ error: "ID do representante inválido!" });
        }

        const dadosRepresentante = request.body;
        await representanteController.update(idRepresent, dadosRepresentante);
        return response.status(200).json({ message: "Representante atualizado!" });
    } catch (error) {
        return response.status(400).json({ message: `Erro ao atualizar o representante: ${error}` });
    }
});

representanteRoutes.delete("/:id", async (request, response) => {

    try {
        const idRepresent = parseInt(request.params.id, 10);

        if (isNaN(idRepresent)) {
            return response.status(400).json({ error: "ID do representante inválido!" });
        }

        await representanteController.delete(idRepresent);
        return response.status(200).json({ message: "Representante deletado!" });
    } catch (error) {
        return response.status(400).json({ message: `Erro ao deletar o representante: ${error}` });
    }

});

export { representanteRoutes };


