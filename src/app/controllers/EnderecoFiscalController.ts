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

enderecoFiscalRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const enderecoFiscalRepository = new EnderecoFiscalRepository();
        const idEnderecoFiscal = parseInt(req.params.id, 10);

        console.log("ID do EnderecoFiscal:", idEnderecoFiscal);

        if (isNaN(idEnderecoFiscal)) {
            console.log("ID do EnderecoFiscal inválido!");
            return resp.status(400).json({ error: "ID do enderecoFiscal inválido!" });   
        }
        
        const enderecoFiscalEncontrado = await enderecoFiscalRepository.getEnderecoFiscalById(idEnderecoFiscal);

        console.log("EnderecoFiscal Encontrado:", enderecoFiscalEncontrado);

        if (enderecoFiscalEncontrado && enderecoFiscalEncontrado.length > 0) {
            return resp.status(200).json(enderecoFiscalEncontrado);
        } else {
            console.log("EnderecoFiscal não encontrado.");
            return resp.status(404).json({ error: "EnderecoFiscal não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar enderecoFiscal por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar enderecoFiscal por ID.", details: error });
    }
});

export default enderecoFiscalRouter;