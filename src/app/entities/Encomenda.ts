import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Cliente from "./Cliente";
import Endereco from "./Endereco";
import EnderecoFiscal from "./EnderecoFiscal";

@Entity('Encomenda')
export default class Encomenda {    
    @PrimaryGeneratedColumn({ name: 'Id_Encomenda', type: 'int' })
    idEncomenda: number;

    @Column({ name: 'Obs_Encomenda', type: 'varchar', length: 100, nullable: false })
    obsEncomenda: string;

    @OneToOne(() => EnderecoFiscal, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Cliente_EnderecoFiscal_Num_End_Fiscal', referencedColumnName: 'numEndFiscal' })
    enderecoFiscal: EnderecoFiscal;  
}


/**
 CREATE TABLE IF NOT EXISTS `Encomenda` (
  `Id_Encomenda` INT AUTO_INCREMENT,
  `Obs_Encomenda` VARCHAR(100) NOT NULL,
  `Cliente_EnderecoFiscal_Num_End_Fiscal` INT NOT NULL,
  PRIMARY KEY (`Id_Encomenda`),
  INDEX `fk_Encomenda_Cliente_idx` (`Cliente_EnderecoFiscal_Num_End_Fiscal`)
  -- FOREIGN KEY removed
);

ALTER TABLE `Encomenda` ADD CONSTRAINT `fk_Encomenda_Cliente`
  FOREIGN KEY (`Cliente_EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `Cliente` (`EnderecoFiscal_Num_End_Fiscal`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  
  */