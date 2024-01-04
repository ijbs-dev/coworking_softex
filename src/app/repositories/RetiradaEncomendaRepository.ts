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

    createRetiradaEncomenda = (retiradaEncomenda: RetiradaEncomenda): Promise<RetiradaEncomenda> => {
        return this.retiradaEncomendaRepository.save(retiradaEncomenda);
    }

    updateRetiradaEncomenda = (retiradaEncomenda: RetiradaEncomenda): Promise<RetiradaEncomenda> => {
        return this.retiradaEncomendaRepository.save(retiradaEncomenda);
    }

    deleteRetiradaEncomendaById = async (id: number): Promise<RetiradaEncomenda | null> => {
        const retiradaEncomenda = await this.retiradaEncomendaRepository.findOne({ where: { idRetirEncomenda: id } });
        if (retiradaEncomenda) {
            return this.retiradaEncomendaRepository.remove(retiradaEncomenda);
        }
        return null;
    }
}

export default RetiradaEncomendaRepository;