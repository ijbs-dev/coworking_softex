import { Router } from "express";
import PessoaJuridicaRepository from "../repositories/PessoaJuridicaRepository";
import PessoaJuridicaController from "../controllers/PessoaJuridicaController";

const pessoaJuridicaRoutes = Router();
const pessoaJuridicaRepository = new PessoaJuridicaRepository();
const pessoaJuridicaController = new PessoaJuridicaController(pessoaJuridicaRepository);

pessoaJuridicaRoutes.get("/", async (request, response) => {

    const pessoasJuridicas = await pessoaJuridicaController.list();

    response.status(200).json(pessoasJuridicas);

})

pessoaJuridicaRoutes.get("/id/:id", async (request, response) => {
    const idPJuridica = Number(request.params.id);

    try {
        const pessoaJuridica = await pessoaJuridicaController.findById(idPJuridica);
        response.status(200).json(pessoaJuridica);
    } catch (error) {
        response.status(400).json({ message: "Pessoa Juridica não encontrada!" });
    }
})

pessoaJuridicaRoutes.get("/cnpj/:cnpj", async (request, response) => {
    const cnpj = request.params.cnpj;

    try {
        const pessoaJuridica = await pessoaJuridicaController.findByCnpj(cnpj);
        response.status(200).json(pessoaJuridica);
    } catch (error) {
        response.status(400).json({ message: "Pessoa Juridica não encontrada!" });
    }
})

pessoaJuridicaRoutes.post("/", async (request, response) => {

    const dadosPessoaJuridica = request.body;

    try {
        await pessoaJuridicaController.create(dadosPessoaJuridica);
        response.status(201).json({ message: "Pessoa Juridica criada com sucesso!" });
    } catch (error) {
        response.status(400).json({ message: "Pessoa Juridica não foi criada!" });
    }

})

pessoaJuridicaRoutes.delete("/:id", async (request, response) => {

    const idPJuridica = Number(request.params.id);

    try {
        await pessoaJuridicaController.delete(idPJuridica);
        response.status(200).json({ message: "Pessoa Juridica deletada!" });
    } catch (error) {
        response.status(400).json({ message: "Pessoa Juridica não deletada!" });
    }
})

export { pessoaJuridicaRoutes };