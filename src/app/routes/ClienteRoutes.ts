/* // ClienteRoutes.ts
import { Router } from 'express';
import ClienteController from '../controllers/ClienteController';

const clienteRoutes = Router();
const clienteController = new ClienteController();

clienteRoutes.get('/', clienteController.getAllClients);
clienteRoutes.get('/:id', clienteController.getClientById);
clienteRoutes.post('/', clienteController.createClient);
clienteRoutes.put('/:id', clienteController.updateClient);
clienteRoutes.delete('/:id', clienteController.deleteClient);

const clienteRouter = Router();
clienteRouter.use('/cliente', clienteRoutes);

export default clienteRouter; */
