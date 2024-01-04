import PessoaFisica from "../entities/PessoaFisica";
import IPessoaFisica from "../interfaces/IPessoaFisica";
import { AppDataSource } from "../../database/data-source";

class PessoaFisicaRepository{
    
    pessoaFisicaRepository = AppDataSource.getRepository(PessoaFisica);

    getPessoaFisica = (): Promise<PessoaFisica[]> => {
        return this.pessoaFisicaRepository.find();
    }    

    getPessoaFisicaById = (id: number): Promise<PessoaFisica[]> => {
        return this.pessoaFisicaRepository.find({ where: { idPfisica: id } });
    }

    createPessoaFisica = (pessoaFisica: PessoaFisica): Promise<PessoaFisica> => {
        return this.pessoaFisicaRepository.save(pessoaFisica);
    }

    updatePessoaFisica = (pessoaFisica: PessoaFisica): Promise<PessoaFisica> => {
        return this.pessoaFisicaRepository.save(pessoaFisica);
    }

    deletePessoaFisicaById = async (id: number): Promise<PessoaFisica | null> => {
        const pessoaFisica = await this.pessoaFisicaRepository.findOne({ where: { idPfisica: id } });
        if (pessoaFisica) {
            return this.pessoaFisicaRepository.remove(pessoaFisica);
        }
        return null;
    }
}

export default PessoaFisicaRepository;



