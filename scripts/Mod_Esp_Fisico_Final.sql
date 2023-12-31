
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema coworking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `coworking`;
USE coworking;

-- -----------------------------------------------------
-- Table `Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Usuario` (
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

-- -----------------------------------------------------
-- Table `Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Endereco` (
  `Id_Endereco` INT NOT NULL,
  `Logradouro` VARCHAR(100) NOT NULL,
  `Numero` INT NOT NULL,
  `Bairro` VARCHAR(100) NOT NULL,
  `UF` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`Id_Endereco`)
);

-- -----------------------------------------------------
-- Table `Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Admin` (
  `Id_Admin` INT NOT NULL,
  `Id_Usuario` INT NOT NULL,
  PRIMARY KEY (`Id_Admin`),
  CONSTRAINT `FK_Admin`
    FOREIGN KEY (`Id_Usuario`)
    REFERENCES `Usuario` (`Id_Usuario`)
    ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `EnderecoFiscal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `EnderecoFiscal` (
  `Num_End_Fiscal` INT NOT NULL,
  `Status_End_Fiscal` TINYINT NOT NULL,
  `Updated_at_End_Fiscal` DATETIME NOT NULL,
  `Created_at_End_Fiscal` DATETIME NOT NULL,
  PRIMARY KEY (`Num_End_Fiscal`)
);

-- -----------------------------------------------------
-- Table `PessoaFisica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PessoaFisica` (
  `Id_Pfisica` INT NOT NULL,
  `Cpf` VARCHAR(11) NOT NULL,
  `Id_Cliente` INT NOT NULL,
  PRIMARY KEY (`Id_Pfisica`),
  INDEX (`Id_Cliente`)
  -- FOREIGN KEY removed
);

-- -----------------------------------------------------
-- Table `PessoaJuridica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PessoaJuridica` (
  `Id_PJuridica` INT NOT NULL,
  `Cnpj` VARCHAR(14) NOT NULL,
  `Razao_social` VARCHAR(200) NOT NULL,
  `Cliente_Id_Cliente` INT NOT NULL,
  `Cliente_Endereco_Id_Endereco` INT NOT NULL,
  PRIMARY KEY (`Id_PJuridica`),
  INDEX `fk_PessoaJuridica_Cliente_idx` (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`)
  -- FOREIGN KEY removed
);

-- -----------------------------------------------------
-- Table `Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Cliente` (
  `Id_Cliente` INT NOT NULL,
  `Nome_Cliente` VARCHAR(100) NOT NULL,
  `Telefone_Cliente` VARCHAR(11) NOT NULL,
  `Email_Cliente` VARCHAR(100) NOT NULL,
  `Qtd_pontos_Cliente` INT NOT NULL,
  `Prazo_Cliente` DATE NOT NULL,
  `Valor_mensal_Cliente` DECIMAL NOT NULL,
  `Status_Cliente` TINYINT NOT NULL,
  `Created_at_Cliente` DATETIME NOT NULL,
  `Updated_at_Cliente` DATETIME NOT NULL,
  `Endereco_Id_Endereco` INT NOT NULL,
  `Admin_Id_Admin` INT NOT NULL,
  `Recepcao_Id_recepcao` INT NOT NULL,
  `EnderecoFiscal_Num_End_Fiscal` INT NOT NULL,
  PRIMARY KEY (`Id_Cliente`, `Endereco_Id_Endereco`, `EnderecoFiscal_Num_End_Fiscal`),
  INDEX `fk_Cliente_Endereco_idx` (`Endereco_Id_Endereco`),
  INDEX `fk_Cliente_Admin_idx` (`Admin_Id_Admin`),
  INDEX `fk_Cliente_Recepcao_idx` (`Recepcao_Id_recepcao`),
  INDEX `fk_Cliente_EnderecoFiscal_idx` (`EnderecoFiscal_Num_End_Fiscal`)
  -- FOREIGN KEY removed
);

