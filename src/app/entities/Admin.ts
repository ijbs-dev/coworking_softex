import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Usuario from './Usuario'; // Certifique-se de importar corretamente a classe Usuario

@Entity('Admin')
export default class Admin {

    @PrimaryGeneratedColumn({ name: 'Id_Admin', type: 'int' })
    idAdmin: number;

    @Column({ name: 'Id_Usuario', type: 'int', nullable: false })
    idUsuario: number;

    @OneToOne(() => Usuario, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Id_Usuario', referencedColumnName: 'idUsuario' }) 
    usuario: Usuario;
}


/**
CREATE TABLE IF NOT EXISTS `Admin` (
  `Id_Admin` INT AUTO_INCREMENT,
  `Id_Usuario` INT NOT NULL,
  PRIMARY KEY (`Id_Admin`),
  CONSTRAINT `FK_Admin`
    FOREIGN KEY (`Id_Usuario`)
    REFERENCES `Usuario` (`Id_Usuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
 */


