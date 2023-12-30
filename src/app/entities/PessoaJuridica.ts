import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Cliente from "./Cliente";

@Entity('PessoaJuridica')
export default class PessoaJuridica {
    @PrimaryGeneratedColumn({ name: 'Id_PJuridica' })
    idPJuridica: number;

    @Column({ name: 'Cnpj', length: 14 })
    cnpj: string;

    @Column({ name: 'Razao_social', length: 200 })
    razaoSocial: string;

    @OneToOne(() => Cliente)
    @JoinColumn({ name: 'Cliente_Id_Cliente', referencedColumnName: 'idCliente' })
    cliente: Cliente;
}

/**
 * CREATE TABLE IF NOT EXISTS `PessoaJuridica` (
  `Id_PJuridica` INT NOT NULL,
  `Cnpj` VARCHAR(14) NOT NULL,
  `Razao_social` VARCHAR(200) NOT NULL,
  `Cliente_Id_Cliente` INT NOT NULL,
  `Cliente_Endereco_Id_Endereco` INT NOT NULL,
  PRIMARY KEY (`Id_PJuridica`),
  INDEX `fk_PessoaJuridica_Cliente_idx` (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`)
  -- FOREIGN KEY removed
);

ALTER TABLE `PessoaJuridica` ADD CONSTRAINT `fk_PessoaJuridica_Cliente`
  FOREIGN KEY (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`)
  REFERENCES `Cliente` (`Id_Cliente`, `Endereco_Id_Endereco`);
 */