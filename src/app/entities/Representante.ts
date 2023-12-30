import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import PessoaJuridica from "./PessoaJuridica";
import RetiradaEncomenda from "./RetiradaEncomenda";

@Entity('Representante')
export default class Representante {
    @PrimaryGeneratedColumn({ name: 'Id_Represent' })
    idRepresent: number;

    @Column({ name: 'Nome_Represent', length: 100 })
    nomeRepresent: string;

    @Column({ name: 'Email_Represent', length: 100 })
    emailRepresent: string;

    @Column({ name: 'Status_Represent' })
    statusRepresent: number;

    @Column({ name: 'Telefone_Represent', length: 11 })
    telefoneRepresent: string;

    @Column({ name: 'Updated_at_Represent' })
    updatedAtRepresent: Date;

    @Column({ name: 'Created_at_Represent' })
    createdAtRepresent: Date;

    @ManyToOne(() => PessoaJuridica)
    @JoinColumn({ name: 'Id_PJuridica', referencedColumnName: 'idPJuridica' })
    pessoaJuridica: PessoaJuridica;

    @ManyToOne(() => RetiradaEncomenda)
    @JoinColumn({ name: 'RetiradaEncomenda_Id_Retir_Encomenda', referencedColumnName: 'idRetirEncomenda' })
    retiradaEncomenda: RetiradaEncomenda;
}

/**
 * CREATE TABLE IF NOT EXISTS `Representante` (
  `Id_Represent` INT NOT NULL,
  `Nome_Represent` VARCHAR(100) NOT NULL,
  `Email_Represent` VARCHAR(100) NOT NULL,
  `Status_Represent` TINYINT NOT NULL,
  `Telefone_Represent` VARCHAR(11) NOT NULL,
  `Updated_at_Represent` DATETIME NOT NULL,
  `Created_at_Represent` DATETIME NOT NULL,
  `Id_PJuridica` INT NOT NULL,
  `RetiradaEncomenda_Id_Retir_Encomenda` INT NOT NULL,
  PRIMARY KEY (`Id_Represent`),
  INDEX `fk_Representante_RetiradaEncomenda_idx` (`RetiradaEncomenda_Id_Retir_Encomenda`)
  -- FOREIGN KEY removed
);

ALTER TABLE `Representante` ADD CONSTRAINT `fk_Representante_PessoaJuridica`
  FOREIGN KEY (`Id_PJuridica`)
  REFERENCES `PessoaJuridica` (`Id_PJuridica`);
    
ALTER TABLE `Representante` ADD CONSTRAINT `fk_Representante_RetiradaEncomenda`
  FOREIGN KEY (`RetiradaEncomenda_Id_Retir_Encomenda`)
  REFERENCES `RetiradaEncomenda` (`Id_Retir_Encomenda`);
 */