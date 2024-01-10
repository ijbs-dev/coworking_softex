import { Request, Response, Router } from "express";
import { RepresentanteRepository } from "../repositories/RepresentanteRepository";
import Representante from "../entities/Representante";

class RepresentanteController {
    
    constructor(private representanteRepository: RepresentanteRepository) {}

    async list(): Promise<Representante[]> {
        return await this.representanteRepository.list();
    }

    async findById(id: number): Promise<Representante> {
        const representante = await this.representanteRepository.findById(id);
        if(!representante) {
            throw new Error("Representante inexistente!");
        }
        return representante;
    }

    async create(data: any): Promise<Representante> {
        return await this.representanteRepository.create(data);
    }

    async update(id: number, data: any): Promise<void> {
        await this.representanteRepository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        await this.representanteRepository.delete(id);
    }
}

export { RepresentanteController };

