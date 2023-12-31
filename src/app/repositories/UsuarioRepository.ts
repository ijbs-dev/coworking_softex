import Usuario from "../entities/Usuario";
import IUsuario from "../interfaces/IUsuario";
import { AppDataSource } from "../../database/data-source";
import { Repository } from "typeorm";

class UsuarioRepository{

    
    private usuarioRepository: Repository<Usuario>;

    constructor() {
        this.usuarioRepository = AppDataSource.getRepository(Usuario);
    }

    createUsuario = async (usuario: Usuario): Promise<Usuario | null> => {
        const usuarioExistente = await this.usuarioRepository.findOne({
            where: [{ emailUsuario: usuario.emailUsuario }, { loginUsuario: usuario.loginUsuario }],
        });

        if (usuarioExistente) {
            throw new Error("Usuário já existe!")
            return null;
        }

        return await this.usuarioRepository.save(usuario) ?? null;
    }

    getUsuario = (): Promise<Usuario[]> => {
        return this.usuarioRepository.find();
    }

    findByEmail = async(emailUsuario: string): Promise<Usuario | null> => {
        return await this.usuarioRepository.findOne({ where: [{ emailUsuario: emailUsuario }] });
    }

    findById = async (idUsuario: number): Promise<Usuario | null> => {
        return await this.usuarioRepository.findOneOrFail({ where: [{ idUsuario: idUsuario }] });
    
    }

    deleteUsuario = async (idUsuario: number): Promise<boolean> => {
        const usuarioExistente = await this.usuarioRepository.findOne({where: [{ idUsuario: idUsuario }] });

        if(usuarioExistente) {
            await this.usuarioRepository.remove(usuarioExistente);
            return true;
        } else {
            return false;
        }
    }
    
    deleteUsuarioEmail = async (emailUsuario: string): Promise<boolean> => {
        const usuarioExistente = await this.usuarioRepository.findOne({ where: [{ emailUsuario: emailUsuario }] });
        // ({where: [{ emailUsuario: emailUsuario }] });

        if(usuarioExistente) {
            await this.usuarioRepository.remove(usuarioExistente);
            return true;
        } else {
            return false;
        }
    }
}

export default UsuarioRepository;
