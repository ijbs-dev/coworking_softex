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

export default encomendaRouter;