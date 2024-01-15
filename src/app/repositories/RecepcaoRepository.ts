import Recepcao from "../entities/Recepcao";
import { Repository } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import IRecepcao from "../interfaces/IRecepcao";

class RecepcaoRepository {
    private recepcaoRepository: Repository<Recepcao>;

    constructor() {
        this.recepcaoRepository = AppDataSource.getRepository(Recepcao);
    }

    async create({ idUsuario }: IRecepcao): Promise<Recepcao> {
        const recepcao = await this.recepcaoRepository.create({
            idUsuario
        });
        return await this.recepcaoRepository.save(recepcao);
    }   
    
    async list(): Promise<Recepcao[]> {
        return await this.recepcaoRepository.find();
    }

    async findById(idRecepcao: number): Promise<Recepcao | null> {
        return await this.recepcaoRepository.findOneOrFail({ where: [{ idRecepcao }] });
    }

    async findByIdUsuario(idUsuario: number): Promise<Recepcao | null> {
        return await this.recepcaoRepository.findOne({ where: { idUsuario } });
    }
}


export { RecepcaoRepository };

