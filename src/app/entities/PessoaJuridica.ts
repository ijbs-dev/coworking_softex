import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Cliente from "./Cliente";

@Entity('PessoaJuridica')
export default class PessoaJuridica {

    @PrimaryGeneratedColumn({ name: 'Id_PJuridica', type: 'int' })
    idPJuridica: number;

    @Column({ name: 'Cnpj', type: 'varchar', length: 14, nullable: false })
    cnpj: string;

    @Column({ name: 'Razao_social', type: 'varchar', length: 200, nullable: false })
    razaoSocial: string;

    @OneToOne(() => Cliente, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Cliente_Id_Cliente', referencedColumnName: 'idCliente' })
    cliente: Cliente;
}


/**
CREATE TABLE IF NOT EXISTS `PessoaJuridica` (
  `Id_PJuridica` INT AUTO_INCREMENT,
  `Cnpj` VARCHAR(14) NOT NULL,
  `Razao_social` VARCHAR(200) NOT NULL,
  `Cliente_Id_Cliente` INT NOT NULL,
  PRIMARY KEY (`Id_PJuridica`),
  INDEX `fk_PessoaJuridica_Cliente_idx` (`Cliente_Id_Cliente`)
);

ALTER TABLE `PessoaJuridica` ADD CONSTRAINT `fk_PessoaJuridica_Cliente`
  FOREIGN KEY (`Cliente_Id_Cliente`)
  REFERENCES `Cliente` (`Id_Cliente`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  
 */