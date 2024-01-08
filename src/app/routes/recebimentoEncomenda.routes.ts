import { Router } from "express";
import { RecebimentoEncomendaRepository } from "../repositories/RecebimentoEncomendaRepository";
import { RecebimentoEncomendaController } from "../controllers/RecebimentoEncomendaController";

const recebimentoEncomendaRoutes = Router();
const recebimentoEncomendaRepository = new RecebimentoEncomendaRepository();
const recebimentoEncomendaController = new RecebimentoEncomendaController(recebimentoEncomendaRepository);

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


recebimentoEncomendaRoutes.post("/", async(request, response) => {
    const { 
        dataHoraRecebEncomenda,
        obsRecebEncomenda,
        encomendaIdEncomenda,
        enderecoFiscalNumEndFiscal,
        } = request.body;

    try {
        await recebimentoEncomendaController.create({
            dataHoraRecebEncomenda,
            obsRecebEncomenda,
            encomendaIdEncomenda,
            enderecoFiscalNumEndFiscal
        })
        response.status(201).json({ message: "Recebimento de Encomenda cadastrado!" });
    } catch (error) {
        response.status(400).json({ message: error});
    }
})

recebimentoEncomendaRoutes.delete("/:id", async(request, response) => {

    const idRecebimentoEncomenda = Number(request.params.id);

    try {
        recebimentoEncomendaController.deleteById(idRecebimentoEncomenda);
        response.status(200).json({ message: "Reecbimento de Encomenda excluído!"});
    } catch(error) {
        response.status(400).json({ message: "Erro ao excluir Recebimento de Encomenda!" })
    }
})


export { recebimentoEncomendaRoutes };