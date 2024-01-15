import { Router } from "express";
import { RecebimentoEncomendaRepository } from "../repositories/RecebimentoEncomendaRepository";
import { RecebimentoEncomendaController } from "../controllers/RecebimentoEncomendaController";
import { EncomendaRepository } from "../repositories/EncomendaRepository";
import { autenticacao } from "../middleware/autenticacao";

const recebimentoEncomendaRoutes = Router();
const recebimentoEncomendaRepository = new RecebimentoEncomendaRepository();
const encomendaRepository = new EncomendaRepository();
const recebimentoEncomendaController = new RecebimentoEncomendaController(recebimentoEncomendaRepository, encomendaRepository);

recebimentoEncomendaRoutes.get("/", async (request, response) => {
    
    try {
        await autenticacao(request, response, () => {});

        try {
            const recebimentoEncomenda = await recebimentoEncomendaController.list();

            response.status(200).json(recebimentoEncomenda);
        } catch (error) {
            response.status(400).json(error);
        }
    } catch (error) {
        response.status(401).json(error);
    }
    

})

recebimentoEncomendaRoutes.get("/id/:id", async (request, response) => {
    const id = Number(request.params.id);

    try {
        await autenticacao(request, response, () => {});

        try {
            const recebimentoEncomenda = await recebimentoEncomendaController.findById(id);
            response.status(200).json(recebimentoEncomenda);
        } catch (error) {
            response.status(400).json(error);
        }
    } catch (error) {
        response.status(401).json(error);
    }
})

recebimentoEncomendaRoutes.post("/", async (request, response) => {
    const { obsEncomenda, obsRecebEncomenda, numEndFiscal, idRecepcao } = request.body;

    try {
        await autenticacao(request, response, () => {});

        try {
            await recebimentoEncomendaController.create(numEndFiscal, obsEncomenda, obsRecebEncomenda, idRecepcao);
    
            response.status(201).json({ message: "Recebimento de Encomenda cadastrado!" });
        } catch(error) {
            response.status(400).json(error);
        }    
    } catch (error) {
        response.status(401).json(error);
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