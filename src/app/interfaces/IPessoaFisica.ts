interface IPessoaFisica {
    idPfisica: number;
    cpf: string;
    idCliente: number;
}

export default IPessoaFisica;

/**
 * CREATE TABLE IF NOT EXISTS `PessoaFisica` (
  `Id_Pfisica` INT NOT NULL,
  `Cpf` VARCHAR(11) NOT NULL,
  `Id_Cliente` INT NOT NULL,
  PRIMARY KEY (`Id_Pfisica`),
  INDEX (`Id_Cliente`)
  -- FOREIGN KEY removed
);

ALTER TABLE `PessoaFisica` ADD CONSTRAINT `fk_PessoaFisica_Cliente`
  FOREIGN KEY (`Id_Cliente`)
  REFERENCES `Cliente` (`Id_Cliente`);
 */