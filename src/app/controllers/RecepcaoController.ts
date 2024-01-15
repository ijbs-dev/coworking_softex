import { Request, Response, Router } from "express";
import Recepcao from "../entities/Recepcao";
import IRecepcao from "../interfaces/IRecepcao";
import { RecepcaoRepository } from "../repositories/RecepcaoRepository";

class RecepcaoController {
    
    constructor(private recepcaoRepository: RecepcaoRepository) {}

    async list(): Promise<Recepcao[]> {
        return await this.recepcaoRepository.list();
    }

    async findById(id: number): Promise<Recepcao> {
        const recepcao = await this.recepcaoRepository.findById(id);
        if(!recepcao) {
            throw new Error("Recepção inexistente!");
        }
        return recepcao;
    }
}
export { RecepcaoController };

