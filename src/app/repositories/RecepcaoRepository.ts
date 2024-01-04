import Recepcao from "../entities/Recepcao";
import IRecepcao from "../interfaces/IRecepcao";
import { AppDataSource } from "../../database/data-source";

class RecepcaoRepository{
    
    recepcaoRepository = AppDataSource.getRepository(Recepcao);

    getRecepcao = (): Promise<Recepcao[]> => {
        return this.recepcaoRepository.find();
    }    

    getRecepcaoById = (id: number): Promise<Recepcao[]> => {
        return this.recepcaoRepository.find({ where: { idRecepcao: id } });
    }

    createRecepcao = (recepcao: Recepcao): Promise<Recepcao> => {
        return this.recepcaoRepository.save(recepcao);
    }

    updateRecepcao = (recepcao: Recepcao): Promise<Recepcao> => {
        return this.recepcaoRepository.save(recepcao);
    }

    deleteRecepcaoById = async (id: number): Promise<Recepcao | null> => {
        const recepcao = await this.recepcaoRepository.findOne({ where: { idRecepcao: id } });
        if (recepcao) {
            return this.recepcaoRepository.remove(recepcao);
        }
        return null;
    }
    
}

export default RecepcaoRepository;