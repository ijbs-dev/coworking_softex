interface IUsuario {
    idUsuario: number;
    nomeUsuario: string;
    funcaoUsuario: string;
    emailUsuario: string;
    loginUsuario: string;
    senhaUsuario: string;
    statusUsuario: boolean;
    created_atUsuario: Date;
    updated_atUsuario: Date;
}

export default IUsuario;

/**
 * CREATE TABLE IF NOT EXISTS `Usuario` (
  `Id_Usuario` INT NOT NULL,
  `Nome_Usuario` VARCHAR(100) NOT NULL,
  `Funcao_Usuario` VARCHAR(50) NOT NULL,
  `Email_Usuario` VARCHAR(100) NOT NULL,
  `Login_Usuario` VARCHAR(50) NOT NULL,
  `Senha_Usuario` VARCHAR(50) NOT NULL,
  `Status_Usuario` TINYINT NOT NULL,
  `Created_at_Usuario` DATETIME NOT NULL,
  `Updated_at_Usuario` DATETIME NOT NULL,
  PRIMARY KEY (`Id_Usuario`)
);
 */