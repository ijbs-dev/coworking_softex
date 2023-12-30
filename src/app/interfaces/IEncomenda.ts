interface IEncomenda {
    idEncomenda: number;
    obsEncomenda: string;
    statusRetirada: boolean;
    clienteIdCliente: number;
    clienteEnderecoIdEndereco: number;
    clienteEnderecoFiscalNumEndFiscal: number;
}

export default IEncomenda;

/**
 * CREATE TABLE IF NOT EXISTS `Encomenda` (
  `Id_Encomenda` INT NOT NULL,
  `Obs_Encomenda` VARCHAR(100) NOT NULL,
  `Status_Retirada` TINYINT NOT NULL,
  `Cliente_Id_Cliente` INT NOT NULL,
  `Cliente_Endereco_Id_Endereco` INT NOT NULL,
  `Cliente_EnderecoFiscal_Num_End_Fiscal` INT NOT NULL,
  PRIMARY KEY (`Id_Encomenda`),
  INDEX `fk_Encomenda_Cliente_idx` (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`, `Cliente_EnderecoFiscal_Num_End_Fiscal`)
  -- FOREIGN KEY removed
);

ALTER TABLE `Encomenda` ADD CONSTRAINT `fk_Encomenda_Cliente`
  FOREIGN KEY (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`, `Cliente_EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `Cliente` (`Id_Cliente`, `Endereco_Id_Endereco`, `EnderecoFiscal_Num_End_Fiscal`);
 */