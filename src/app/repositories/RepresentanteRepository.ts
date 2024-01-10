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

    async create(data: IRepresentanteCreate): Promise<Representante> {
        const representante = this.representanteRepository.create(data);
        return await this.representanteRepository.save(representante);
    }

    async list(): Promise<Representante[]> {
        return await this.representanteRepository.find();
    }

    async findById(idRepresent: number): Promise<Representante | null> {
        return await this.representanteRepository.findOne({ where: { idRepresent } });
    }

    async update(idRepresent: number, updatedData: IRepresentanteUpdate): Promise<void> {
        await this.representanteRepository.update(idRepresent, updatedData);
    }

    async delete(idRepresent: number): Promise<void | null> {
        const representante = await this.representanteRepository.findOne({ where: { idRepresent } });

        if (representante) {
            await this.representanteRepository.remove(representante);
        }
    }
}

export { RepresentanteRepository };
