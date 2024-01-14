import { Router } from "express";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { UsuarioController } from "../controllers/UsuarioController";
import { AdminRepository } from "../repositories/AdminRepository";
import { RecepcaoRepository } from "../repositories/RecepcaoRepository";

const usuarioRoutes = Router();
const usuarioRepository = new UsuarioRepository();
const adminRepository = new AdminRepository();
const recepcaoRepository = new RecepcaoRepository()
const usuarioController = new UsuarioController(
    usuarioRepository,
    adminRepository,
    recepcaoRepository
);

usuarioRoutes.get("/", async (request, response) => {

    const usuarios = await usuarioController.list();

    return response.status(200).json(usuarios);
})

usuarioRoutes.get("/ativos", async (request, response) => {

    const usuarios = await usuarioController.listAtivos();

    return response.status(200).json(usuarios);
})

usuarioRoutes.get("/inativos", async (request, response) => {

    const usuarios = await usuarioController.listInativos();

    return response.status(200).json(usuarios);
})

usuarioRoutes.get("/email/:email", async (request, response) => {

    const email = request.params.email;

    try {
        const usuario = await usuarioController.findByEmail(email);
        response.status(200).json(usuario);
    } catch (error) {
        response.status(400).json(error);
    }
})

usuarioRoutes.get("/id/:id", async (request, response) => {

    const id = Number(request.params.id);

    try {
        const usuario = await usuarioController.findById(id);
        response.status(200).json(usuario);
    } catch (error) {
        response.status(400).json(error)
    }
})

usuarioRoutes.post("/admin", async (request, response) => {

    const { nomeUsuario, funcaoUsuario, emailUsuario, loginUsuario, senhaUsuario} = request.body;

    try {
        await usuarioController.createAdmin({
            nomeUsuario,
            funcaoUsuario,
            emailUsuario,
            loginUsuario,
            senhaUsuario,
        })

        response.status(201).json({ message: "Usuário Administrador Criado!" });
    } catch (error) {
        response.status(400).json(error);
    }
})

usuarioRoutes.post("/recepcao", async (request, response) => {

    const { nomeUsuario, funcaoUsuario, emailUsuario, loginUsuario, senhaUsuario} = request.body;

    try {
        await usuarioController.createRecepcao({
            nomeUsuario,
            funcaoUsuario,
            emailUsuario,
            loginUsuario,
            senhaUsuario,
        })

        response.status(201).json({ message: "Usuário Recepção Criado!" });
    } catch (error) {
        response.status(400).json(error);
    }
})

usuarioRoutes.put("/:id", async (request, response) => {

    const idUsuario = parseInt(request.params.id);
    const {nomeUsuario, senhaUsuario} = request.body;
        
    if(isNaN(idUsuario)) {
        response.status(400).json({ error: "ID inválido."});
    }

    try {
        const usuario = await usuarioController.findById(idUsuario);

        if(!usuario) {
            response.status(404).json({ error: "Usuário não encontrado."});   
        }
            
        await usuarioController.update(idUsuario, {nomeUsuario, senhaUsuario});
            
        response.status(200).json({ message: "Usuário atualizado!" });
    } catch (error) {
        return response.status(400).json({ message: "Erro ao atualizar usuário"});
    }
})

usuarioRoutes.delete("/:id", async (request, response) => {
    
    const idUsuario = Number(request.params.id);

    try {
        await usuarioController.deleteByid(idUsuario);
        response.status(200).json({ message: "Usuario excluido!" })
    } catch (error) {
        response.status(400).json(error);
    }
})

export { usuarioRoutes };