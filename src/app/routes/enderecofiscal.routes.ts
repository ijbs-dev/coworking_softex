import { Router } from "express";
import EnderecoFiscalRepository from "../repositories/EnderecoFiscalRepository";
import { EnderecoFiscalController } from "../controllers/EnderecoFiscalController";

const enderecoFiscalRoutes = Router();
const enderecoFiscalRepository = new EnderecoFiscalRepository();
const enderecoFiscalController = new EnderecoFiscalController(enderecoFiscalRepository);

enderecoFiscalRoutes.get("/", async (request, response) => {
    const enderecosFiscais = await enderecoFiscalController.list();

    return response.status(200).json(enderecosFiscais);
})

enderecoFiscalRoutes.get("/:numEndFiscal", async (request, response) => {
    
    const numEndFiscal = Number(request.params.numEndFiscal);

    try {
        const enderecoFiscal = await enderecoFiscalController.findByNumEndFiscal(numEndFiscal);
        response.status(200).json(enderecoFiscal);
    } catch (error) {
        response.status(400).json({ message: error });
    }
})

enderecoFiscalRoutes.post("/", async (request, response) => {
    const { numEndFiscal } = request.body;

    try {
        await enderecoFiscalController.create(numEndFiscal)
        response.status(201).json({ message: "Endereço Fiscal criado!" });
    } catch (error) {
        response.status(400).json({ message: error});
    }
})

enderecoFiscalRoutes.put("/:numEndFiscal", async (request, response) => {
    
    const numEndFiscal = parseInt(request.params.numEndFiscal);

    if(isNaN(numEndFiscal)) {
        response.status(400).json({ error: "ID Inválido."});
    }

    try {
        const enderecoFiscal = await enderecoFiscalController.findByNumEndFiscal(numEndFiscal);

        if(!enderecoFiscal) {
            response.status(404).json({ error: "Endereço Fiscal não encontrado."});   
        }

        await enderecoFiscalController.update(numEndFiscal, request.body)

        response.status(200).json({ message: "Endereço Fiscal atualizado!" });
    } catch(error) {
        return response.status(400).json({ message: "Erro ao atualizar o endereço fiscal"});
    }
})

enderecoFiscalRoutes.delete("/:numEndFiscal", async (request, response) => {
    
    const numEndFiscal = Number(request.params.numEndFiscal);

    try {
        enderecoFiscalController.deleteByNumEndFiscal(numEndFiscal);
        response.status(200).json({ message: "Endereço Fiscal excluído!"});
    } catch (error) {
        response.status(400).json({ message: "Erro ao excluir o endereço fiscal!" })
    }
})


export { enderecoFiscalRoutes };