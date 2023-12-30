import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Cliente from "./Cliente";

@Entity('PessoaFisica')
export default class PessoaFisica {
    @PrimaryGeneratedColumn({ name: 'Id_Pfisica' })
    idPfisica: number;

    @Column({ name: 'Cpf' })
    cpf: string;

    @OneToOne(() => Cliente)
    @JoinColumn({ name: 'Id_Cliente' })
    cliente: Cliente;
}


/**
 * CREATE TABLE IF NOT EXISTS `PessoaFisica` (
  `Id_Pfisica` INT NOT NULL,
  `Cpf` VARCHAR(11) NOT NULL,
  `Id_Cliente` INT NOT NULL,
  PRIMARY KEY (`Id_Pfisica`),
  INDEX (`Id_Cliente`)
  -- FOREIGN KEY removed
);

ALTER TABLE `PessoaFisica` ADD CONSTRAINT `fk_PessoaFisica_Cliente`
  FOREIGN KEY (`Id_Cliente`)
  REFERENCES `Cliente` (`Id_Cliente`);
 */