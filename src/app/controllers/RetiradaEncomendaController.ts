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

export default retiradaEncomendaRouter;

