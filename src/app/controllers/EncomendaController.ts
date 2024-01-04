import { Request, Response, Router } from "express";
import Encomenda from "../entities/Encomenda";
import IEncomenda from "../interfaces/IEncomenda";
import EncomendaRepository from "../repositories/EncomendaRepository";

const encomendaRouter = Router();

encomendaRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const encomendaRepository = new EncomendaRepository();
    const encomenda = await encomendaRepository.getEncomenda();
    return resp.status(200).json(encomenda);
});

encomendaRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const encomendaRepository = new EncomendaRepository();
        const idEncomenda = parseInt(req.params.id, 10);

        console.log("ID da Encomenda:", idEncomenda);

        if (isNaN(idEncomenda)) {
            console.log("ID da Encomenda inválido!");
            return resp.status(400).json({ error: "ID da encomenda inválido!" });   
        }
        
        const encomendaEncontrado = await encomendaRepository.getEncomendaById(idEncomenda);

        console.log("Encomenda Encontrado:", encomendaEncontrado);

        if (encomendaEncontrado && encomendaEncontrado.length > 0) {
            return resp.status(200).json(encomendaEncontrado);
        } else {
            console.log("Encomenda não encontrado.");
            return resp.status(404).json({ error: "Encomenda não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar encomenda por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar encomenda por ID.", details: error });
    }
});

export default encomendaRouter;