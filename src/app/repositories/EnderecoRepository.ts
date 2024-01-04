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

    createEndereco = (endereco: Endereco): Promise<Endereco> => {
        return this.enderecoRepository.save(endereco);
    }

    updateEndereco = (endereco: Endereco): Promise<Endereco> => {
        return this.enderecoRepository.save(endereco);
    }

    deleteEnderecoById = async (id: number): Promise<Endereco | null> => {
        const endereco = await this.enderecoRepository.findOne({ where: { idEndereco: id } });
        if (endereco) {
            return this.enderecoRepository.remove(endereco);
        }
        return null;
    }
}

export default EnderecoRepository;