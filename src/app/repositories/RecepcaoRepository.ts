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
}

export default RecepcaoRepository;