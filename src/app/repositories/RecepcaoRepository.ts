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
}


export { RecepcaoRepository };

// class RecepcaoRepository{
    
//     recepcaoRepository = AppDataSource.getRepository(Recepcao);

//     getRecepcao = (): Promise<Recepcao[]> => {
//         return this.recepcaoRepository.find();
//     }    

//     getRecepcaoById = (id: number): Promise<Recepcao[]> => {
//         return this.recepcaoRepository.find({ where: { idRecepcao: id } });
//     }

//     createRecepcao = (recepcao: Recepcao): Promise<Recepcao> => {
//         return this.recepcaoRepository.save(recepcao);
//     }

//     updateRecepcao = (recepcao: Recepcao): Promise<Recepcao> => {
//         return this.recepcaoRepository.save(recepcao);
//     }

//     deleteRecepcaoById = async (id: number): Promise<Recepcao | null> => {
//         const recepcao = await this.recepcaoRepository.findOne({ where: { idRecepcao: id } });
//         if (recepcao) {
//             return this.recepcaoRepository.remove(recepcao);
//         }
//         return null;
//     }
    
// }
