import Encomenda from "../entities/Encomenda";
import IEncomenda from "../interfaces/IEncomenda";
import { AppDataSource } from "../../database/data-source";

class EncomendaRepository{
    
    encomendaRepository = AppDataSource.getRepository(Encomenda);

    getEncomenda = (): Promise<Encomenda[]> => {
        return this.encomendaRepository.find();
    }    

    getEncomendaById = (id: number): Promise<Encomenda[]> => {
        return this.encomendaRepository.find({ where: { idEncomenda: id } });
    }
}

export default EncomendaRepository;