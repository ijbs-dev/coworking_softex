import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('RetiradaEncomenda')
export default class RetiradaEncomenda {
    @PrimaryGeneratedColumn({ name: 'Id_Retir_Encomenda' })
    idRetirEncomenda: number;

    @Column({ name: 'DataHora_Retir_encomenda', nullable: false })
    dataHoraRetirEncomenda: Date;

    @Column({ name: 'Obs_Retir_encomenda', length: 200, nullable: false })
    obsRetirEncomenda: string;

}


/**
 * CREATE TABLE IF NOT EXISTS `RetiradaEncomenda` (
  `Id_Retir_Encomenda` INT NOT NULL,
  `DataHora_Retir_encomenda` DATETIME NOT NULL,
  `Obs_Retir_encomenda` VARCHAR(200) NOT NULL,
  `Encomenda_Id_Encomenda` INT NOT NULL,
  PRIMARY KEY (`Id_Retir_Encomenda`, `Encomenda_Id_Encomenda`),
  INDEX `fk_RetiradaEncomenda_Encomenda_idx` (`Encomenda_Id_Encomenda`)
  -- FOREIGN KEY removed
);

ALTER TABLE `RetiradaEncomenda` ADD CONSTRAINT `fk_RetiradaEncomenda_Encomenda`
  FOREIGN KEY (`Encomenda_Id_Encomenda`)
  REFERENCES `Encomenda` (`Id_Encomenda`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT;
 */