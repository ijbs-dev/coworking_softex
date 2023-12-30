import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Usuario')
export default class Usuario {

    @PrimaryGeneratedColumn({ name: 'Id_Usuario', type: 'int' })
    idUsuario: number;

    @Column({ name: 'Nome_Usuario', type: 'varchar', length: 100 })
    nomeUsuario: string;

    @Column({ name: 'Funcao_Usuario', type: 'varchar', length: 50 })
    funcaoUsuario: string;

    @Column({ name: 'Email_Usuario', type: 'varchar', length: 100 })
    emailUsuario: string;

    @Column({ name: 'Login_Usuario', type: 'varchar', length: 50 })
    loginUsuario: string;

    @Column({ name: 'Senha_Usuario', type: 'varchar', length: 50 })
    senhaUsuario: string;

    @Column({ name: 'Status_Usuario', type: 'tinyint' })
    statusUsuario: number;

    @Column({ name: 'Created_at_Usuario', type: 'datetime' })
    createdatUsuario: Date;

    @Column({ name: 'Updated_at_Usuario', type: 'datetime' })
    updatedatUsuario: Date;
}


/**
 * CREATE TABLE IF NOT EXISTS `Usuario` (
  `Id_Usuario` INT NOT NULL,
  `Nome_Usuario` VARCHAR(100) NOT NULL,
  `Funcao_Usuario` VARCHAR(50) NOT NULL,
  `Email_Usuario` VARCHAR(100) NOT NULL,
  `Login_Usuario` VARCHAR(50) NOT NULL,
  `Senha_Usuario` VARCHAR(50) NOT NULL,
  `Status_Usuario` TINYINT NOT NULL,
  `Created_at_Usuario` DATETIME NOT NULL,
  `Updated_at_Usuario` DATETIME NOT NULL,
  PRIMARY KEY (`Id_Usuario`)
);
 */