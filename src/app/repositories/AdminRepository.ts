import Admin from "../entities/Admin";
import ICliente from "../interfaces/ICliente";
import { AppDataSource } from "../../database/data-source";

export class AdminRepository{
    
    adminRepository = AppDataSource.getRepository(Admin);

    getAdmin = (): Promise<Admin[]> => {
        return this.adminRepository.find();
    }

    getAdminById = (id: number): Promise<Admin[]> => {
        return this.adminRepository.find({ where: { idAdmin: id } });
    }
}

export default AdminRepository;