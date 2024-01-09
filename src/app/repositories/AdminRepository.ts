import Admin from "../entities/Admin";
import { Repository } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import ICliente from "../interfaces/create/IClienteCreate";
import IAdmin from "../interfaces/IAdmin";
import IAdminUpdate from "../interfaces/update/IAdminUpdate";

class AdminRepository{
    
    private adminRepository: Repository<Admin>;

    constructor() {
        this.adminRepository = AppDataSource.getRepository(Admin);
    }

    async create({idAdmin, idUsuario }: IAdmin): Promise<Admin> {
        const admin = await this.adminRepository.create({
            idAdmin,
            idUsuario
        });
        
        return await this.adminRepository.save(admin);
    }

    async list(): Promise<Admin[]> {
        return await this.adminRepository.find();
    }

    async findById(idAdmin: number): Promise<Admin | null> {
        return await this.adminRepository.findOneOrFail({ where: [{ idAdmin }] });
    }

    async update(idAdmin: number, updatedData: IAdminUpdate): Promise<void> {
        
        const admin = await this.adminRepository.findOneOrFail({ where: [{ idAdmin }] });
        
        if(admin) {
            await this.adminRepository.update({ idAdmin: idAdmin}, { idUsuario: updatedData.idUsuario });
        }
    }

    async delete(idAdmin: number): Promise<void | null> {
        const admin = await this.adminRepository.findOne({ where: [{ idAdmin }] });
        if (admin) {
            await this.adminRepository.remove(admin);
        }
    }
}

export { AdminRepository };

// Versão antiga
// export class AdminRepository{
    
//     adminRepository = AppDataSource.getRepository(Admin);

//     getAdmin = (): Promise<Admin[]> => {
//         return this.adminRepository.find();
//     }

//     getAdminById = (id: number): Promise<Admin[]> => {
//         return this.adminRepository.find({ where: { idAdmin: id } });
//     }

//     createAdmin = (admin: Admin): Promise<Admin> => {
//         return this.adminRepository.save(admin);
//     }

//     updateAdmin = (admin: Admin): Promise<Admin> => {
//         return this.adminRepository.save(admin);
//     }

//     deleteAdminById = async (id: number): Promise<Admin | null> => {
//         const admin = await this.adminRepository.findOne({ where: { idAdmin: id } });
//         if (admin) {
//             return this.adminRepository.remove(admin);
//         }
//         return null;
//     }

// }