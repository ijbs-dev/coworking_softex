import Usuario from "../entities/Usuario";
import { UsuarioRepository}  from "../repositories/UsuarioRepository";
import IUsuarioCreate from "../interfaces/create/IUsuarioCreate";
import IUsuarioUpdate from "../interfaces/update/IUsuarioUpdate";
import { AppError } from "../errors/AppError";
import { AdminRepository } from "../repositories/AdminRepository";
import { RecepcaoRepository } from "../repositories/RecepcaoRepository";

class UsuarioController {

    constructor(
        private usuarioRepository: UsuarioRepository,
        private adminRepository: AdminRepository,
        private recepcaoRepository: RecepcaoRepository
    ) {}

    async createAdmin(dadosUsuario: IUsuarioCreate): Promise<void> {

        const usuario = await this.usuarioRepository.findByEmail(dadosUsuario.emailUsuario);

        if (usuario) {
            throw new AppError("Usuário com E-mail já existente!");
        }

        const usuarioCriado = await this.usuarioRepository.create(dadosUsuario);
        const idUsuario = usuarioCriado.idUsuario;
        
        await this.adminRepository.create({ idUsuario });
    }

    async createRecepcao(dadosUsuario: IUsuarioCreate): Promise<void> {

        const usuario = await this.usuarioRepository.findByEmail(dadosUsuario.emailUsuario);

        if (usuario) {
            throw new AppError("Usuário com E-mail já existente!");
        }

        const usuarioCriado = await this.usuarioRepository.create(dadosUsuario);
        const idUsuario = usuarioCriado.idUsuario;

        await this.recepcaoRepository.create({ idUsuario });
    }

    async list(): Promise<Usuario[]> {

        return await this.usuarioRepository.list();
    }

    async listAtivos(): Promise<Usuario[]> {

        return await this.usuarioRepository.listAtivos();
    }

    async listInativos(): Promise<Usuario[]> {

        return await this.usuarioRepository.listInativos();
    }

    async findByEmail(email: string): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findByEmail(email);

        if(!usuario) {
            throw new AppError("Usuário não existente!");
        }

        return usuario;
    }

    async findById(id: number): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findById(id);

        if(!usuario) {
            throw new AppError("Usuário inexistente!");
        }

        return usuario;
    }

    async update(id: number, dadosUsuario: IUsuarioUpdate): Promise<void> {

        const usuario = await this.usuarioRepository.findById(id);

        if (!usuario) {
            throw new AppError("Usuário inexistente!");
        }
         
        await this.usuarioRepository.update(id, dadosUsuario);
    }

    async deleteByid(id: number): Promise<void> {
        
        const usuario = await this.usuarioRepository.findById(id);

        if (!usuario) {
            throw new AppError("Usuário não existente!");
        }

        await this.usuarioRepository.delete(id);
    }

}

export { UsuarioController };
