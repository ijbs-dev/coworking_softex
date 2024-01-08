import EnderecoFiscal from "../entities/EnderecoFiscal";
import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import IEnderecoFiscalCreate from "../interfaces/IEnderecoFiscalCreate";
import IEnderecoFiscalUpdate from "../interfaces/IEnderecoFiscalUpdate";

class EnderecoFiscalRepository {
    
    private enderecoFiscalRepository: Repository<EnderecoFiscal>;

    constructor() {
        this.enderecoFiscalRepository = AppDataSource.getRepository(EnderecoFiscal);
    }

    async create(numEndFiscal: number): Promise<EnderecoFiscal> {
        const enderecoFiscal = await this.enderecoFiscalRepository.create({numEndFiscal});

        return await this.enderecoFiscalRepository.save(enderecoFiscal);
    }

    async list(): Promise<EnderecoFiscal[]> {
        return await this.enderecoFiscalRepository.find();
    }

    async findByNumEndFiscal(numEndFiscal: number): Promise<EnderecoFiscal | null> {
        return await this.enderecoFiscalRepository.findOne({where: { numEndFiscal } });
    }

    async update(numEndFiscal: number, updatedData: IEnderecoFiscalUpdate): Promise<void> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findOne({ where: { numEndFiscal } });

        if(enderecoFiscal) {
            await this.enderecoFiscalRepository.update({ numEndFiscal: numEndFiscal}, { numEndFiscal: updatedData.numEndFiscal, updatedAtEndFiscal: new Date() })
        }
    }

    async delete(numEndFiscal: number): Promise<void | null> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findOne({ where: { numEndFiscal } })

        if(enderecoFiscal) {
            await this.enderecoFiscalRepository.remove(enderecoFiscal);
        }
    }

    // getEnderecoFiscal = (): Promise<EnderecoFiscal[]> => {
    //     return this.enderecoFiscalRepository.find();
    // }    

    // getEnderecoFiscalById = (id: number): Promise<EnderecoFiscal[]> => {
    //     return this.enderecoFiscalRepository.find({ where: { numEndFiscal: id } });
    // }

    // createEnderecoFiscal = (enderecoFiscal: EnderecoFiscal): Promise<EnderecoFiscal> => {
    //     return this.enderecoFiscalRepository.save(enderecoFiscal);
    // }

    // updateEnderecoFiscal = (enderecoFiscal: EnderecoFiscal): Promise<EnderecoFiscal> => {
    //     return this.enderecoFiscalRepository.save(enderecoFiscal);
    // }

    // deleteEnderecoFiscalById = async (id: number): Promise<EnderecoFiscal | null> => {
    //     const enderecoFiscal = await this.enderecoFiscalRepository.findOne({ where: { numEndFiscal: id } });
    //     if (enderecoFiscal) {
    //         return this.enderecoFiscalRepository.remove(enderecoFiscal);
    //     }
    //     return null;
    // }

}

export default EnderecoFiscalRepository;