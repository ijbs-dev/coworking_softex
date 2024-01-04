import { Request, Response, Router } from "express";
import Representante from "../entities/Representante";
import IRepresentante from "../interfaces/IRepresentante";
import RepresentanteRepository from "../repositories/RepresentanteRepository";

const representanteRouter = Router();

representanteRouter.get("/", async (_req: Request, resp: Response): Promise<Response> => {
    const representanteRepository = new RepresentanteRepository();
    const representante = await representanteRepository.getRepresentante();
    return resp.status(200).json(representante);
});

representanteRouter.get("/:id", async (req: Request, resp: Response): Promise<Response> => {
    try {
        const representanteRepository = new RepresentanteRepository();
        const idrepresentante = parseInt(req.params.id, 10);

        console.log("ID do Representante:", idrepresentante);

        if (isNaN(idrepresentante)) {
            console.log("ID do Representante inválido!");
            return resp.status(400).json({ error: "ID do Representante inválido!" });   
        }

        const representanteEncontrado = await representanteRepository.getRepresentanteById(idrepresentante);

        console.log("Representante Encontrado:", representanteEncontrado);

        if (representanteEncontrado && representanteEncontrado.length > 0) {
            return resp.status(200).json(representanteEncontrado);
        } else {
            console.log("Representante não encontrado.");
            return resp.status(404).json({ error: "Representante não encontrado." });
        }        
    } catch(error) {
        console.log("Erro ao buscar Representante por ID:", error);
        return resp.status(500).json({ error: "Erro ao buscar Representante por ID.", details: error });
    }
});


        
export default representanteRouter;

