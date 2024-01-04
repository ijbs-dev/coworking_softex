import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Usuario from "./Usuario"; 

@Entity('Admin')
export default class Admin {
  // add not null
    @PrimaryGeneratedColumn({name: 'Id_Admin', type: 'int'})
    idAdmin: number;

    @OneToOne(() => Usuario, { onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({ name: 'Id_Usuario' })
    idUsuario: Usuario;
}

/**
 * CREATE TABLE IF NOT EXISTS `Admin` (
  `Id_Admin` INT NOT NULL,
  `Id_Usuario` INT NOT NULL,
  PRIMARY KEY (`Id_Admin`),
 CONSTRAINT `FK_Admin`
  FOREIGN KEY (`Id_Usuario`)
  REFERENCES `Usuario` (`Id_Usuario`)
  ON DELETE CASCADE
  ON UPDATE CASCADE  
);
 */


