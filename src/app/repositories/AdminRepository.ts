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

    createAdmin = (admin: Admin): Promise<Admin> => {
        return this.adminRepository.save(admin);
    }

    updateAdmin = (admin: Admin): Promise<Admin> => {
        return this.adminRepository.save(admin);
    }

    deleteAdmin = (admin: Admin): Promise<Admin> => {
        return this.adminRepository.remove(admin);
    }

    deleteAdminById = async (id: number): Promise<Admin | null> => {
        const admin = await this.adminRepository.findOne({ where: { idAdmin: id } });
        if (admin) {
            return this.adminRepository.remove(admin);
        }
        return null;
    }

}

export default AdminRepository;