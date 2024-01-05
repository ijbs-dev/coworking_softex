import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Usuario')
export default class Usuario {

    @PrimaryGeneratedColumn({ name: 'Id_Usuario', type: 'int' })
    idUsuario: number;

    @Column({ name: 'Nome_Usuario', type: 'varchar', length: 100, nullable: false })
    nomeUsuario: string;

    @Column({ name: 'Funcao_Usuario', type: 'varchar', length: 50, nullable: false })
    funcaoUsuario: string;

    @Column({ name: 'Email_Usuario', type: 'varchar', length: 100, nullable: false })
    emailUsuario: string;

    @Column({ name: 'Login_Usuario', type: 'varchar', length: 50, nullable: false })
    loginUsuario: string;

    @Column({ name: 'Senha_Usuario', type: 'varchar', length: 50, nullable: false })
    senhaUsuario: string;

    @Column({ name: 'Status_Usuario', type: 'int', nullable: false })
    statusUsuario: number;

    @Column({ name: 'Created_at_Usuario', type: 'datetime', nullable: false })
    createdAtUsuario: Date;

    @Column({ name: 'Updated_at_Usuario', type: 'datetime', nullable: false })
    updatedAtUsuario: Date;
}


/**
CREATE TABLE IF NOT EXISTS `Usuario` (
  `Id_Usuario` INT AUTO_INCREMENT,
  `Nome_Usuario` VARCHAR(100) NOT NULL,
  `Funcao_Usuario` VARCHAR(50) NOT NULL,
  `Email_Usuario` VARCHAR(100) NOT NULL,
  `Login_Usuario` VARCHAR(50) NOT NULL,
  `Senha_Usuario` VARCHAR(50) NOT NULL,
  `Status_Usuario` INT NOT NULL,
  `Created_at_Usuario` DATETIME NOT NULL,
  `Updated_at_Usuario` DATETIME NOT NULL,
  PRIMARY KEY (`Id_Usuario`)
);
 */