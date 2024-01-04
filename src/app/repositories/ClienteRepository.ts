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
}
    export default ClienteRepository




