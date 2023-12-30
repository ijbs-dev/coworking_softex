interface IEnderecoFiscal {
    numEndFiscal: number;
    statusEndFiscal: number;
    updatedAtEndFiscal: Date;
    createdAtEndFiscal: Date;
}

export default IEnderecoFiscal;

/**
 * CREATE TABLE IF NOT EXISTS `EnderecoFiscal` (
  `Num_End_Fiscal` INT NOT NULL,
  `Status_End_Fiscal` TINYINT NOT NULL,
  `Updated_at_End_Fiscal` DATETIME NOT NULL,
  `Created_at_End_Fiscal` DATETIME NOT NULL,
  PRIMARY KEY (`Num_End_Fiscal`)
);
 */