import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import Encomenda from "../entities/Encomenda";
import IEncomendaCreate from "../interfaces/IEncomendaCreate";
import IEncomendaUpdate from "../interfaces/IEncomendaUpdate";


class EncomendaRepository {
    
  
    private encomendaRepository: Repository<Encomenda>;

    constructor() {
        this.encomendaRepository = AppDataSource.getRepository(Encomenda);
    }


    async create({ obsEncomenda, numEndFiscal}: IEncomendaCreate): Promise<Encomenda> {
        const encomenda = await this.encomendaRepository.create({
            obsEncomenda,
            numEndFiscal
        });

        return await this.encomendaRepository.save(encomenda);
    }

    async list(): Promise<Encomenda[]> {
        return await this.encomendaRepository.find();
    }

    async findById(idEncomenda: number): Promise<Encomenda | null> {
        return await this.encomendaRepository.findOneOrFail({ where: [{ idEncomenda }] });
    }

    async update(idEncomenda: number, updatedData: IEncomendaUpdate): Promise<void> {   
        
        const usuario = await this.encomendaRepository.findOneOrFail({ where: [{ idEncomenda }] });
        
        if (usuario) {
            await this.encomendaRepository.update({ idEncomenda: idEncomenda}, { obsEncomenda: updatedData.obsEncomenda });
        }
    }

    async delete(idEncomenda: number): Promise<void | null> {
        const usuario = await this.encomendaRepository.findOne({where: [{ idEncomenda }] });

        if (usuario) {
            await this.encomendaRepository.remove(usuario)
        }
    }

   
}

export { EncomendaRepository };
   
   
   
    
    // getEncomenda = (): Promise<Encomenda[]> => {
    //     return this.encomendaRepository.find();
    // }    

    // getEncomendaById = (id: number): Promise<Encomenda[]> => {
    //     return this.encomendaRepository.find({ where: { idEncomenda: id } });
    // }



    /**
     * deleteClientById = async (id: number): Promise<Cliente | null> => {
        const cliente = await this.clienteRepository.findOne({ where: { idCliente: id } });
        if (cliente) {
            return this.clienteRepository.remove(cliente);
        }
        return null;
    }

     */

    

