import RetiradaEncomenda from "../entities/RetiradaEncomenda";
import IRetiradaEncomenda from "../interfaces/IRetiradaEncomenda";
import { AppDataSource } from "../../database/data-source";

class RetiradaEncomendaRepository{
    
    retiradaEncomendaRepository = AppDataSource.getRepository(RetiradaEncomenda);

    getRetiradaEncomenda = (): Promise<RetiradaEncomenda[]> => {
        return this.retiradaEncomendaRepository.find();
    }    

    getRetiradaEncomendaById = (id: number): Promise<RetiradaEncomenda[]> => {
        return this.retiradaEncomendaRepository.find({ where: { idRetirEncomenda: id } });
    }
}

export default RetiradaEncomendaRepository;