-- -----------------------------------------------------
-- Table `Encomenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Encomenda` (
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

-- -----------------------------------------------------
-- Table `RecebimentoEncomenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RecebimentoEncomenda` (
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

-- -----------------------------------------------------
-- Table `Recepcao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Recepcao` (
  `Id_recepcao` INT NOT NULL,
  `Id_Usuario` INT NOT NULL,
  `Id_Receb_Encomenda` INT NOT NULL,
  PRIMARY KEY (`Id_recepcao`),
  INDEX `fk_Recepcao_RecebimentoEncomenda_idx` (`Id_Receb_Encomenda`)
  -- FOREIGN KEY removed
);

-- -----------------------------------------------------
-- Table `RetiradaEncomenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RetiradaEncomenda` (
  `Id_Retir_Encomenda` INT NOT NULL,
  `DataHora_Retir_encomenda` DATETIME NOT NULL,
  `Obs_Retir_encomenda` VARCHAR(200) NOT NULL,
  `Encomenda_Id_Encomenda` INT NOT NULL,
  PRIMARY KEY (`Id_Retir_Encomenda`, `Encomenda_Id_Encomenda`),
  INDEX `fk_RetiradaEncomenda_Encomenda_idx` (`Encomenda_Id_Encomenda`)
  -- FOREIGN KEY removed
);

-- -----------------------------------------------------
-- Table `Representante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Representante` (
  `Id_Represent` INT NOT NULL,
  `Nome_Represent` VARCHAR(100) NOT NULL,
  `Email_Represent` VARCHAR(100) NOT NULL,
  `Status_Represent` TINYINT NOT NULL,
  `Telefone_Represent` VARCHAR(11) NOT NULL,
  `Updated_at_Represent` DATETIME NOT NULL,
  `Created_at_Represent` DATETIME NOT NULL,
  `Id_PJuridica` INT NOT NULL,
  `RetiradaEncomenda_Id_Retir_Encomenda` INT NOT NULL,
  PRIMARY KEY (`Id_Represent`),
  INDEX `fk_Representante_RetiradaEncomenda_idx` (`RetiradaEncomenda_Id_Retir_Encomenda`)
  -- FOREIGN KEY removed
);

-- ---------------------------------------------------------------------------------------------------

-- Inserir dados na tabela Usuario
INSERT INTO Usuario (Id_Usuario, Nome_Usuario, Funcao_Usuario, Email_Usuario, Login_Usuario, Senha_Usuario, Status_Usuario, Created_at_Usuario, Updated_at_Usuario)
VALUES
(1, 'John Doe', 'Developer', 'john.doe@email.com', 'john_doe', 'password123', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Jane Smith', 'Manager', 'jane.smith@email.com', 'jane_smith', 'password456', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'Bob Johnson', 'Designer', 'bob.johnson@email.com', 'bob_johnson', 'password789', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'Alice Williams', 'Analyst', 'alice.williams@email.com', 'alice_williams', 'passwordabc', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'Charlie Brown', 'Engineer', 'charlie.brown@email.com', 'charlie_brown', 'passworddef', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Inserir dados na tabela Admin
INSERT INTO Admin (Id_Admin, Id_Usuario)
VALUES
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5),
(11, 1),
(12, 2),
(13, 3),
(14, 4),
(15, 5),
(16, 1),
(17, 2),
(18, 3),
(19, 4),
(20, 5),
(21, 1),
(22, 2),
(23, 3),
(24, 4),
(25, 5),
(26, 1),
(27, 2),
(28, 3),
(29, 4),
(30, 5);

-- Inserir dados na tabela EnderecoFiscal
INSERT INTO EnderecoFiscal (Num_End_Fiscal, Status_End_Fiscal, Updated_at_End_Fiscal, Created_at_End_Fiscal)
VALUES
(31, 1, NOW(), NOW()),
(32, 0, NOW(), NOW()),
(33, 1, NOW(), NOW()),
(34, 0, NOW(), NOW()),
(35, 1, NOW(), NOW()),
(36, 0, NOW(), NOW()),
(37, 1, NOW(), NOW()),
(38, 0, NOW(), NOW()),
(39, 1, NOW(), NOW()),
(40, 0, NOW(), NOW()),
(41, 1, NOW(), NOW()),
(42, 0, NOW(), NOW()),
(43, 1, NOW(), NOW()),
(44, 0, NOW(), NOW()),
(45, 1, NOW(), NOW()),
(46, 0, NOW(), NOW()),
(47, 1, NOW(), NOW()),
(48, 0, NOW(), NOW()),
(49, 1, NOW(), NOW()),
(50, 0, NOW(), NOW());

-- Inserir dados na tabela Endereco
INSERT INTO Endereco (Id_Endereco, Logradouro, Numero, Bairro, UF)
VALUES
(81, 'Rua A', 123, 'Centro', 'SP'),
(82, 'Avenida B', 456, 'Bairro X', 'RJ'),
(83, 'Rua C', 789, 'Bairro Y', 'MG'),
(84, 'Avenida D', 101, 'Centro', 'SP'),
(85, 'Rua E', 202, 'Bairro Z', 'RJ'),
(86, 'Avenida F', 303, 'Bairro X', 'MG'),
(87, 'Rua G', 404, 'Centro', 'SP'),
(88, 'Avenida H', 505, 'Bairro Y', 'RJ'),
(89, 'Rua I', 606, 'Bairro Z', 'MG'),
(90, 'Avenida J', 707, 'Centro', 'SP'),
(91, 'Rua K', 808, 'Bairro X', 'RJ'),
(92, 'Avenida L', 909, 'Bairro Y', 'MG'),
(93, 'Rua M', 111, 'Centro', 'SP'),
(94, 'Avenida N', 222, 'Bairro Z', 'RJ'),
(95, 'Rua O', 333, 'Bairro X', 'MG'),
(96, 'Avenida P', 444, 'Centro', 'SP'),
(97, 'Rua Q', 555, 'Bairro Y', 'RJ'),
(98, 'Avenida R', 666, 'Bairro Z', 'MG'),
(99, 'Rua S', 777, 'Centro', 'SP'),
(100, 'Avenida T', 888, 'Bairro X', 'RJ'),
(101, 'Rua U', 999, 'Bairro Y', 'MG'),
(102, 'Avenida V', 121, 'Centro', 'SP'),
(103, 'Rua W', 232, 'Bairro Z', 'RJ'),
(104, 'Avenida X', 343, 'Bairro X', 'MG'),
(105, 'Rua Y', 454, 'Centro', 'SP'),
(106, 'Avenida Z', 565, 'Bairro Y', 'RJ'),
(107, 'Rua AA', 676, 'Bairro Z', 'MG'),
(108, 'Avenida BB', 787, 'Centro', 'SP'),
(109, 'Rua CC', 898, 'Bairro X', 'RJ'),
(110, 'Avenida DD', 909, 'Bairro Y', 'MG');

-- Inserir dados na tabela Cliente
INSERT INTO Cliente (Id_Cliente, Nome_Cliente, Telefone_Cliente, Email_Cliente, Qtd_pontos_Cliente, Prazo_Cliente, Valor_mensal_Cliente, Status_Cliente, Created_at_Cliente, Updated_at_Cliente, Endereco_Id_Endereco, Admin_Id_Admin, Recepcao_Id_recepcao, EnderecoFiscal_Num_End_Fiscal)
VALUES
(231, 'João Silva', '1111-2222', 'joao.silva@email.com', 20, '2023-12-31', 1500.00, 0, NOW(), NOW(), 81, 6, 261, 31),
(232, 'Maria Oliveira', '3333-4444', 'maria.oliveira@email.com', 30, '2023-12-31', 2500.00, 1, NOW(), NOW(), 82, 7, 262, 32),
(233, 'Carlos Santos', '5555-6666', 'carlos.santos@email.com', 40, '2023-12-31', 3500.00, 0, NOW(), NOW(), 83, 8, 263, 33),
(234, 'Ana Souza', '9999-0000', 'ana.souza@email.com', 70, '2023-12-31', 7000.00, 1, NOW(), NOW(), 84, 9, 264, 34),
(235, 'Rafael Lima', '7777-8888', 'rafael.lima@email.com', 50, '2023-12-31', 4000.00, 0, NOW(), NOW(), 85, 10, 265, 35),
(236, 'Aline Oliveira', '3333-9999', 'aline.oliveira@email.com', 60, '2023-12-31', 4500.00, 1, NOW(), NOW(), 86, 11, 266, 36),
(237, 'Fernando Costa', '5555-1111', 'fernando.costa@email.com', 70, '2023-12-31', 5000.00, 0, NOW(), NOW(), 87, 12, 267, 37),
(238, 'Juliana Pereira', '2222-3333', 'juliana.pereira@email.com', 80, '2023-12-31', 5500.00, 1, NOW(), NOW(), 88, 13, 268, 38),
(239, 'Roberto Santos', '4444-5555', 'roberto.santos@email.com', 90, '2023-12-31', 6000.00, 0, NOW(), NOW(), 89, 14, 269, 39),
(240, 'Camila Rocha', '6666-7777', 'camila.rocha@email.com', 120, '2023-12-31', 9000.00, 1, NOW(), NOW(), 90, 15, 270, 40);

-- Inserir dados na tabela PessoaFisica
INSERT INTO PessoaFisica (Id_Pfisica, Cpf, Id_Cliente)
VALUES
(51, '11111111111', 231),
(52, '22222222222', 232),
(53, '33333333333', 233),
(54, '44444444444', 234),
(55, '55555555555', 235),
(56, '66666666666', 236),
(57, '77777777777', 237),
(58, '88888888888', 238),
(59, '99999999999', 239),
(60, '12345678900', 240),
(61, '98765432100', 231),
(62, '11122233344', 232),
(63, '55544433322', 233),
(64, '12345678901', 234),
(65, '98765432101', 235),
(66, '11122233345', 236),
(67, '55544433323', 237),
(68, '12345678902', 238),
(69, '98765432102', 239),
(70, '11122233346', 240),
(71, '55544433324', 231),
(72, '12345678903', 232),
(73, '98765432103', 233),
(74, '11122233347', 234),
(75, '55544433325', 235),
(76, '12345678904', 236),
(77, '98765432104', 237),
(78, '11122233348', 238),
(79, '55544433326', 239),
(80, '12345678905', 240);

-- Inserir dados na tabela PessoaJuridica
INSERT INTO PessoaJuridica (Id_PJuridica, Cnpj, Razao_social, Cliente_Id_Cliente, Cliente_Endereco_Id_Endereco)
VALUES
(241, '11111111000101', 'Empresa 1', 231, 81),
(242, '22222222000102', 'Empresa 2', 232, 82),
(243, '33333333000103', 'Empresa 3', 233, 83),
(244, '44444444000104', 'Empresa 4', 234, 84),
(245, '55555555000105', 'Empresa 5', 235, 85),
(246, '66666666000106', 'Empresa 6', 236, 86),
(247, '77777777000107', 'Empresa 7', 237, 87),
(248, '88888888000108', 'Empresa 8', 238, 88),
(249, '99999999000109', 'Empresa 9', 239, 89),
(250, '12345678000100', 'Empresa 10', 240, 90),
(251, '98765432000100', 'Empresa 11', 231, 91),
(252, '11222333000101', 'Empresa 12', 232, 92),
(253, '55444333000102', 'Empresa 13', 233, 93),
(254, '12345678000101', 'Empresa 14', 234, 94),
(255, '98765432000101', 'Empresa 15', 235, 95),
(256, '11222333000102', 'Empresa 16', 236, 96),
(257, '55444333000103', 'Empresa 17', 237, 97),
(258, '12345678000102', 'Empresa 18', 238, 98),
(259, '98765432000102', 'Empresa 19', 239, 99),
(260, '11222333000103', 'Empresa 20', 240, 100),
(261, '55444333000104', 'Empresa 21', 231, 101),
(262, '12345678000103', 'Empresa 22', 232, 102),
(263, '98765432000103', 'Empresa 23', 233, 103),
(264, '11222333000104', 'Empresa 24', 234, 104),
(265, '55444333000105', 'Empresa 25', 235, 105),
(266, '12345678000104', 'Empresa 26', 236, 106),
(267, '98765432000104', 'Empresa 27', 237, 107),
(268, '11222333000105', 'Empresa 28', 238, 108),
(269, '55444333000106', 'Empresa 29', 239, 109),
(270, '12345678000105', 'Empresa 30', 240, 110);



-- Inserir dados na tabela Encomenda
INSERT INTO Encomenda (Id_Encomenda, Obs_Encomenda, Status_Retirada, Cliente_Id_Cliente, Cliente_Endereco_Id_Endereco, Cliente_EnderecoFiscal_Num_End_Fiscal)
VALUES
(301, 'Obs 1', 0, 231, 81, 31),
(302, 'Obs 2', 1, 232, 82, 32),
(303, 'Obs 3', 0, 233, 83, 33),
(304, 'Obs 4', 1, 234, 84, 34),
(305, 'Obs 5', 0, 235, 85, 35),
(306, 'Obs 6', 1, 236, 86, 36),
(307, 'Obs 7', 0, 237, 87, 37),
(308, 'Obs 8', 1, 238, 88, 38),
(309, 'Obs 9', 0, 239, 89, 39),
(310, 'Obs 10', 1, 240, 90, 40),
(311, 'Obs 11', 0, 231, 91, 41),
(312, 'Obs 12', 1, 232, 92, 42),
(313, 'Obs 13', 0, 233, 93, 43),
(314, 'Obs 14', 1, 234, 94, 44),
(315, 'Obs 15', 0, 235, 95, 45),
(316, 'Obs 16', 1, 236, 96, 46),
(317, 'Obs 17', 0, 237, 97, 47),
(318, 'Obs 18', 1, 238, 98, 48),
(319, 'Obs 19', 0, 239, 99, 49),
(320, 'Obs 20', 1, 240, 100, 50),
(321, 'Obs 21', 0, 231, 101, 31),
(322, 'Obs 22', 1, 232, 102, 32),
(323, 'Obs 23', 0, 233, 103, 33),
(324, 'Obs 24', 1, 234, 104, 34),
(325, 'Obs 25', 0, 235, 105, 35),
(326, 'Obs 26', 1, 236, 106, 36),
(327, 'Obs 27', 0, 237, 107, 37),
(328, 'Obs 28', 1, 238, 108, 38),
(329, 'Obs 29', 0, 239, 109, 39),
(330, 'Obs 30', 1, 240, 110, 40);


-- Inserir dados na tabela RecebimentoEncomenda
INSERT INTO RecebimentoEncomenda (Id_Receb_Encomenda, DataHora_Receb_Encomenda, Obs_Receb_encomenda, Encomenda_Id_Encomenda, EnderecoFiscal_Num_End_Fiscal)
VALUES
(111, NOW(), 'Recebimento 1', 301, 31),
(112, NOW(), 'Recebimento 2', 302, 32),
(113, NOW(), 'Recebimento 3', 303, 33),
(114, NOW(), 'Recebimento 4', 304, 34),
(115, NOW(), 'Recebimento 5', 305, 35),
(116, NOW(), 'Recebimento 6', 306, 36),
(117, NOW(), 'Recebimento 7', 307, 37),
(118, NOW(), 'Recebimento 8', 308, 38),
(119, NOW(), 'Recebimento 9', 309, 39),
(120, NOW(), 'Recebimento 10', 310, 40),
(121, NOW(), 'Recebimento 11', 311, 41),
(122, NOW(), 'Recebimento 12', 312, 42),
(123, NOW(), 'Recebimento 13', 313, 43),
(124, NOW(), 'Recebimento 14', 314, 44),
(125, NOW(), 'Recebimento 15', 315, 45),
(126, NOW(), 'Recebimento 16', 316, 46),
(127, NOW(), 'Recebimento 17', 317, 47),
(128, NOW(), 'Recebimento 18', 318, 48),
(129, NOW(), 'Recebimento 19', 319, 49),
(130, NOW(), 'Recebimento 20', 320, 50),
(131, NOW(), 'Recebimento 21', 321, 31),
(132, NOW(), 'Recebimento 22', 322, 32),
(133, NOW(), 'Recebimento 23', 323, 33),
(134, NOW(), 'Recebimento 24', 324, 34),
(135, NOW(), 'Recebimento 25', 325, 35),
(136, NOW(), 'Recebimento 26', 326, 36),
(137, NOW(), 'Recebimento 27', 327, 37),
(138, NOW(), 'Recebimento 28', 328, 38),
(139, NOW(), 'Recebimento 29', 329, 39),
(140, NOW(), 'Recebimento 30', 330, 40);

-- Inserir dados na tabela Recepcao
INSERT INTO Recepcao (Id_recepcao, Id_Usuario, Id_Receb_Encomenda)
VALUES
(271, 1, 111),
(272, 2, 112),
(273, 3, 113),
(274, 4, 114),
(275, 5, 115),
(276, 1, 116),
(277, 2, 117),
(278, 3, 118),
(279, 4, 119),
(280, 5, 120),
(281, 1, 121),
(282, 2, 122),
(283, 3, 123),
(284, 4, 124),
(285, 5, 125),
(286, 1, 126),
(287, 2, 127),
(288, 3, 128),
(289, 4, 129),
(290, 5, 130),
(291, 1, 131),
(292, 2, 132),
(293, 3, 133),
(294, 4, 134),
(295, 5, 135),
(296, 1, 136),
(297, 2, 137),
(298, 3, 138),
(299, 4, 139),
(300, 5, 140);

-- Inserir dados na tabela RetiradaEncomenda
INSERT INTO RetiradaEncomenda (Id_Retir_Encomenda, DataHora_Retir_encomenda, Obs_Retir_encomenda, Encomenda_Id_Encomenda)
VALUES
(331, NOW(), 'Retirada 1', 301),
(332, NOW(), 'Retirada 2', 302),
(333, NOW(), 'Retirada 3', 303),
(334, NOW(), 'Retirada 4', 304),
(335, NOW(), 'Retirada 5', 305),
(336, NOW(), 'Retirada 6', 306),
(337, NOW(), 'Retirada 7', 307),
(338, NOW(), 'Retirada 8', 308),
(339, NOW(), 'Retirada 9', 309),
(340, NOW(), 'Retirada 10', 310),
(341, NOW(), 'Retirada 11', 311),
(342, NOW(), 'Retirada 12', 312),
(343, NOW(), 'Retirada 13', 313),
(344, NOW(), 'Retirada 14', 314),
(345, NOW(), 'Retirada 15', 315),
(346, NOW(), 'Retirada 16', 316),
(347, NOW(), 'Retirada 17', 317),
(348, NOW(), 'Retirada 18', 318),
(349, NOW(), 'Retirada 19', 319),
(350, NOW(), 'Retirada 20', 320),
(351, NOW(), 'Retirada 21', 321),
(352, NOW(), 'Retirada 22', 322),
(353, NOW(), 'Retirada 23', 323),
(354, NOW(), 'Retirada 24', 324),
(355, NOW(), 'Retirada 25', 325),
(356, NOW(), 'Retirada 26', 326),
(357, NOW(), 'Retirada 27', 327),
(358, NOW(), 'Retirada 28', 328),
(359, NOW(), 'Retirada 29', 329),
(360, NOW(), 'Retirada 30', 330);

-- Inserir dados na tabela Representante
INSERT INTO Representante (Id_Represent, Nome_Represent, Email_Represent, Status_Represent, Telefone_Represent, Updated_at_Represent, Created_at_Represent, Id_PJuridica, RetiradaEncomenda_Id_Retir_Encomenda)
VALUES
(361, 'Ana Silva', 'ana.silva@email.com', 0, '1111-1111', NOW(), NOW(), 241, 331),
(362, 'Carlos Oliveira', 'carlos.oliveira@email.com', 1, '2222-2222', NOW(), NOW(), 242, 332),
(363, 'Lucia Pereira', 'lucia.pereira@email.com', 0, '3333-3333', NOW(), NOW(), 243, 333),
(364, 'Ricardo Santos', 'ricardo.santos@email.com', 1, '4444-4444', NOW(), NOW(), 244, 334),
(365, 'Mariana Costa', 'mariana.costa@email.com', 0, '5555-5555', NOW(), NOW(), 245, 335),
(366, 'Gustavo Lima', 'gustavo.lima@email.com', 1, '6666-6666', NOW(), NOW(), 246, 336),
(367, 'Juliana Rocha', 'juliana.rocha@email.com', 0, '7777-7777', NOW(), NOW(), 247, 337),
(368, 'Fernando Almeida', 'fernando.almeida@email.com', 1, '8888-8888', NOW(), NOW(), 248, 338),
(369, 'Amanda Souza', 'amanda.souza@email.com', 0, '9999-9999', NOW(), NOW(), 249, 339),
(370, 'Bruno Silva', 'bruno.silva@email.com', 1, '1010-1010', NOW(), NOW(), 250, 340),
(371, 'Luiza Oliveira', 'luiza.oliveira@email.com', 0, '1111-1111', NOW(), NOW(), 251, 341),
(372, 'Gabriel Pereira', 'gabriel.pereira@email.com', 1, '1212-1212', NOW(), NOW(), 252, 342),
(373, 'Isabela Santos', 'isabela.santos@email.com', 0, '1313-1313', NOW(), NOW(), 253, 343),
(374, 'Fernando Rocha', 'fernando.rocha@email.com', 1, '1414-1414', NOW(), NOW(), 254, 344),
(375, 'Julia Costa', 'julia.costa@email.com', 0, '1515-1515', NOW(), NOW(), 255, 345),
(376, 'Rodrigo Lima', 'rodrigo.lima@email.com', 1, '1616-1616', NOW(), NOW(), 256, 346),
(377, 'Camila Almeida', 'camila.almeida@email.com', 0, '1717-1717', NOW(), NOW(), 257, 347),
(378, 'Pedro Souza', 'pedro.souza@email.com', 1, '1818-1818', NOW(), NOW(), 258, 348),
(379, 'Vivian Oliveira', 'vivian.oliveira@email.com', 0, '1919-1919', NOW(), NOW(), 259, 349),
(380, 'Andre Silva', 'andre.silva@email.com', 1, '2020-2020', NOW(), NOW(), 260, 350),
(381, 'Larissa Pereira', 'larissa.pereira@email.com', 0, '2121-2121', NOW(), NOW(), 261, 351),
(382, 'Renato Santos', 'renato.santos@email.com', 1, '2222-2222', NOW(), NOW(), 262, 352),
(383, 'Sabrina Costa', 'sabrina.costa@email.com', 0, '2323-2323', NOW(), NOW(), 263, 353),
(384, 'Marcos Lima', 'marcos.lima@email.com', 1, '2424-2424', NOW(), NOW(), 264, 354),
(385, 'Aline Almeida', 'aline.almeida@email.com', 0, '2525-2525', NOW(), NOW(), 265, 355),
(386, 'Roberto Souza', 'roberto.souza@email.com', 1, '2626-2626', NOW(), NOW(), 266, 356),
(387, 'Tatiane Oliveira', 'tatiane.oliveira@email.com', 0, '2727-2727', NOW(), NOW(), 267, 357),
(388, 'Lucas Silva', 'lucas.silva@email.com', 1, '2828-2828', NOW(), NOW(), 268, 358),
(389, 'Carolina Rocha', 'carolina.rocha@email.com', 0, '2929-2929', NOW(), NOW(), 269, 359),
(390, 'Eduardo Costa', 'eduardo.costa@email.com', 1, '3030-3030', NOW(), NOW(), 270, 360);


-- -----------------------------------------------------
-- Add Foreign Key Constraints
-- -----------------------------------------------------
ALTER TABLE `PessoaFisica` ADD CONSTRAINT `fk_PessoaFisica_Cliente`
  FOREIGN KEY (`Id_Cliente`)
  REFERENCES `Cliente` (`Id_Cliente`);

ALTER TABLE `PessoaJuridica` ADD CONSTRAINT `fk_PessoaJuridica_Cliente`
  FOREIGN KEY (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`)
  REFERENCES `Cliente` (`Id_Cliente`, `Endereco_Id_Endereco`);
  
ALTER TABLE `Cliente` ADD CONSTRAINT `fk_Cliente_Endereco`
  FOREIGN KEY (`Endereco_Id_Endereco`)
  REFERENCES `Endereco` (`Id_Endereco`);

ALTER TABLE `Cliente` ADD CONSTRAINT `fk_Cliente_Admin`
  FOREIGN KEY (`Admin_Id_Admin`)
  REFERENCES `Admin` (`Id_Admin`);

ALTER TABLE `Cliente` ADD CONSTRAINT `fk_Cliente_Recepcao`
  FOREIGN KEY (`Recepcao_Id_recepcao`)
  REFERENCES `Recepcao` (`Id_recepcao`);

ALTER TABLE `Cliente` ADD CONSTRAINT `fk_Cliente_EnderecoFiscal`
  FOREIGN KEY (`EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `EnderecoFiscal` (`Num_End_Fiscal`);

ALTER TABLE `Encomenda` ADD CONSTRAINT `fk_Encomenda_Cliente`
  FOREIGN KEY (`Cliente_Id_Cliente`, `Cliente_Endereco_Id_Endereco`, `Cliente_EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `Cliente` (`Id_Cliente`, `Endereco_Id_Endereco`, `EnderecoFiscal_Num_End_Fiscal`);

ALTER TABLE `RecebimentoEncomenda` ADD CONSTRAINT `fk_RecebimentoEncomenda_Encomenda`
  FOREIGN KEY (`Encomenda_Id_Encomenda`)
  REFERENCES `Encomenda` (`Id_Encomenda`);

ALTER TABLE `RecebimentoEncomenda` ADD CONSTRAINT `fk_RecebimentoEncomenda_EnderecoFiscal`
  FOREIGN KEY (`EnderecoFiscal_Num_End_Fiscal`)
  REFERENCES `EnderecoFiscal` (`Num_End_Fiscal`);

ALTER TABLE `Recepcao` ADD CONSTRAINT `FK_Recepcao`
  FOREIGN KEY (`Id_Usuario`)
  REFERENCES `Usuario` (`Id_Usuario`)
  ON DELETE CASCADE;

ALTER TABLE `Recepcao` ADD CONSTRAINT `fk_Recepcao_RecebimentoEncomenda`
  FOREIGN KEY (`Id_Receb_Encomenda`)
  REFERENCES `RecebimentoEncomenda` (`Id_Receb_Encomenda`)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;

ALTER TABLE `RetiradaEncomenda` ADD CONSTRAINT `fk_RetiradaEncomenda_Encomenda`
  FOREIGN KEY (`Encomenda_Id_Encomenda`)
  REFERENCES `Encomenda` (`Id_Encomenda`);

ALTER TABLE `Representante` ADD CONSTRAINT `fk_Representante_PessoaJuridica`
  FOREIGN KEY (`Id_PJuridica`)
  REFERENCES `PessoaJuridica` (`Id_PJuridica`);
    
ALTER TABLE `Representante` ADD CONSTRAINT `fk_Representante_RetiradaEncomenda`
  FOREIGN KEY (`RetiradaEncomenda_Id_Retir_Encomenda`)
  REFERENCES `RetiradaEncomenda` (`Id_Retir_Encomenda`);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
