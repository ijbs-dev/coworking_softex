import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Encomenda from "./Encomenda";
import Representante from "./Representante";

@Entity('RetiradaEncomenda')
export default class RetiradaEncomenda {
    @PrimaryGeneratedColumn({ name: 'Id_Retir_Encomenda', type: 'int' })
    idRetirEncomenda: number;

    @Column({ name: 'DataHora_Retir_encomenda', nullable: false })
    dataHoraRetirEncomenda: Date;

    @Column({ name: 'Obs_Retir_encomenda', length: 200, nullable: false })
    obsRetirEncomenda: string;

    @ManyToOne(() => Encomenda, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Encomenda_Id_Encomenda', referencedColumnName: 'idEncomenda' })
    encomenda: Encomenda;

    @ManyToOne(() => Representante, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Representante_Id_Represent', referencedColumnName: 'idRepresent' })
    representante: Representante;

}



/**
CREATE TABLE IF NOT EXISTS `RetiradaEncomenda` (
  `Id_Retir_Encomenda` INT AUTO_INCREMENT,
  `DataHora_Retir_encomenda` DATETIME NOT NULL,
  `Obs_Retir_encomenda` VARCHAR(200) NOT NULL,
  `Encomenda_Id_Encomenda` INT NOT NULL,
  `Representante_Id_Represent` INT NOT NULL,
  PRIMARY KEY (`Id_Retir_Encomenda`),
  INDEX `fk_RetiradaEncomenda_Encomenda_idx` (`Encomenda_Id_Encomenda`),
  INDEX `fk_RetiradaEncomenda_Representante_idx` (`Representante_Id_Represent`)
  -- FOREIGN KEY removed
);

ALTER TABLE `RetiradaEncomenda` ADD CONSTRAINT `fk_RetiradaEncomenda_Encomenda`
  FOREIGN KEY (`Encomenda_Id_Encomenda`)
  REFERENCES `Encomenda` (`Id_Encomenda`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  
ALTER TABLE `RetiradaEncomenda` ADD CONSTRAINT `fk_RetiradaEncomenda_Representante`
  FOREIGN KEY (`Representante_Id_Represent`)
  REFERENCES `Representante` (`Id_Represent`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
 */