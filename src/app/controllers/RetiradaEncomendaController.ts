import { Request, Response, Router } from "express";
import RetiradaEncomenda from "../entities/RetiradaEncomenda";
import IRetiradaEncomenda from "../interfaces/IRetiradaEncomenda";
import RetiradaEncomendaRepository from "../repositories/RetiradaEncomendaRepository";

const retiradaEncomendaRouter = Router();

retiradaEncomendaRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const retiradaEncomendaRepository = new RetiradaEncomendaRepository();
    const retiradaEncomenda = await retiradaEncomendaRepository.getRetiradaEncomenda();
    return resp.status(200).json(retiradaEncomenda);
});

retiradaEncomendaRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const retiradaEncomendaRepository = new RetiradaEncomendaRepository();
        const idretirada = parseInt(req.params.id, 10);

        console.log("ID da Retirada:", idretirada);

        if (isNaN(idretirada)) {
            console.log("ID da Retirada inválido!");
            return resp.status(400).json({ error: "ID da Retirada inválido!" });   
        }

        const retiradaEncontrada = await retiradaEncomendaRepository.getRetiradaEncomendaById(idretirada);

        console.log("Retirada Encontrada:", retiradaEncontrada);

        if (retiradaEncontrada && retiradaEncontrada.length > 0) {
            return resp.status(200).json(retiradaEncontrada);
        } else {
            console.log("Retirada não encontrada.");
            return resp.status(404).json({ error: "Retirada não encontrada." });
        }        
    } catch(error) {
        console.log("Erro ao buscar Retirada por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar Retirada por ID.", details: error });
    }
});

export default retiradaEncomendaRouter;

