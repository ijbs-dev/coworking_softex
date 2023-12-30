interface IRecebimentoEncomenda {
    idRecebEncomenda: number;
    dataHoraRecebEncomenda: Date;
    obsRecebEncomenda: string;
    encomendaIdEncomenda: number;
    enderecoFiscalNumEndFiscal: number;
}

export default IRecebimentoEncomenda;

/**
 * CREATE TABLE IF NOT EXISTS `RecebimentoEncomenda` (
  `Id_Receb_Encomenda` INT NOT NULL,
  `DataHora_Receb_Encomenda` DATETIME NOT NULL,
  `Obs_Receb_encomenda` VARCHAR(200) NOT NULL,
  `Encomenda_Id_Encomenda` INT NOT NULL,
  `EnderecoFiscal_Num_End_Fiscal` INT NOT NULL,
  PRIMARY KEY (`Id_Receb_Encomenda`, `Encomenda_Id_Encomenda`, `EnderecoFiscal_Num_End_Fiscal`),
  INDEX `fk_RecebimentoEncomenda_Encomenda_idx` (`Encomenda_Id_Encomenda`),
  INDEX `fk_RecebimentoEncomenda_EnderecoFiscal_idx` (`EnderecoFiscal_Num_End_Fiscal`)
  -- FOREIGN KEY removed
);

ALTER TABLE `RecebimentoEncomenda` ADD CONSTRAINT `fk_RecebimentoEncomenda_Encomenda`
  FOREIGN KEY (`Encomenda_Id_Encomenda`)
  REFERENCES `Encomenda` (`Id_Encomenda`);

ALTER TABLE `RecebimentoEncomenda` ADD CONSTRAINT `fk_RecebimentoEncomenda_EnderecoFiscal`
  FOREIGN KEY (`EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `EnderecoFiscal` (`Num_End_Fiscal`);

 */