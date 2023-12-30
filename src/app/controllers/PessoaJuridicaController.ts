import { Request, Response, Router } from "express";
import PessoaJuridica from "../entities/PessoaJuridica";
import IPessoaJuridica from "../interfaces/IPessoaJuridica";
import PessoaJuridicaRepository from "../repositories/PessoaJuridicaRepository";

const pessoaJuridicaRouter = Router();

pessoaJuridicaRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const pessoaJuridicaRepository = new PessoaJuridicaRepository();
    const pessoaJuridica = await pessoaJuridicaRepository.getPessoaJuridica();
    return resp.status(200).json(pessoaJuridica);
});

export default pessoaJuridicaRouter;