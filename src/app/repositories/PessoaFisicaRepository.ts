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
}

export default PessoaFisicaRepository;



