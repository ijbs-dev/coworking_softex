import Representante from "../entities/Representante";
import IRepresentante from "../interfaces/IRepresentante";
import { AppDataSource } from "../../database/data-source";

class RepresentanteRepository{
    
    representanteRepository = AppDataSource.getRepository(Representante);

    getRepresentante = (): Promise<Representante[]> => {
        return this.representanteRepository.find();
    }    

    getRepresentanteById = (id: number): Promise<Representante[]> => {
        return this.representanteRepository.find({ where: { idRepresent: id } });
    }    

    createRepresentante = (representante: Representante): Promise<Representante> => {
        return this.representanteRepository.save(representante);
    }

    updateRepresentante = (representante: Representante): Promise<Representante> => {
        return this.representanteRepository.save(representante);
    }

    deleteRepresentanteById = async (id: number): Promise<Representante | null> => {
        const representante = await this.representanteRepository.findOne({ where: { idRepresent: id } });
        if (representante) {
            return this.representanteRepository.remove(representante);
        }
        return null;
    }
}

export default RepresentanteRepository;