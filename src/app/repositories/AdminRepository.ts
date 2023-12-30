import Admin from "../entities/Admin";
import ICliente from "../interfaces/ICliente";
import { AppDataSource } from "../../database/data-source";

export class AdminRepository{
    
    adminRepository = AppDataSource.getRepository(Admin);

    getAdmin = (): Promise<Admin[]> => {
        return this.adminRepository.find();
    }
}

export default AdminRepository;