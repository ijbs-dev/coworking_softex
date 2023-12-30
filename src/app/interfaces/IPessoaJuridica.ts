interface IPessoaJuridica {
    idPJuridica: number;
    cnpj: string;
    razaosocial: string;
    clienteIdCliente: number;
    clienteEnderecoIdEndereco: number;
}

export default IPessoaJuridica;

/**
 * CREATE TABLE IF NOT EXISTS `PessoaJuridica` (
  `Id_PJuridica` INT NOT NULL,
  `Cnpj` VARCHAR(14) NOT NULL,
  `Razao_social` VARCHAR(200) NOT NULL,
  `Cliente_Id_Cliente` INT NOT NULL,
  `Cliente_Endereco_Id_Endereco` INT NOT NULL,
  PRIMARY KEY (`Id_PJuridica`),
  INDEX `fk_PessoaJuridica_Cliente_idx` (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`)
  -- FOREIGN KEY removed
);

ALTER TABLE `PessoaJuridica` ADD CONSTRAINT `fk_PessoaJuridica_Cliente`
  FOREIGN KEY (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`)
  REFERENCES `Cliente` (`Id_Cliente`, `Endereco_Id_Endereco`);
 */
