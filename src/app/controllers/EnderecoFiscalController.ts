import EnderecoFiscal from "../entities/EnderecoFiscal";
import IEnderecoFiscalCreate from "../interfaces/IEnderecoFiscalCreate";
import IEnderecoFiscalUpdate from "../interfaces/IEnderecoFiscalUpdate";
import EnderecoFiscalRepository from "../repositories/EnderecoFiscalRepository";


class EnderecoFiscalController {

    constructor(private enderecoFiscalRepository: EnderecoFiscalRepository) {}

    async create(numEndFiscal: number): Promise<void> {

        const enderecoFiscal = await this.enderecoFiscalRepository.findByNumEndFiscal(numEndFiscal);

        if (enderecoFiscal) {
            throw new Error("Número de Endereço Fiscal existente!");
        }

        await this.enderecoFiscalRepository.create(numEndFiscal);
    }

    async list(): Promise<EnderecoFiscal[]> {
        return await this.enderecoFiscalRepository.list();
    }

    async findByNumEndFiscal(numEndFiscal: number): Promise<EnderecoFiscal> {
        
        const enderecoFiscal = await this.enderecoFiscalRepository.findByNumEndFiscal(numEndFiscal);

        if(!enderecoFiscal) {
            throw new Error("Endereço Fiscal inexistente!");
        }

        return enderecoFiscal;
    }

    async update(numEndFiscal: number, dadosEndereco: IEnderecoFiscalUpdate): Promise<void> {
        
        const enderecoFiscal = await this.enderecoFiscalRepository.findByNumEndFiscal(numEndFiscal);
        
        if(!enderecoFiscal) {
            throw new Error("Endereço Fiscal inexistente!");
        }

        await this.enderecoFiscalRepository.update(numEndFiscal, dadosEndereco);
        
    }

    async deleteByNumEndFiscal(numEndFiscal: number): Promise<void> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findByNumEndFiscal(numEndFiscal);

        if(!enderecoFiscal) {
            throw new Error("Endereço Fiscal inexistente!");
        }

        await this.enderecoFiscalRepository.delete(numEndFiscal);
    }
}

export { EnderecoFiscalController };


// enderecoFiscalRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
//     const enderecoFiscalRepository = new EnderecoFiscalRepository();
//     const enderecoFiscal = await enderecoFiscalRepository.getEnderecoFiscal();
//     return resp.status(200).json(enderecoFiscal);
// });

// enderecoFiscalRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
//     try {
//         const enderecoFiscalRepository = new EnderecoFiscalRepository();
//         const idEnderecoFiscal = parseInt(req.params.id, 10);

//         console.log("ID do EnderecoFiscal:", idEnderecoFiscal);

//         if (isNaN(idEnderecoFiscal)) {
//             console.log("ID do EnderecoFiscal inválido!");
//             return resp.status(400).json({ error: "ID do enderecoFiscal inválido!" });   
//         }
        
//         const enderecoFiscalEncontrado = await enderecoFiscalRepository.getEnderecoFiscalById(idEnderecoFiscal);

//         console.log("EnderecoFiscal Encontrado:", enderecoFiscalEncontrado);

//         if (enderecoFiscalEncontrado && enderecoFiscalEncontrado.length > 0) {
//             return resp.status(200).json(enderecoFiscalEncontrado);
//         } else {
//             console.log("EnderecoFiscal não encontrado.");
//             return resp.status(404).json({ error: "EnderecoFiscal não encontrado." });
//         }        
//     } catch(error) {
//         console.log("Erro ao buscar enderecoFiscal por ID:", error);
//         return resp.status(500).json({ error: "Erro ao buscar enderecoFiscal por ID.", details: error });
//     }
// });
