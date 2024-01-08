import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import RecebimentoEncomenda from "../entities/RecebimentoEncomenda";
import IRecebimentoEncomendaCreate from "../interfaces/IRecebimentoEncomendaCreate";
import IRecebimentoEncomendaUpdate from "../interfaces/IRecebimentoEncomendaUpdate";


class RecebimentoEncomendaRepository {

    private recebimentoEncomendaRepository: Repository<RecebimentoEncomenda>;

    constructor() {
        this.recebimentoEncomendaRepository = AppDataSource.getRepository(RecebimentoEncomenda);
    }

    async create({ obsRecebEncomenda, encomendaIdEncomenda, enderecoFiscalNumEndFiscal }: IRecebimentoEncomendaCreate): Promise<RecebimentoEncomenda> {
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.create({
            obsRecebEncomenda,
            encomendaIdEncomenda,
            enderecoFiscalNumEndFiscal
        });
        return await this.recebimentoEncomendaRepository.save(recebimentoEncomenda);
    }

    async list(): Promise<RecebimentoEncomenda[]> {
        return await this.recebimentoEncomendaRepository.find();
    }

    async findById(idRecebEncomenda: number): Promise<RecebimentoEncomenda | null> {
        return await this.recebimentoEncomendaRepository.findOneOrFail({ where: [{ idRecebEncomenda }] });
    }

    async update(idRecebEncomenda: number, updatedData: IRecebimentoEncomendaUpdate): Promise<void> {
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.findOneOrFail({ where: [{ idRecebEncomenda }]});
         
        if(recebimentoEncomenda) {
            await this.recebimentoEncomendaRepository.update({ idRecebEncomenda}, { obsRecebEncomenda: updatedData.obsRecebEncomenda, encomendaIdEncomenda: updatedData.encomendaIdEncomenda, enderecoFiscalNumEndFiscal: updatedData.enderecoFiscalNumEndFiscal });
        }
    }

    async delete(idRecebEncomenda: number): Promise<void | null> {
        const recebimentoEncomenda = await this.recebimentoEncomendaRepository.findOne({ where: [{idRecebEncomenda}] });

        if(!recebimentoEncomenda) {
            throw new Error("Encomenda inexistente!");
        }
        await this.recebimentoEncomendaRepository.remove(recebimentoEncomenda);
    }
}

export { RecebimentoEncomendaRepository };