interface IRecepcao {
    idRecepcao: number;
    idUsuario: number;
    idRecebEncomenda: number;
}

export default IRecepcao;

/**
 * CREATE TABLE IF NOT EXISTS `Recepcao` (
  `Id_recepcao` INT NOT NULL,
  `Id_Usuario` INT NOT NULL,
  `Id_Receb_Encomenda` INT NOT NULL,
  PRIMARY KEY (`Id_recepcao`),
  INDEX `fk_Recepcao_RecebimentoEncomenda_idx` (`Id_Receb_Encomenda`)
  -- FOREIGN KEY removed
);

ALTER TABLE `Recepcao` ADD CONSTRAINT `FK_Recepcao`
  FOREIGN KEY (`Id_Usuario`)
  REFERENCES `Usuario` (`Id_Usuario`)
  ON DELETE CASCADE;

ALTER TABLE `Recepcao` ADD CONSTRAINT `fk_Recepcao_RecebimentoEncomenda`
  FOREIGN KEY (`Id_Receb_Encomenda`)
  REFERENCES `RecebimentoEncomenda` (`Id_Receb_Encomenda`)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;
 */