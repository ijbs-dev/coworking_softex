import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";
import Usuario from "../entities/Usuario";
//import IUsuario from "../interfaces/IUsuarioCreate";
import IUsuarioUpdate from "../interfaces/update/IUsuarioUpdate";
import IUsuarioCreate from "../interfaces/create/IUsuarioCreate";

class UsuarioRepository {

    private usuarioRepository: Repository<Usuario>;

    constructor() {
        this.usuarioRepository = AppDataSource.getRepository(Usuario);
    }

    async create({ nomeUsuario, funcaoUsuario, emailUsuario, loginUsuario, senhaUsuario}: IUsuarioCreate): Promise<Usuario> {
        const usuario = await this.usuarioRepository.create({
            nomeUsuario,
            funcaoUsuario,
            emailUsuario,
            loginUsuario,
            senhaUsuario,
        });

        return await this.usuarioRepository.save(usuario);
    }

    async list(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findByEmail(emailUsuario: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({ where: [{ emailUsuario }] });
    }

    async findById(idUsuario: number): Promise<Usuario | null> {
        return await this.usuarioRepository.findOneOrFail({ where: [{ idUsuario }] });
    }

    async update(idUsuario: number, updatedData: IUsuarioUpdate): Promise<void> {   
        
        const usuario = await this.usuarioRepository.findOneOrFail({ where: [{ idUsuario }] });
        
        if (usuario) {
            await this.usuarioRepository.update({ idUsuario: idUsuario}, { nomeUsuario: updatedData.nomeUsuario, senhaUsuario: updatedData.senhaUsuario });
        }
    }

    async delete(idUsuario: number): Promise<void> {
        const usuario = await this.usuarioRepository.findOne({ where: { idUsuario } });

        if (usuario) {
            await this.usuarioRepository.remove(usuario);
        }
    }

}

export { UsuarioRepository };
