import { Request, Response, Router } from "express";
import Usuario from "../entities/Usuario";
import IUsuario from "../interfaces/IUsuario";
import UsuarioRepository from "../repositories/UsuarioRepository";

const usuarioRouter = Router();

usuarioRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const usuarioRepository = new UsuarioRepository();
    const usuario = await usuarioRepository.getUsuario();
    return resp.status(200).json(usuario);
});

//corrigir para o get email devolver vários usuarios por email (se for aplicável)
usuarioRouter.get("/email/:email", async(req: Request, resp: Response): Promise<Response> => {
    try {
        const usuarioRepository = new UsuarioRepository();
        const email = req.params.email;
        const usuarioEncontrado = await usuarioRepository.findByEmail(email);

        if(usuarioEncontrado) {
            return resp.status(200).json(usuarioEncontrado);
        } else {
            return resp.status(404).json({ error: "Usuário não encontrado."});
        }
    } catch(error) {
        return resp.status(500).json({ error: "Erro ao buscar usuário por email", details: error})
    }
});

usuarioRouter.get("/:id", async(req: Request, resp: Response): Promise<Response> => {
    try{
        const usuarioRepository = new UsuarioRepository();
        const idUsuario = parseInt(req.params.id, 10);

        if(isNaN(idUsuario)) {
            return resp.status(400).json({ error: "ID do usuário inválido!"});   
        }
        
        const usuarioEncontrado = await usuarioRepository.findById(idUsuario);

        if(usuarioEncontrado) {
            return resp.status(200).json(usuarioEncontrado);
        } else {
            return resp.status(404).json({ error: "Usuário não encontrado. "});
        }
    } catch(error) {
        return resp.status(500).json({ error: "Erro ao buscar usuário por ID.", details: error });
    }
})


usuarioRouter.post("/", async(req: Request, resp: Response): Promise<Response> => {
    try {
        const usuarioRepository = new UsuarioRepository();
        const novoUsuario = req.body as Usuario;
        const usuarioCriado = await usuarioRepository.createUsuario(novoUsuario);
        
        if(usuarioCriado !== null) {
            return resp.status(201).json(usuarioCriado);
        } else {
            return resp.status(409).json({ error: "Usuário com o mesmo e-mail ou login já existente"});
        }
    } catch (error) {
        return resp.status(500).json({ message: "Erro ao criar usuário", error: error});
    }
});

// o erro ao excluir deve-se ao fato de que a foregein key esta ímpedindo a exclusão do dado, pois ele está associado a várias tabelas
//para evitar os erros é preciso alterar as opções de deleção no banco de dados, flexibilizando a restrição da chave estrangeira ou 
// configurando a exclusão em casacada (mais perigoso)

usuarioRouter.delete("/:id", async(req: Request, resp: Response): Promise<Response> => {
    try {
        const usuarioRepository = new UsuarioRepository();
        const usuarioId = parseInt(req.params.id, 10);
        
        if (isNaN(usuarioId)) {
            return resp.status(400).json({ error: "ID do usuário inválido" });
        }
        
        const resultado = await usuarioRepository.deleteUsuario(usuarioId);
        
        if(resultado) {
            return resp.status(204).send();
        } else {
            return resp.status(404).json({ error: "Usuário não encontrado"});
        }
    } catch(error) {
        return resp.status(500).json({ message: "Erro ao excluir usuário.", error: error})
    }
});

usuarioRouter.delete("email/:emailUsuario", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const usuarioRepository = new UsuarioRepository();
        const emailUsuario = req.params.emailUsuario;
        const resultado = await usuarioRepository.deleteUsuarioEmail(emailUsuario);

        if(resultado) {
            return resp.status(204).send();
        } else {
            return resp.status(404).json({ error: "Usuário não encontrado"});
            }
        } catch(error) {
            return resp.status(500).json({ message: "Erro ao excluir usuário.", error: error})
    }
});

export default usuarioRouter;