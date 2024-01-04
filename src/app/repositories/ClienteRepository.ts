import Cliente from "../entities/Cliente";
import ICliente from "../interfaces/ICliente";
import { AppDataSource } from "../../database/data-source";

class ClienteRepository {
   
    clienteRepository = AppDataSource.getRepository(Cliente);

    getClients = (): Promise<Cliente[]> => {
        return this.clienteRepository.find();
    }

    getClientById = (id: number): Promise<Cliente[]> => {
        return this.clienteRepository.find({ where: { idCliente: id } });
    }

    createClient = (cliente: ICliente): Promise<Cliente> => {
        return this.clienteRepository.save(cliente);
    }

    updateClient = (cliente: ICliente): Promise<Cliente> => {
        return this.clienteRepository.save(cliente);
    }

    deleteClientById = async (id: number): Promise<Cliente | null> => {
        const cliente = await this.clienteRepository.findOne({ where: { idCliente: id } });
        if (cliente) {
            return this.clienteRepository.remove(cliente);
        }
        return null;
    }

}
    export default ClienteRepository




