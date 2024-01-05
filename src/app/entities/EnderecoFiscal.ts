import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('EnderecoFiscal')
export default class EnderecoFiscal {

    @PrimaryGeneratedColumn({ name: 'Num_End_Fiscal', type: 'int' })
    numEndFiscal: number;
   
    @Column({ name: 'Status_End_Fiscal', type: 'int', nullable: false })
    statusEndFiscal: number;

    @CreateDateColumn({ name: 'Created_at_End_Fiscal', type: 'datetime', nullable: false })
    createdAtEndFiscal: Date;

    @UpdateDateColumn({ name: 'Updated_at_End_Fiscal', type: 'datetime', nullable: false })
    updatedAtEndFiscal: Date;
}

/**
CREATE TABLE IF NOT EXISTS `EnderecoFiscal` (
  `Num_End_Fiscal` INT NOT NULL,
  `Status_End_Fiscal` INT NOT NULL,
  `Updated_at_End_Fiscal` DATETIME NOT NULL,
  `Created_at_End_Fiscal` DATETIME NOT NULL,
  PRIMARY KEY (`Num_End_Fiscal`)
);
 */