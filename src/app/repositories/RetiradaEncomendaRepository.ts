import RetiradaEncomenda from "../entities/RetiradaEncomenda";
import IRetiradaEncomenda from "../interfaces/IRetiradaEncomenda";
import { AppDataSource } from "../../database/data-source";

class RetiradaEncomendaRepository{
    
    retiradaEncomendaRepository = AppDataSource.getRepository(RetiradaEncomenda);

    getRetiradaEncomenda = (): Promise<RetiradaEncomenda[]> => {
        return this.retiradaEncomendaRepository.find();
    }    
}

export default RetiradaEncomendaRepository;