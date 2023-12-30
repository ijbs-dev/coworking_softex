import Endereco from "../entities/Endereco";
import IEndereco from "../interfaces/IEndereco";
import { AppDataSource } from "../../database/data-source";

class EnderecoRepository{
    
    enderecoRepository = AppDataSource.getRepository(Endereco);

    getEndereco = (): Promise<Endereco[]> => {
        return this.enderecoRepository.find();
    }    
}

export default EnderecoRepository;