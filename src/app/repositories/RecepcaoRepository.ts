import Recepcao from "../entities/Recepcao";
import IRecepcao from "../interfaces/IRecepcao";
import { AppDataSource } from "../../database/data-source";

class RecepcaoRepository{
    
    recepcaoRepository = AppDataSource.getRepository(Recepcao);

    getRecepcao = (): Promise<Recepcao[]> => {
        return this.recepcaoRepository.find();
    }    
}

export default RecepcaoRepository;