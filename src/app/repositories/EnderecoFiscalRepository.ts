import EnderecoFiscal from "../entities/EnderecoFiscal";
import IEndereco from "../interfaces/IEndereco";
import { AppDataSource } from "../../database/data-source";

class EnderecoFiscalRepository{
    
    enderecoFiscalRepository = AppDataSource.getRepository(EnderecoFiscal);

    getEnderecoFiscal = (): Promise<EnderecoFiscal[]> => {
        return this.enderecoFiscalRepository.find();
    }    
}

export default EnderecoFiscalRepository;