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

    createRecebimentoEncomenda = (recebimentoEncomenda: RecebimentoEncomenda): Promise<RecebimentoEncomenda> => {
        return this.recebimentoEncomendaRepository.save(recebimentoEncomenda);
    }

    updateRecebimentoEncomenda = (recebimentoEncomenda: RecebimentoEncomenda): Promise<RecebimentoEncomenda> => {
        return this.recebimentoEncomendaRepository.save(recebimentoEncomenda);
    }

    deleteRecebimentoEncomendaById = async (id: number): Promise<RecebimentoEncomenda | null> => {
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.findOne({ where: { idRecebEncomenda: id } });
        if (recebimentoEncomenda) {
            return this.recebimentoEncomendaRepository.remove(recebimentoEncomenda);
        }
        return null;
    }
    
}

export default RecebimentoEncomendaRepository;