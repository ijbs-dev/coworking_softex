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

    createPessoaJuridica = (pessoaJuridica: PessoaJuridica): Promise<PessoaJuridica> => {
        return this.pessoaJuridicaRepository.save(pessoaJuridica);
    }

    updatePessoaJuridica = (pessoaJuridica: PessoaJuridica): Promise<PessoaJuridica> => {
        return this.pessoaJuridicaRepository.save(pessoaJuridica);
    }

    deletePessoaJuridicaById = async (id: number): Promise<PessoaJuridica | null> => {
        const pessoaJuridica = await this.pessoaJuridicaRepository.findOne({ where: { idPJuridica: id } });
        if (pessoaJuridica) {
            return this.pessoaJuridicaRepository.remove(pessoaJuridica);
        }
        return null;
    }
}

export default PessoaJuridicaRepository;