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

enderecoRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const enderecoRepository = new EnderecoRepository();
        const idEndereco = parseInt(req.params.id, 10);

        console.log("ID do Endereco:", idEndereco);

        if (isNaN(idEndereco)) {
            console.log("ID do Endereco inválido!");
            return resp.status(400).json({ error: "ID do endereco inválido!" });   
        }
        
        const enderecoEncontrado = await enderecoRepository.getEnderecoById(idEndereco);

        console.log("Endereco Encontrado:", enderecoEncontrado);

        if (enderecoEncontrado && enderecoEncontrado.length > 0) {
            return resp.status(200).json(enderecoEncontrado);
        } else {
            console.log("Endereco não encontrado.");
            return resp.status(404).json({ error: "Endereco não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar endereco por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar endereco por ID.", details: error });
    }
});

export default enderecoRouter;