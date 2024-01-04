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

recepcaoRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const recepcaoRepository = new RecepcaoRepository();
        const idRecepcao = parseInt(req.params.id, 10);

        console.log("ID do Recepcao:", idRecepcao);

        if (isNaN(idRecepcao)) {
            console.log("ID do Recepcao inválido!");
            return resp.status(400).json({ error: "ID do recepcao inválido!" });   
        }
        
        const recepcaoEncontrado = await recepcaoRepository.getRecepcaoById(idRecepcao);

        console.log("Recepcao Encontrado:", recepcaoEncontrado);

        if (recepcaoEncontrado && recepcaoEncontrado.length > 0) {
            return resp.status(200).json(recepcaoEncontrado);
        } else {
            console.log("Recepcao não encontrado.");
            return resp.status(404).json({ error: "Recepcao não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar recepcao por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar recepcao por ID.", details: error });
    }
});

export default recepcaoRouter;


