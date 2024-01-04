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

pessoaFisicaRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const pessoaFisicaRepository = new PessoaFisicaRepository();
        const idPessoaFisica = parseInt(req.params.id, 10);

        console.log("ID do PessoaFisica:", idPessoaFisica);

        if (isNaN(idPessoaFisica)) {
            console.log("ID do PessoaFisica inválido!");
            return resp.status(400).json({ error: "ID do pessoaFisica inválido!" });   
        }
        
        const pessoaFisicaEncontrado = await pessoaFisicaRepository.getPessoaFisicaById(idPessoaFisica);

        console.log("PessoaFisica Encontrado:", pessoaFisicaEncontrado);

        if (pessoaFisicaEncontrado && pessoaFisicaEncontrado.length > 0) {
            return resp.status(200).json(pessoaFisicaEncontrado);
        } else {
            console.log("PessoaFisica não encontrado.");
            return resp.status(404).json({ error: "PessoaFisica não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar pessoaFisica por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar pessoaFisica por ID.", details: error });
    }
});
export default pessoaFisicaRouter;
