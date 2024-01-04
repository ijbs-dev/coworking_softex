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
}

export default RepresentanteRepository;