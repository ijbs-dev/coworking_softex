import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import Endereco from "../entities/Endereco";
import IEndereco from "../interfaces/IEndereco";
import IEnderecoUpdate from "../interfaces/IEnderecoUpdate";


class EnderecoRepository{
    
    private enderecoRepository: Repository<Endereco>;

    constructor() {
        this.enderecoRepository = AppDataSource.getRepository(Endereco);
    }

    async create({ logradouro, numero, bairro, uf}: IEndereco): Promise<Endereco> {
        const endereco = await this.enderecoRepository.create({
            logradouro,
            numero,
            bairro,
            uf
        });
        return await this.enderecoRepository.save(endereco);
    }

    async list(): Promise<Endereco[]> {
        return await this.enderecoRepository.find();
    }

    async findById(idEndereco: number): Promise<Endereco | null> {
        return await this.enderecoRepository.findOneOrFail({where: [{ idEndereco }] });
    }

    async findByLogradouro(logradouro: string): Promise<Endereco | null> {
        return await this.enderecoRepository.findOne({ where: [{ logradouro }] });
    }

    async findByBairro(bairro: string): Promise<Endereco | null> {
        return await this.enderecoRepository.findOne({ where: [{ bairro }] });
    }

    async findByUf(uf: string): Promise<Endereco | null> {
        return await this.enderecoRepository.findOne({ where: [{ uf }] });
    }

    async update(idEndereco: number, updatedData: IEnderecoUpdate): Promise<void> {
        const endereco = await this.enderecoRepository.findOneOrFail({ where: [{ idEndereco}] });

        if(endereco) {
            await this.enderecoRepository.update({ idEndereco: idEndereco}, {logradouro: updatedData.logradouro, numero: updatedData.numero, bairro: updatedData.bairro, uf: updatedData.uf })
        }
    }

    async delete(idEndereco: number): Promise<void | null> {
        const endereco = await this.enderecoRepository.findOne({ where: [{ idEndereco }] })

        if(endereco) {
            await this.enderecoRepository.remove(endereco);
        }
    }
}

export { EnderecoRepository };



// getEndereco = (): Promise<Endereco[]> => {
//     return this.enderecoRepository.find();
// }    

// getEnderecoById = (id: number): Promise<Endereco[]> => {
//     return this.enderecoRepository.find({ where: { idEndereco: id } });
// }

// createEndereco = (endereco: Endereco): Promise<Endereco> => {
//     return this.enderecoRepository.save(endereco);
// }

// updateEndereco = (endereco: Endereco): Promise<Endereco> => {
//     return this.enderecoRepository.save(endereco);
// }

// deleteEnderecoById = async (id: number): Promise<Endereco | null> => {
//     const endereco = await this.enderecoRepository.findOne({ where: { idEndereco: id } });
//     if (endereco) {
//         return this.enderecoRepository.remove(endereco);
//     }
//     return null;
// }