import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Cliente from "./Cliente";
import Endereco from "./Endereco";
import EnderecoFiscal from "./EnderecoFiscal";


@Entity('Encomenda')
export default class Encomenda {
    @PrimaryGeneratedColumn({ name: 'Id_Encomenda' })
    idEncomenda: number;

    @Column({ name: 'Obs_Encomenda', length: 100, nullable: false })
    obsEncomenda: string;

    @Column({ name: 'Status_Retirada', nullable: false })
    statusRetirada: number;

    @OneToOne(() => Cliente, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Cliente_Id_Cliente', referencedColumnName: 'idCliente' })
    cliente: Cliente;

    @OneToOne(() => Endereco, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Cliente_Endereco_Id_Endereco', referencedColumnName: 'idEndereco' })
    endereco: Endereco;

    @OneToOne(() => EnderecoFiscal, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Cliente_EnderecoFiscal_Num_End_Fiscal', referencedColumnName: 'numEndFiscal' })
    enderecoFiscal: EnderecoFiscal;
}

/**
 * CREATE TABLE IF NOT EXISTS `Encomenda` (
  `Id_Encomenda` INT NOT NULL,
  `Obs_Encomenda` VARCHAR(100) NOT NULL,
  `Status_Retirada` TINYINT NOT NULL,
  `Cliente_Id_Cliente` INT NOT NULL,
  `Cliente_Endereco_Id_Endereco` INT NOT NULL,
  `Cliente_EnderecoFiscal_Num_End_Fiscal` INT NOT NULL,
  PRIMARY KEY (`Id_Encomenda`),
  INDEX `fk_Encomenda_Cliente_idx` (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`, `Cliente_EnderecoFiscal_Num_End_Fiscal`)
  -- FOREIGN KEY removed
);

ALTER TABLE `Encomenda` ADD CONSTRAINT `fk_Encomenda_Cliente`
  FOREIGN KEY (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`, `Cliente_EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `Cliente` (`Id_Cliente`, `Endereco_Id_Endereco`, `EnderecoFiscal_Num_End_Fiscal`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  
  */