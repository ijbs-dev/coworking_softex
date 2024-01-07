interface IEndereco {
    logradouro: string;
    numero: number;
    bairro: string;
    uf: string;
}

export default IEndereco;

/**
 * CREATE TABLE IF NOT EXISTS `Endereco` (
  `Id_Endereco` INT NOT NULL,
  `Logradouro` VARCHAR(100) NOT NULL,
  `Numero` INT NOT NULL,
  `Bairro` VARCHAR(100) NOT NULL,
  `UF` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`Id_Endereco`)
);
 */