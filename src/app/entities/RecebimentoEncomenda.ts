import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Encomenda from "./Encomenda";
import EnderecoFiscal from "./EnderecoFiscal";
import Recepcao from "./Recepcao";

@Entity('RecebimentoEncomenda')
export default class RecebimentoEncomenda {
    @PrimaryGeneratedColumn({ name: 'Id_Receb_Encomenda' })
    idRecebEncomenda: number;

    @Column({ name: 'DataHora_Receb_Encomenda', nullable: false  })
    dataHoraRecebEncomenda: Date;

    @Column({ name: 'Obs_Receb_encomenda', length: 200, nullable: false  })
    obsRecebEncomenda: string;

    @OneToOne(() => Encomenda, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Encomenda_Id_Encomenda', referencedColumnName: 'idEncomenda' })
    encomenda: Encomenda;

    @OneToOne(() => EnderecoFiscal, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'EnderecoFiscal_Num_End_Fiscal', referencedColumnName: 'numEndFiscal' })
    enderecoFiscal: EnderecoFiscal;

    @OneToOne(() => Recepcao, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'Recepcao_Id_Recepcao', referencedColumnName: 'idRecepcao' })
    recepcao: Recepcao;
}

/**
CREATE TABLE IF NOT EXISTS `RecebimentoEncomenda` (
  `Id_Receb_Encomenda` INT AUTO_INCREMENT,
  `DataHora_Receb_Encomenda` DATETIME NOT NULL,
  `Obs_Receb_encomenda` VARCHAR(200) NOT NULL,
  `Encomenda_Id_Encomenda` INT NOT NULL,
  `EnderecoFiscal_Num_End_Fiscal` INT NOT NULL,
  `Recepcao_Id_Recepcao` INT NOT NULL,
  PRIMARY KEY (`Id_Receb_Encomenda`, `Encomenda_Id_Encomenda`, `EnderecoFiscal_Num_End_Fiscal`),
  INDEX `fk_RecebimentoEncomenda_Encomenda_idx` (`Encomenda_Id_Encomenda`),
  INDEX `fk_RecebimentoEncomenda_EnderecoFiscal_idx` (`EnderecoFiscal_Num_End_Fiscal`),
  INDEX `fk_RecebimentoEncomenda_Recepcao_idx` (`Recepcao_Id_Recepcao`)
  -- FOREIGN KEY removed
);

ALTER TABLE `RecebimentoEncomenda` ADD CONSTRAINT `fk_RecebimentoEncomenda_Encomenda`
  FOREIGN KEY (`Encomenda_Id_Encomenda`)
  REFERENCES `Encomenda` (`Id_Encomenda`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `RecebimentoEncomenda` ADD CONSTRAINT `fk_RecebimentoEncomenda_EnderecoFiscal`
  FOREIGN KEY (`EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `EnderecoFiscal` (`Num_End_Fiscal`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `RecebimentoEncomenda` ADD CONSTRAINT `fk_RecebimentoEncomenda_Recepcao`
  FOREIGN KEY (`Recepcao_Id_Recepcao`)
  REFERENCES `Recepcao` (`Id_Recepcao`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  

 */