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

export default usuarioRouter;