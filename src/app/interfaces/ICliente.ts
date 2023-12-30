interface ICliente{

    idCliente?: number;
    nomeCliente: string;
    telefoneCliente: string;
    emailCliente: string;
    qtdPontosCliente: number;
    prazoCliente: Date;
    valorMensalCliente: number;
    statusCliente: boolean;
    createdAtCliente: Date;
    updatedAtCliente: Date;
    enderecoIdEndereco: number;
    adminIdAdmin: number;
    recepcaoIdRecepcao: number;
    enderecoFiscalNumEndFiscal: number;

}

export default ICliente;