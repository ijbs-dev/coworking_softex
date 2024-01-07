import { Router } from "express";
import { RecepcaoRepository } from "../repositories/RecepcaoRepository";
import { RecepcaoController } from "../controllers/RecepcaoController";

const recepcaoRoutes = Router();
const recepcaoRepository = new RecepcaoRepository();
const recepcaoController = new RecepcaoController(recepcaoRepository);

recepcaoRoutes.get("/", async(request, response) => {
    const recepcoes = await recepcaoController.list();

    return response.status(200).json(recepcoes);
})

recepcaoRoutes.get("/id/:id", async(request, response) => {
    const id = Number(request.params.id);

    try {
        const recepcao = await recepcaoController.findById(id);
        response.status(200).json(recepcao);
    } catch(error) {
        response.status(400).json(error);
    }
})


export { recepcaoRoutes };