import EnderecoFiscal from "../entities/EnderecoFiscal";
import IEnderecoFiscalCreate from "../interfaces/create/IEnderecoFiscalCreate";
import IEnderecoFiscalUpdate from "../interfaces/update/IEnderecoFiscalUpdate";
import EnderecoFiscalRepository from "../repositories/EnderecoFiscalRepository";

class EnderecoFiscalController {
    findByNumEndFiscal(numEndFiscal: number) {
        throw new Error("Method not implemented.");
    }

    constructor(private enderecoFiscalRepository: EnderecoFiscalRepository) {}

    /**
     *     async create(dadosUsuario: IUsuarioCreate): Promise<void> {

        await this.usuarioRepository.create(dadosUsuario);
    }
     */

    async create(dadosEnderecoFiscal: IEnderecoFiscalCreate): Promise<void> {
        await this.enderecoFiscalRepository.create(dadosEnderecoFiscal);
    }


    async list(): Promise<EnderecoFiscal[]> {
        return await this.enderecoFiscalRepository.list();
    }

    async findById(numEndFiscal: number): Promise<EnderecoFiscal> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findById(numEndFiscal);

        if (!enderecoFiscal) {
            throw new Error("Endereço Fiscal inexistente!");
        }

        return enderecoFiscal;
    }

    async update(numEndFiscal: number, dadosEnderecoFiscal: IEnderecoFiscalUpdate): Promise<void> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findById(numEndFiscal);

        if (!enderecoFiscal) {
            throw new Error("Endereço Fiscal inexistente!");
        }

        await this.enderecoFiscalRepository.update(numEndFiscal, dadosEnderecoFiscal);
    }

    async deleteById(numEndFiscal: number): Promise<void> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findById(numEndFiscal);

        if (!enderecoFiscal) {
            throw new Error("Endereço Fiscal inexistente!");
        }

        await this.enderecoFiscalRepository.delete(numEndFiscal);
    }
}

export { EnderecoFiscalController };
