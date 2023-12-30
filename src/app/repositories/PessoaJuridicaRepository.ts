import PessoaJuridica from "../entities/PessoaJuridica";
import IPessoaJuridica from "../interfaces/IPessoaJuridica";
import { AppDataSource } from "../../database/data-source";

class PessoaJuridicaRepository{
    
    pessoaJuridicaRepository = AppDataSource.getRepository(PessoaJuridica);

    getPessoaJuridica = (): Promise<PessoaJuridica[]> => {
        return this.pessoaJuridicaRepository.find();
    }    
}

export default PessoaJuridicaRepository;