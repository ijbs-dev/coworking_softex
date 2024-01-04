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

pessoaJuridicaRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const pessoaJuridicaRepository = new PessoaJuridicaRepository();
        const idPessoaJuridica = parseInt(req.params.id, 10);

        console.log("ID do PessoaJuridica:", idPessoaJuridica);

        if (isNaN(idPessoaJuridica)) {
            console.log("ID do PessoaJuridica inválido!");
            return resp.status(400).json({ error: "ID do pessoaJuridica inválido!" });   
        }
        
        const pessoaJuridicaEncontrado = await pessoaJuridicaRepository.getPessoaJuridicaById(idPessoaJuridica);

        console.log("PessoaJuridica Encontrado:", pessoaJuridicaEncontrado);

        if (pessoaJuridicaEncontrado && pessoaJuridicaEncontrado.length > 0) {
            return resp.status(200).json(pessoaJuridicaEncontrado);
        } else {
            console.log("PessoaJuridica não encontrado.");
            return resp.status(404).json({ error: "PessoaJuridica não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar pessoaJuridica por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar pessoaJuridica por ID.", details: error });
    }
});

export default pessoaJuridicaRouter;