import { Request, Response, Router } from 'express';
import Cliente from '../entities/Cliente';
import ClienteRepository from '../repositories/ClienteRepository';
import ICliente from '../interfaces/ICliente';

const clienteRouter = Router();

clienteRouter.get('/', async (_req: Request, resp: Response): Promise<Response> => {
    const clienteRepository = new ClienteRepository();
    const clientes = await clienteRepository.getClients();
    return resp.status(200).json(clientes);
});

export default clienteRouter;