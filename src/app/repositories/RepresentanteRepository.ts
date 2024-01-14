import Representante from "../entities/Representante";
import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import IRepresentanteCreate from "../interfaces/create/IRepresentanteCreate";
import IRepresentanteUpdate from "../interfaces/update/IRepresentanteUpdate";

class RepresentanteRepository {

    private representanteRepository: Repository<Representante>;

    constructor() {
        this.representanteRepository = AppDataSource.getRepository(Representante);
    }

    async create({ nomeRepresent, emailRepresent, telefoneRepresent, idPJuridica }: IRepresentanteCreate): Promise<Representante> {
        const representante = await this.representanteRepository.create({
            nomeRepresent,
            emailRepresent,
            telefoneRepresent,
            idPJuridica
        });
        
        await this.representanteRepository.save(representante);
        
        return representante;
    }

    async list(): Promise<Representante[]> {
        return await this.representanteRepository.find();
    }

    async findById(idRepresent: number): Promise<Representante | null> {
        return await this.representanteRepository.findOne({ where: { idRepresent } });
    }

    async findByPj(id: number): Promise<Representante | null> {
        return await this.representanteRepository.findOne({ where: { idPJuridica: id } });
    }

    async findByEmail(email: string): Promise<Representante | null> {
        return await this.representanteRepository.findOne({ where: { emailRepresent: email } });
    }

    async update(idRepresent: number, updatedData: IRepresentanteUpdate): Promise<void> {
        await this.representanteRepository.update(idRepresent, updatedData);
    }

    async inativarTodos(idPessoaJuridica: number): Promise<void> {
        
        const representantes = await this.representanteRepository.find({ where: { idPJuridica: idPessoaJuridica } });
        
        for (let i = 0; i < representantes.length; i++) {
            if(representantes[i]) {
                await this.representanteRepository.update({ idRepresent: representantes[i].idRepresent }, { statusRepresent: 0 });
            }
        }
    }

    async ativarTodos(idPessoaJuridica: number): Promise<void> {
        
        const representantes = await this.representanteRepository.find({ where: { idPJuridica: idPessoaJuridica } });
        
        for (let i = 0; i < representantes.length; i++) {
            if(representantes[i]) {
                await this.representanteRepository.update({ idRepresent: representantes[i].idRepresent }, { statusRepresent: 1 });
            }
        }
    }

    async delete(idRepresent: number): Promise<void | null> {
        const representante = await this.representanteRepository.findOne({ where: { idRepresent } });

        if (representante) {
            await this.representanteRepository.remove(representante);
        }
    }
}

export { RepresentanteRepository };
