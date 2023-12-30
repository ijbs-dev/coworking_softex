import { Request, Response, Router } from "express";
import Recepcao from "../entities/Recepcao";
import IRecepcao from "../interfaces/IRecepcao";
import RecepcaoRepository from "../repositories/RecepcaoRepository";

const recepcaoRouter = Router();

recepcaoRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const recepcaoRepository = new RecepcaoRepository();
    const recepcao = await recepcaoRepository.getRecepcao();
    return resp.status(200).json(recepcao);
});

export default recepcaoRouter;


