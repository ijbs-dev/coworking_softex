import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity('Endereco')
export default class Endereco {
    @PrimaryColumn({ name: 'Id_Endereco' })
    idEndereco: number;

    @Column({ name: 'Logradouro', length: 100 })
    logradouro: string;

    @Column({ name: 'Numero' })
    numero: number;

    @Column({ name: 'Bairro', length: 100 })
    bairro: string;

    @Column({ name: 'UF', length: 2 })
    uf: string;
}


/**
 * CREATE TABLE IF NOT EXISTS `Endereco` (
  `Id_Endereco` INT NOT NULL,
  `Logradouro` VARCHAR(100) NOT NULL,
  `Numero` INT NOT NULL,
  `Bairro` VARCHAR(100) NOT NULL,
  `UF` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`Id_Endereco`)
);
 */