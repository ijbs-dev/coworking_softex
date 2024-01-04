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

clienteRouter.get('/:id', async (req: Request, resp: Response): Promise<Response> => {
    try {
        const clienteRepository = new ClienteRepository();
        const idCliente = parseInt(req.params.id, 10);

        console.log('ID do Cliente:', idCliente);

        if (isNaN(idCliente)) {
            console.log('ID do Cliente inválido!');
            return resp.status(400).json({ error: 'ID do cliente inválido!' });
        }

        const clienteEncontrado = await clienteRepository.getClientById(idCliente);

        console.log('Cliente Encontrado:', clienteEncontrado);

        if (clienteEncontrado && clienteEncontrado.length > 0) {
            return resp.status(200).json(clienteEncontrado);
        } else {
            console.log('Cliente não encontrado.');
            return resp.status(404).json({ error: 'Cliente não encontrado.' });
        }
    } catch (error) {
        console.log('Erro ao buscar cliente por ID:', error);
        return resp.status(500).json({ error: 'Erro ao buscar cliente por ID.', details: error });
    }
});

export default clienteRouter;