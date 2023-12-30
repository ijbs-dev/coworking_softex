import { Request, Response, Router } from "express";
import PessoaFisica from "../entities/PessoaFisica";
import IPessoaFisica from "../interfaces/IPessoaFisica";
import PessoaFisicaRepository from "../repositories/PessoaFisicaRepository";

const pessoaFisicaRouter = Router();

pessoaFisicaRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const pessoaFisicaRepository = new PessoaFisicaRepository();
    const pessoaFisica = await pessoaFisicaRepository.getPessoaFisica();
    return resp.status(200).json(pessoaFisica);
});

export default pessoaFisicaRouter;
