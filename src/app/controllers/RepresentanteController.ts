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

export default representanteRouter;

