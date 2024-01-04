import RecebimentoEncomenda from "../entities/RecebimentoEncomenda";
import IRecebimentoEncomenda from "../interfaces/IRecebimentoEncomenda";
import { AppDataSource } from "../../database/data-source";

class RecebimentoEncomendaRepository{
    
    recebimentoEncomendaRepository = AppDataSource.getRepository(RecebimentoEncomenda);

    getRecebimentoEncomenda = (): Promise<RecebimentoEncomenda[]> => {
        return this.recebimentoEncomendaRepository.find();
    }    

    getRecebimentoEncomendaById = (id: number): Promise<RecebimentoEncomenda[]> => {
        return this.recebimentoEncomendaRepository.find({ where: { idRecebEncomenda: id } });
    }
}

export default RecebimentoEncomendaRepository;