import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import Endereco from "../entities/Endereco";
import IEnderecoUpdate from "../interfaces/IEnderecoUpdate";
import IEnderecoCreate from "../interfaces/IEnderecoCreate";


class EnderecoRepository{
    
    private enderecoRepository: Repository<Endereco>;

    constructor() {
        this.enderecoRepository = AppDataSource.getRepository(Endereco);
    }

    async create({ logradouro, numero, bairro, uf}: IEnderecoCreate): Promise<Endereco> {
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
