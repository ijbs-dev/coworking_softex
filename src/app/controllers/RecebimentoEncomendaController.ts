import RecebimentoEncomenda from "../entities/RecebimentoEncomenda";
import IRecebimentoEncomendaCreate from "../interfaces/IRecebimentoEncomendaCreate";
import IRecebimentoEncomendaUpdate from "../interfaces/IRecebimentoEncomendaUpdate";
import { RecebimentoEncomendaRepository } from "../repositories/RecebimentoEncomendaRepository";

class RecebimentoEncomendaController {

    constructor(private recebimentoEncomendaRepository: RecebimentoEncomendaRepository) {}

    async create(dadosRecbimentoEncomenda: IRecebimentoEncomendaCreate): Promise<void> {

        await this.recebimentoEncomendaRepository.create(dadosRecbimentoEncomenda);
    }

    async list(): Promise<RecebimentoEncomenda[]> {
        return await this.recebimentoEncomendaRepository.list();
    }

    async findById(idRecebEncomenda: number): Promise<RecebimentoEncomenda> {
        
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.findById(idRecebEncomenda);

        if(!recebimentoEncomenda) {
            throw new Error("Recebimendo de Encomenda inexistente!");
        }
        return recebimentoEncomenda;
    }

    async update(idRecebEncomenda: number, dadosRecebimentoEncomenda: IRecebimentoEncomendaUpdate): Promise<void> {
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.findById(idRecebEncomenda);

        if(!recebimentoEncomenda) {
            throw new Error("Recebimento de Encomenda inexistente!");
        }
        await this.recebimentoEncomendaRepository.update(idRecebEncomenda, recebimentoEncomenda);
    }

    async deleteById(id: number): Promise<void> {
        
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.findById(id);

        if (!recebimentoEncomenda) {
            throw new Error("Recebimento de encomenda inexistente!");
        }
        await this.recebimentoEncomendaRepository.delete(id);
    }
}

export { RecebimentoEncomendaController };