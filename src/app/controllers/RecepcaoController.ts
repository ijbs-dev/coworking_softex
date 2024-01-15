import { Request, Response, Router } from "express";
import Recepcao from "../entities/Recepcao";
import IRecepcao from "../interfaces/IRecepcao";
import { RecepcaoRepository } from "../repositories/RecepcaoRepository";

class RecepcaoController {
    
    // Adiconar private usuarioRepository: UsuarioRepository
    constructor(private recepcaoRepository: RecepcaoRepository) {}

    async list(): Promise<Recepcao[]> {
        return await this.recepcaoRepository.list();
    }

    /**
     * Adicionar:
     * 
     * const usuario = await this.usuarioRepository.findById(recepcao?.idUsuario);
        return [
            recepcao,
            usuario
        ];    
     */ 
    async findById(id: number): Promise<Recepcao> {
        const recepcao = await this.recepcaoRepository.findById(id);
        if(!recepcao) {
            throw new Error("Recepção inexistente!");
        }
        return recepcao;
    }
}
export { RecepcaoController };

