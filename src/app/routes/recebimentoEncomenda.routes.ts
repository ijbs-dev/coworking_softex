import { Router } from "express";
import { RecebimentoEncomendaRepository } from "../repositories/RecebimentoEncomendaRepository";
import { RecebimentoEncomendaController } from "../controllers/RecebimentoEncomendaController";
import { EncomendaRepository } from "../repositories/EncomendaRepository";

const recebimentoEncomendaRoutes = Router();
const recebimentoEncomendaRepository = new RecebimentoEncomendaRepository();
const encomendaRepository = new EncomendaRepository();
const recebimentoEncomendaController = new RecebimentoEncomendaController(recebimentoEncomendaRepository, encomendaRepository);

recebimentoEncomendaRoutes.get("/", async (request, response) => {
    const recebimentoEncomenda = await recebimentoEncomendaController.list();

    return response.status(200).json(recebimentoEncomenda);
})

recebimentoEncomendaRoutes.get("/id/:id", async (request, response) => {
    const id = Number(request.params.id);

    try {
        const recebimentoEncomenda = await recebimentoEncomendaController.findById(id);
        response.status(200).json(recebimentoEncomenda);
    } catch (error) {
        response.status(400).json({ message: error })
    }
})

/**
 * enderecoRoutes.put("/:id", async (request, response) => {
    
    const idEndereco = parseInt(request.params.id);
    const { logradouro, numero, bairro, uf } = request.body;

    if(isNaN(idEndereco)) {
        response.status(400).json({ error: "ID Inválido."});
    }

    try {
        const endereco = await enderecoController.findById(idEndereco);

        if(!endereco) {
            response.status(404).json({ error: "Endereço não encontrado."});   
        }
        await enderecoController.update(idEndereco, {logradouro, numero, bairro, uf})

        response.status(200).json({ message: "Endereço atualizado!" });
    } catch(error) {
        return response.status(400).json({ message: "Erro ao atualizar endereço"});
    }
})

 */

// recebimentoEncomendaRoutes.put("/:id",  async (request, response) => {
//     const idRecebimentoEncomenda = Number(request.params.id);
//     const { 
//         obsRecebEncomenda,
//         encomendaIdEncomenda,
//         enderecoFiscalNumEndFiscal,
//         } = request.body;

//     if(isNaN(idRecebimentoEncomenda)) {
//         response.status(400).json({ error: "ID Inválido."});
//     }

//     try {
//         const recebimentoEncomenda = await recebimentoEncomendaController.findById(idRecebimentoEncomenda);

//         if(!recebimentoEncomenda) {
//             response.status(404).json({ error: "Recebimento de Encomenda não encontrado."});   
//         }
//         await recebimentoEncomendaController.update(idRecebimentoEncomenda, {            
//             obsRecebEncomenda,
//             encomendaIdEncomenda,
//             enderecoFiscalNumEndFiscal,
//         })

//         response.status(200).json({ message: "Recebimento de Encomenda atualizado!" });
//     } catch(error) {
//         return response.status(400).json({ message: "Erro ao atualizar Recebimento de Encomenda"});
//     }
// })

recebimentoEncomendaRoutes.post("/", async (request, response) => {
    const { obsEncomenda, obsRecebEncomenda, numEndFiscal, idRecepcao } = request.body;

    try {
        await recebimentoEncomendaController.create(numEndFiscal, obsEncomenda, obsRecebEncomenda, idRecepcao);

        response.status(201).json({ message: "Recebimento de Encomenda cadastrado!" });
    } catch(error) {
        response.status(400).json(error)
    }
});
    
recebimentoEncomendaRoutes.delete("/:id", async(request, response) => {

    const idRecebimentoEncomenda = Number(request.params.id);

    try {
        recebimentoEncomendaController.deleteById(idRecebimentoEncomenda);
        response.status(200).json({ message: "Recebimento de Encomenda excluído!"});
    } catch(error) {
        response.status(400).json({ message: "Erro ao excluir Recebimento de Encomenda!" })
    }
})

export { recebimentoEncomendaRoutes };