import { Router } from "express";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import { EnderecoController } from "../controllers/EnderecoController";

const enderecoRoutes = Router();
const enderecoRepository = new EnderecoRepository();
const enderecoController = new EnderecoController(enderecoRepository);

enderecoRoutes.get("/", async (request, response) => {
    const enderecos = await enderecoController.list();

    return response.status(200).json(enderecos);
})

enderecoRoutes.get("/id/:id", async (request, response) => {
    
    const id = Number(request.params.id);

    try {
        const endereco = await enderecoController.findById(id);
        response.status(200).json(endereco);
    } catch (error) {
        response.status(400).json({ message: error })
    }
})

enderecoRoutes.post("/", async (request, response) => {
    const { logradouro, numero, bairro, uf } = request.body;

    try {
        await enderecoController.create({
            logradouro,
            numero,
            bairro,
            uf
        })
        response.status(201).json({ message: "Endereço criado!" });
    } catch (error) {
        response.status(400).json({ message: error});
    }
})

enderecoRoutes.put("/:id", async (request, response) => {
    
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

enderecoRoutes.delete("/:id", async (request, response) => {
    
    const idEndereco = Number(request.params.id);

    try {
        enderecoController.deleteById(idEndereco);
        response.status(200).json({ message: "Endereço excluído!"});
    } catch (error) {
        response.status(400).json({ message: "Erro ao excluir endereço!" })
    }
})


export { enderecoRoutes };