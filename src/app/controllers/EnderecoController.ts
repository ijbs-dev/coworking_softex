import { Request, Response, Router } from "express";
import { EnderecoRepository } from "../repositories/EnderecoRepository";
import IEndereco from "../interfaces/IEndereco";
import Endereco from "../entities/Endereco";
import IEnderecoUpdate from "../interfaces/IEnderecoUpdate";

class EnderecoController {
    
    constructor(private enderecoRepository: EnderecoRepository) {}

    async create(dadosEndereco: IEndereco): Promise<void> {
        //criar validação para verificar se já existe endereço

        await this.enderecoRepository.create(dadosEndereco);
    }


    async list(): Promise<Endereco[]> {
        return await this.enderecoRepository.list();
    }

    async findById(id: number): Promise<Endereco> {
        
        const endereco = await this.enderecoRepository.findById(id);

        if(!endereco) {
            throw new Error("Endereço inexistente!");
        }

        return endereco;
    }

    async update(id: number, dadosEndereco: IEnderecoUpdate): Promise<void> {
        
        const endereco = await this.enderecoRepository.findById(id);
        
        if(!endereco) {
            throw new Error("Endereço inexistente!");
        }

        await this.enderecoRepository.update(id, dadosEndereco);
        
    }

    async deleteById(id: number): Promise<void> {
        const endereco = await this.enderecoRepository.findById(id);

        if(!endereco) {
            throw new Error("Endereço inexistente!");
        }

        await this.enderecoRepository.delete(id);
    }
}

export { EnderecoController };

// const enderecoRouter = Router();
// enderecoRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
//     const enderecoRepository = new EnderecoRepository();
//     const endereco = await enderecoRepository.getEndereco();
//     return resp.status(200).json(endereco);
// });

// enderecoRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
//     try {
//         const enderecoRepository = new EnderecoRepository();
//         const idEndereco = parseInt(req.params.id, 10);

//         console.log("ID do Endereco:", idEndereco);

//         if (isNaN(idEndereco)) {
//             console.log("ID do Endereco inválido!");
//             return resp.status(400).json({ error: "ID do endereco inválido!" });   
//         }
        
//         const enderecoEncontrado = await enderecoRepository.getEnderecoById(idEndereco);

//         console.log("Endereco Encontrado:", enderecoEncontrado);

//         if (enderecoEncontrado && enderecoEncontrado.length > 0) {
//             return resp.status(200).json(enderecoEncontrado);
//         } else {
//             console.log("Endereco não encontrado.");
//             return resp.status(404).json({ error: "Endereco não encontrado." });
//         }        
//     } catch(error) {
//         console.log("Erro ao buscar endereco por ID:", error);
//         return resp.status(500).json({ error: "Erro ao buscar endereco por ID.", details: error });
//     }
// });