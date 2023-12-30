import { Request, Response, Router } from "express";
import Endereco from "../entities/Endereco";
import IEndereco from "../interfaces/IEndereco";
import EnderecoRepository from "../repositories/EnderecoRepository";

const enderecoRouter = Router();

enderecoRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const enderecoRepository = new EnderecoRepository();
    const endereco = await enderecoRepository.getEndereco();
    return resp.status(200).json(endereco);
});

export default enderecoRouter;