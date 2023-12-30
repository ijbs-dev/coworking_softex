import { Request, Response, Router } from "express";
import EnderecoFiscal from "../entities/EnderecoFiscal";
import IEnderecoFiscal from "../interfaces/IEnderecoFiscal";
import EnderecoFiscalRepository from "../repositories/EnderecoFiscalRepository";

const enderecoFiscalRouter = Router();

enderecoFiscalRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const enderecoFiscalRepository = new EnderecoFiscalRepository();
    const enderecoFiscal = await enderecoFiscalRepository.getEnderecoFiscal();
    return resp.status(200).json(enderecoFiscal);
});

export default enderecoFiscalRouter;