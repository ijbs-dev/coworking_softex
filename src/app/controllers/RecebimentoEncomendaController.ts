import { Request, Response, Router } from "express";
import RecebimentoEncomenda from "../entities/RecebimentoEncomenda";
import IRecebimentoEncomenda from "../interfaces/IRecebimentoEncomenda";
import RecebimentoEncomendaRepository from "../repositories/RecebimentoEncomendaRepository";

const recebimentoEncomendaRouter = Router();

recebimentoEncomendaRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const recebimentoEncomendaRepository = new RecebimentoEncomendaRepository();
    const recebimentoEncomenda = await recebimentoEncomendaRepository.getRecebimentoEncomenda();
    return resp.status(200).json(recebimentoEncomenda);
});

recebimentoEncomendaRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const recebimentoEncomendaRepository = new RecebimentoEncomendaRepository();
        const idRecebimentoEncomenda = parseInt(req.params.id, 10);

        console.log("ID do RecebimentoEncomenda:", idRecebimentoEncomenda);

        if (isNaN(idRecebimentoEncomenda)) {
            console.log("ID do RecebimentoEncomenda inválido!");
            return resp.status(400).json({ error: "ID do recebimentoEncomenda inválido!" });   
        }
        
        const recebimentoEncomendaEncontrado = await recebimentoEncomendaRepository.getRecebimentoEncomendaById(idRecebimentoEncomenda);

        console.log("RecebimentoEncomenda Encontrado:", recebimentoEncomendaEncontrado);

        if (recebimentoEncomendaEncontrado && recebimentoEncomendaEncontrado.length > 0) {
            return resp.status(200).json(recebimentoEncomendaEncontrado);
        } else {
            console.log("RecebimentoEncomenda não encontrado.");
            return resp.status(404).json({ error: "RecebimentoEncomenda não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar recebimentoEncomenda por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar recebimentoEncomenda por ID.", details: error });
    }
});
export default recebimentoEncomendaRouter;
