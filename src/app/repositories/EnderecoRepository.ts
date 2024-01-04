import Endereco from "../entities/Endereco";
import IEndereco from "../interfaces/IEndereco";
import { AppDataSource } from "../../database/data-source";

class EnderecoRepository{
    
    enderecoRepository = AppDataSource.getRepository(Endereco);

    getEndereco = (): Promise<Endereco[]> => {
        return this.enderecoRepository.find();
    }    

    getEnderecoById = (id: number): Promise<Endereco[]> => {
        return this.enderecoRepository.find({ where: { idEndereco: id } });
    }
}

export default EnderecoRepository;