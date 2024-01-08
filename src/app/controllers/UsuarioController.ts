import Usuario from "../entities/Usuario";
import { UsuarioRepository}  from "../repositories/UsuarioRepository";
import IUsuarioCreate from "../interfaces/IUsuarioCreate";
import IUsuarioUpdate from "../interfaces/IUsuarioUpdate";

class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async create(dadosUsuario: IUsuarioCreate): Promise<void> {

        const usuario = await this.usuarioRepository.findByEmail(dadosUsuario.emailUsuario);

        if (usuario) {
            throw new Error("Usuário já existente!");
        }

        await this.usuarioRepository.create(dadosUsuario);
    }

    async list(): Promise<Usuario[]> {

        return await this.usuarioRepository.list();
    }

    async findByEmail(email: string): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findByEmail(email);

        if(!usuario) {
            throw new Error("Usuário não existente!");
        }

        return usuario;
    }

    async findById(id: number): Promise<Usuario> {

        const usuario = await this.usuarioRepository.findById(id);

        if(!usuario) {
            throw new Error("Usuário inexistente!");
        }

        return usuario;
    }

    async update(id: number, dadosUsuario: IUsuarioUpdate): Promise<void> {

        const usuario = await this.usuarioRepository.findById(id);

        if (!usuario) {
            throw new Error("Usuário inexistente!");
        }
         
        await this.usuarioRepository.update(id, dadosUsuario);
    }

    async deleteByid(id: number): Promise<void> {
        
        const usuario = await this.usuarioRepository.findById(id);

        if (!usuario) {
            throw new Error("Usuário não existente!");
        }

        await this.usuarioRepository.delete(id);
    }

}

export { UsuarioController };
