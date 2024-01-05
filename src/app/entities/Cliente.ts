import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from "typeorm";
import Admin from "./Admin";
import Endereco from "./Endereco";
import EnderecoFiscal from "./EnderecoFiscal";
import Recepcao from "./Recepcao";

@Entity('Cliente')
@Index('fk_Cliente_Endereco_idx', ['enderecoIdEndereco'])
@Index('fk_Cliente_Admin_idx', ['adminIdAdmin'])
@Index('fk_Cliente_EnderecoFiscal_idx', ['enderecoFiscalNumEndFiscal'])
export default class Cliente {

  @PrimaryGeneratedColumn({ name: 'Id_Cliente', type: 'int' })
  idCliente: number;

  @Column({ name: 'Nome_Cliente', type: 'varchar', length: 100, nullable: false })
  nomeCliente: string;

  @Column({ name: 'Telefone_Cliente', type: 'varchar', length: 11, nullable: false })
  telefoneCliente: string;

  @Column({ name: 'Email_Cliente', type: 'varchar', length: 100, nullable: false })
  emailCliente: string;

  @Column({ name: 'Qtd_pontos_Cliente', type: 'int', nullable: false })
  qtdPontosCliente: number;

  @Column({ name: 'Prazo_Cliente', type: 'date', nullable: false })
  prazoCliente: Date;

  @Column({ name: 'Valor_mensal_Cliente', type: 'decimal', nullable: false })
  valorMensalCliente: number;

  @Column({ name: 'Status_Cliente', type: 'int', nullable: false })
  statusCliente: boolean;

  @Column({ name: 'Created_at_Cliente', type: 'datetime', nullable: false })
  createdAtCliente: Date;

  @Column({ name: 'Updated_at_Cliente', type: 'datetime', nullable: false })
  updatedAtCliente: Date;

  @Column({ name: 'Endereco_Id_Endereco', type: 'int', nullable: false })
  enderecoIdEndereco: number;

  @Column({ name: 'Admin_Id_Admin', type: 'int', nullable: false })
  adminIdAdmin: number;

  @Column({ name: 'EnderecoFiscal_Num_End_Fiscal', type: 'int', nullable: false })
  enderecoFiscalNumEndFiscal: number;

  @ManyToOne(() => Admin, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Admin_Id_Admin' })
  admin: Admin;

  @ManyToOne(() => Endereco, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Endereco_Id_Endereco' })
  endereco: Endereco;

  @ManyToOne(() => EnderecoFiscal, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'EnderecoFiscal_Num_End_Fiscal' })
  enderecoFiscal: EnderecoFiscal;
}



/* CREATE TABLE IF NOT EXISTS `Cliente` (
  `Id_Cliente` INT AUTO_INCREMENT,
  `Nome_Cliente` VARCHAR(100) NOT NULL,
  `Telefone_Cliente` VARCHAR(11) NOT NULL,
  `Email_Cliente` VARCHAR(100) NOT NULL,
  `Qtd_pontos_Cliente` INT NOT NULL,
  `Prazo_Cliente` DATE NOT NULL,
  `Valor_mensal_Cliente` DECIMAL NOT NULL,
  `Status_Cliente` INT NOT NULL,
  `Created_at_Cliente` DATETIME NOT NULL,
  `Updated_at_Cliente` DATETIME NOT NULL,
  `Endereco_Id_Endereco` INT NOT NULL,
  `Admin_Id_Admin` INT NOT NULL,
  `EnderecoFiscal_Num_End_Fiscal` INT NOT NULL,
  PRIMARY KEY (`Id_Cliente`, `Endereco_Id_Endereco`, `EnderecoFiscal_Num_End_Fiscal`),
  INDEX `fk_Cliente_Endereco_idx` (`Endereco_Id_Endereco`),
  INDEX `fk_Cliente_Admin_idx` (`Admin_Id_Admin`),
  INDEX `fk_Cliente_EnderecoFiscal_idx` (`EnderecoFiscal_Num_End_Fiscal`)
  -- FOREIGN KEY removed
);

ALTER TABLE `Cliente` ADD CONSTRAINT `fk_Cliente_Endereco`
  FOREIGN KEY (`Endereco_Id_Endereco`)
  REFERENCES `Endereco` (`Id_Endereco`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `Cliente` ADD CONSTRAINT `fk_Cliente_Admin`
  FOREIGN KEY (`Admin_Id_Admin`)
  REFERENCES `Admin` (`Id_Admin`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `Cliente` ADD CONSTRAINT `fk_Cliente_EnderecoFiscal`
  FOREIGN KEY (`EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `EnderecoFiscal` (`Num_End_Fiscal`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

  */