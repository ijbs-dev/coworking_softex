import { Router } from "express";
import PessoaFisicaRepository from "../repositories/PessoaFisicaRepository";
import PessoaFisicaController from "../controllers/PessoaFisicaController";

const pessoaFisicaRoutes = Router();
const pessoaFisicaRepository = new PessoaFisicaRepository();
const pessoaFisicaController = new PessoaFisicaController(pessoaFisicaRepository);

pessoaFisicaRoutes.get("/", async (request, response) => {

    const pessoasFisicas = await pessoaFisicaController.list();

    response.status(200).json(pessoasFisicas);

})

pessoaFisicaRoutes.get("/id/:id", async (request, response) => {
    const idPFisica = Number(request.params.id);

    try {
        const pessoaFisica = await pessoaFisicaController.findById(idPFisica);
        response.status(200).json(pessoaFisica);
    } catch (error) {
        response.status(400).json({ message: "Pessoa Fisica não encontrada!" });
    }
})

pessoaFisicaRoutes.get("/cpf/:cpf", async (request, response) => {
    const cpf = request.params.cpf;

    try {
        const pessoaFisica = await pessoaFisicaController.findByCpf(cpf);
        response.status(200).json(pessoaFisica);
    } catch (error) {
        response.status(400).json({ message: "Pessoa Fisica não encontrada!" });
    }
})

pessoaFisicaRoutes.post("/", async (request, response) => {

    const dadosPessoaFisica = request.body;

    try {
        await pessoaFisicaController.create(dadosPessoaFisica);
        response.status(201).json({ message: "Pessoa fisica criada com sucesso!" });
    } catch (error) {
        response.status(400).json({ message: "Pessoa fisica não foi criada!" });
    }

})

pessoaFisicaRoutes.delete("/:id", async (request, response) => {

    const idPFisica = Number(request.params.id);

    try {
        await pessoaFisicaController.delete(idPFisica);
        response.status(200).json({ message: "Pessoa Fisica deletada!" });
    } catch (error) {
        response.status(400).json({ message: "Pessoa Fisica não deletada!" });
    }
})

export { pessoaFisicaRoutes };