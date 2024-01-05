import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Cliente from "./Cliente";

@Entity('PessoaFisica')
export default class PessoaFisica {

    @PrimaryGeneratedColumn({ name: 'Id_Pfisica', type: 'int' })
    idPfisica: number;

    @Column({ name: 'Cpf', type: 'varchar', length: 11, nullable: false })
    cpf: string;

    @OneToOne(() => Cliente, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Id_Cliente', referencedColumnName: 'idCliente' }) 
    cliente: Cliente;
}



/**
CREATE TABLE IF NOT EXISTS `PessoaFisica` (
  `Id_Pfisica` INT AUTO_INCREMENT,
  `Cpf` VARCHAR(11) NOT NULL,
  `Id_Cliente` INT NOT NULL,
  PRIMARY KEY (`Id_Pfisica`),
  INDEX (`Id_Cliente`)
);

ALTER TABLE `PessoaFisica` ADD CONSTRAINT `fk_PessoaFisica_Cliente`
  FOREIGN KEY (`Id_Cliente`)
  REFERENCES `Cliente` (`Id_Cliente`)
    ON DELETE CASCADE
  ON UPDATE CASCADE;
  
 */