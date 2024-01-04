import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity('Endereco')
export default class Endereco {
    @PrimaryColumn({ name: 'Id_Endereco' })
    idEndereco: number;

    // Adicionando NOT NULL e tamanho máximo de 100 caracteres
    @Column({ name: 'Logradouro', length: 100, nullable: false })
    logradouro: string;

    @Column({ name: 'Numero', nullable: false  })
    numero: number;

    @Column({ name: 'Bairro', length: 100, nullable: false  })
    bairro: string;

    @Column({ name: 'UF', length: 2, nullable: false  })
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