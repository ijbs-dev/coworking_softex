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

export default recebimentoEncomendaRouter;
