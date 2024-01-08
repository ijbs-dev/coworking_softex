
import Cliente from '../entities/Cliente';
import ClienteRepository from '../repositories/ClienteRepository';
import IClienteCreate from '../interfaces/IClienteCreate';
import IClienteUpdate from '../interfaces/IClienteUpdate';

class ClienteController {

  constructor(private clienteRepository: ClienteRepository) {}

  async create(clienteData: IClienteCreate): Promise<void> {
    
    const cliente = await this.clienteRepository.findByEmail(clienteData.emailCliente);

    if (cliente) {
      throw new Error("Cliente existente");
    }
  
    await this.clienteRepository.create(clienteData);
  }

  async list(): Promise<Cliente[]> {

    return await this.clienteRepository.list();
  }

  async findByEmail(email: string): Promise<Cliente> {

      const cliente = await this.clienteRepository.findByEmail(email);

      if(!cliente) {
          throw new Error("Cliente não existente!");
      }

      return cliente;
  }

  async findById(id: number): Promise<Cliente> {

      const cliente = await this.clienteRepository.findById(id);

      if(!cliente) {
          throw new Error("Cliente inexistente!");
      }

      return cliente;
  }

  async update(id: number, clienteData: IClienteUpdate): Promise<void> {

      const cliente = await this.clienteRepository.findById(id);

      if (!cliente) {
          throw new Error("Usuário inexistente!");
      }
      
      await this.clienteRepository.update(id, clienteData);
  }

  async deleteByid(id: number): Promise<void> {
      
      const cliente = await this.clienteRepository.findById(id);

      if (!cliente) {
          throw new Error("Usuário não existente!");
      }

      await this.clienteRepository.delete(id);
  }

}

export default ClienteController;
