import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import PessoaJuridica from "./PessoaJuridica";
import RetiradaEncomenda from "./RetiradaEncomenda";

@Entity('Representante')
export default class Representante {
    @PrimaryGeneratedColumn({ name: 'Id_Represent', type: 'int' })
    idRepresent: number;

    @Column({ name: 'Nome_Represent', length: 100, nullable: false  })
    nomeRepresent: string;

    @Column({ name: 'Email_Represent', length: 100, nullable: false  })
    emailRepresent: string;
    
    @Column({ name: 'Status_Represent', nullable: false, type: 'int'  })
    statusRepresent: number;

    @Column({ name: 'Telefone_Represent', length: 11, nullable: false  })
    telefoneRepresent: string;

    @Column({ name: 'Updated_at_Represent', nullable: false })
    updatedAtRepresent: Date;

    @Column({ name: 'Created_at_Represent', nullable: false })
    createdAtRepresent: Date;

    @ManyToOne(() => PessoaJuridica, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Id_PJuridica', referencedColumnName: 'idPJuridica' })
    pessoaJuridica: PessoaJuridica;
}

/**
CREATE TABLE IF NOT EXISTS `Representante` (
  `Id_Represent` INT AUTO_INCREMENT,
  `Nome_Represent` VARCHAR(100) NOT NULL,
  `Email_Represent` VARCHAR(100) NOT NULL,
  `Status_Represent` INT NOT NULL,
  `Telefone_Represent` VARCHAR(11) NOT NULL,
  `Updated_at_Represent` DATETIME NOT NULL,
  `Created_at_Represent` DATETIME NOT NULL,
  `Id_PJuridica` INT NOT NULL,
  PRIMARY KEY (`Id_Represent`)
  -- FOREIGN KEY removed;
);

ALTER TABLE `Representante` ADD CONSTRAINT `fk_Representante_PessoaJuridica`
  FOREIGN KEY (`Id_PJuridica`)
  REFERENCES `PessoaJuridica` (`Id_PJuridica`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  
  */