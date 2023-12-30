import Usuario from "../entities/Usuario";
import IUsuario from "../interfaces/IUsuario";
import { AppDataSource } from "../../database/data-source";

class UsuarioRepository{
    
    usuarioRepository = AppDataSource.getRepository(Usuario);

    getUsuario = (): Promise<Usuario[]> => {
        return this.usuarioRepository.find();
    }    
}

export default UsuarioRepository;
