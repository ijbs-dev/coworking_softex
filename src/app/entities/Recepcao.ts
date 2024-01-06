import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Usuario from "./Usuario";
import RecebimentoEncomenda from "./RecebimentoEncomenda";

@Entity('Recepcao')
export default class Recepcao {

    @PrimaryGeneratedColumn({ name: 'Id_Recepcao' })
    idRecepcao: number;

    @OneToOne(() => Usuario, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Id_Usuario', referencedColumnName: 'idUsuario' })
    usuario: Usuario;

}

/**

CREATE TABLE IF NOT EXISTS `Recepcao` (
  `Id_Recepcao` INT AUTO_INCREMENT,
  `Id_Usuario` INT NOT NULL,
  PRIMARY KEY (`Id_Recepcao`)
);

  ALTER TABLE `Recepcao` ADD CONSTRAINT `FK_Recepcao`
  FOREIGN KEY (`Id_Usuario`)
  REFERENCES `Usuario` (`Id_Usuario`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
 */