import { Router } from "express";
import EnderecoFiscalRepository from "../repositories/EnderecoFiscalRepository";
import { EnderecoFiscalController } from "../controllers/EnderecoFiscalController";

const enderecoFiscalRoutes = Router();
const enderecoFiscalRepository = new EnderecoFiscalRepository();
const enderecoFiscalController = new EnderecoFiscalController(enderecoFiscalRepository);

enderecoFiscalRoutes.get("/", async (request, response) => {
    try {
        const enderecosFiscais = await enderecoFiscalController.list();
        return response.status(200).json(enderecosFiscais);
    } catch (error) {
        return response.status(500).json({ message: "Erro interno do servidor." });
    }
});

enderecoFiscalRoutes.get("/:numEndFiscal", async (request, response) => {
    const numEndFiscal = Number(request.params.numEndFiscal);

    try {
        const enderecoFiscal = await enderecoFiscalController.findById(numEndFiscal);
        response.status(200).json(enderecoFiscal);
    } catch (error) {
        response.status(400).json({ message: error });
    }
});

enderecoFiscalRoutes.post("/", async (request, response) => {
    try {
        const { statusEndFiscal } = request.body;
        const novoEnderecoFiscal = await enderecoFiscalController.create({ statusEndFiscal });
        response.status(201).json({ message: "Endereço Fiscal criado!", enderecoFiscal: novoEnderecoFiscal });
    } catch (error) {
        response.status(400).json({ message: `Erro ao criar o endereço fiscal: ${error}` });
    }
});

enderecoFiscalRoutes.put("/:numEndFiscal", async (request, response) => {
    const numEndFiscal = parseInt(request.params.numEndFiscal);

    if (isNaN(numEndFiscal)) {
        response.status(400).json({ error: "ID Inválido." });
    }

    try {
        const enderecoFiscal = await enderecoFiscalController.findById(numEndFiscal);

        if (!enderecoFiscal) {
            response.status(404).json({ error: "Endereço Fiscal não encontrado." });
        }

        await enderecoFiscalController.update(numEndFiscal, request.body);
        response.status(200).json({ message: "Endereço Fiscal atualizado!" });
    } catch (error) {
        return response.status(400).json({ message: `Erro ao atualizar o endereço fiscal: ${error}` });
    }
});

enderecoFiscalRoutes.delete("/:numEndFiscal", async (request, response) => {
    const numEndFiscal = Number(request.params.numEndFiscal);

    try {
        await enderecoFiscalController.deleteById(numEndFiscal);
        response.status(200).json({ message: "Endereço Fiscal excluído!" });
    } catch (error) {
        response.status(400).json({ message: `Erro ao excluir o endereço fiscal: ${error}` });
    }
});

export { enderecoFiscalRoutes };
