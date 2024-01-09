import EnderecoFiscal from "../entities/EnderecoFiscal";
import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import IEnderecoFiscalCreate from "../interfaces/create/IEnderecoFiscalCreate";
import IEnderecoFiscalUpdate from "../interfaces/update/IEnderecoFiscalUpdate";

class EnderecoFiscalRepository {

    private enderecoFiscalRepository: Repository<EnderecoFiscal>;

    constructor() {
        this.enderecoFiscalRepository = AppDataSource.getRepository(EnderecoFiscal);
    }


/*     async create({ statusEndFiscal }: IEnderecoFiscalCreate): Promise<EnderecoFiscal> {
        const enderecoFiscal = new EnderecoFiscal();
        enderecoFiscal.statusEndFiscal = statusEndFiscal;
    
        return await this.enderecoFiscalRepository.save(enderecoFiscal);
    } */
    
    async create({ statusEndFiscal }: IEnderecoFiscalCreate): Promise<EnderecoFiscal> {
        const enderecoFiscal = this.enderecoFiscalRepository.create({ statusEndFiscal });
        return await this.enderecoFiscalRepository.save(enderecoFiscal);
    }    

    async list(): Promise<EnderecoFiscal[]> {
        return await this.enderecoFiscalRepository.find();
    }

    async findById(numEndFiscal: number): Promise<EnderecoFiscal | null> {
        return await this.enderecoFiscalRepository.findOneOrFail({ where: [{ numEndFiscal }] });
    }

    async update(numEndFiscal: number, updatedData: IEnderecoFiscalUpdate): Promise<void> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findOneOrFail({ where: [{ numEndFiscal }] });

        if (enderecoFiscal) {
            await this.enderecoFiscalRepository.update({ numEndFiscal: numEndFiscal }, { statusEndFiscal: updatedData.statusEnderecoFiscal });
        }
    }

    async delete(numEndFiscal: number): Promise<void | null> {
        const enderecoFiscal = await this.enderecoFiscalRepository.findOne({ where: [{ numEndFiscal }] });

        if (enderecoFiscal) {
            await this.enderecoFiscalRepository.remove(enderecoFiscal);
        }
    }
}

export default EnderecoFiscalRepository;
