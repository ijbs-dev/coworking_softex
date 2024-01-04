import PessoaJuridica from "../entities/PessoaJuridica";
import IPessoaJuridica from "../interfaces/IPessoaJuridica";
import { AppDataSource } from "../../database/data-source";

class PessoaJuridicaRepository{
    
    pessoaJuridicaRepository = AppDataSource.getRepository(PessoaJuridica);

    getPessoaJuridica = (): Promise<PessoaJuridica[]> => {
        return this.pessoaJuridicaRepository.find();
    }    

    getPessoaJuridicaById = (id: number): Promise<PessoaJuridica[]> => {
        return this.pessoaJuridicaRepository.find({ where: { idPJuridica: id } });
    }
}

export default PessoaJuridicaRepository;