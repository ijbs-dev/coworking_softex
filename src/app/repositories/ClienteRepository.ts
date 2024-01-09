import Cliente from "../entities/Cliente";
import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import IClienteCreate from "../interfaces/create/IClienteCreate";
import IClienteUpdate from "../interfaces/update/IClienteUpdate";

class ClienteRepository {
   
    private clienteRepository: Repository<Cliente>

    constructor() {
        this.clienteRepository = AppDataSource.getRepository(Cliente);
    }

  // Inserindo create Cliente junto com create Endereço
    async create({ nomeCliente, telefoneCliente, emailCliente, qtdPontosCliente, prazoCliente, valorMensalCliente }: IClienteCreate): Promise<Cliente> {
        const cliente = await this.clienteRepository.create({ nomeCliente, telefoneCliente, emailCliente, qtdPontosCliente, prazoCliente, valorMensalCliente });

        return await this.clienteRepository.save(cliente);
    }

    
    async list(): Promise<Cliente[]> {

        return await this.clienteRepository.find();
    }

    async findById(idCliente: number): Promise<Cliente | null> {

        return await this.clienteRepository.findOne({ where: { idCliente } });
    }

    async findByEmail(emailCliente: string): Promise<Cliente | null> {

        return await this.clienteRepository.findOne({ where: { emailCliente } });
    }


    async update(idCliente: number, updatedData: IClienteUpdate): Promise<void> {   
        
        const cliente = await this.clienteRepository.findOneOrFail({ where: { idCliente } });
        
        if (cliente) {
            await this.clienteRepository.update({ idCliente: idCliente}, { telefoneCliente: updatedData.telefoneCliente, emailCliente: updatedData.emailCliente, qtdPontosCliente: updatedData.qtdPontosCliente, prazoCliente: updatedData.prazoCliente, valorMensalCliente: updatedData.valorMensalCliente,  updatedAtCliente: new Date() });
        }
    }

    async delete(idCliente: number): Promise<void | null> {
        const cliente = await this.clienteRepository.findOne({where: { idCliente } });

        if (cliente) {
            await this.clienteRepository.remove(cliente);
        }
    }

}

export default ClienteRepository