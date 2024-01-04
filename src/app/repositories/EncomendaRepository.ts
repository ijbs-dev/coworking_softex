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



    /**
     * deleteClientById = async (id: number): Promise<Cliente | null> => {
        const cliente = await this.clienteRepository.findOne({ where: { idCliente: id } });
        if (cliente) {
            return this.clienteRepository.remove(cliente);
        }
        return null;
    }

     */

    

}

export default EncomendaRepository;