import EnderecoFiscal from "../entities/EnderecoFiscal";
import IEndereco from "../interfaces/IEndereco";
import { AppDataSource } from "../../database/data-source";

class EnderecoFiscalRepository{
    
    enderecoFiscalRepository = AppDataSource.getRepository(EnderecoFiscal);

    getEnderecoFiscal = (): Promise<EnderecoFiscal[]> => {
        return this.enderecoFiscalRepository.find();
    }    

    getEnderecoFiscalById = (id: number): Promise<EnderecoFiscal[]> => {
        return this.enderecoFiscalRepository.find({ where: { numEndFiscal: id } });
    }

    createEnderecoFiscal = (enderecoFiscal: EnderecoFiscal): Promise<EnderecoFiscal> => {
        return this.enderecoFiscalRepository.save(enderecoFiscal);
    }

    updateEnderecoFiscal = (enderecoFiscal: EnderecoFiscal): Promise<EnderecoFiscal> => {
        return this.enderecoFiscalRepository.save(enderecoFiscal);
    }

    deleteEnderecoFiscalById = async (id: number): Promise<EnderecoFiscal | null> => {
        const enderecoFiscal = await this.enderecoFiscalRepository.findOne({ where: { numEndFiscal: id } });
        if (enderecoFiscal) {
            return this.enderecoFiscalRepository.remove(enderecoFiscal);
        }
        return null;
    }

}

export default EnderecoFiscalRepository;