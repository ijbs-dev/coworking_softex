interface IRecebimentoEncomendaCreate {
    obsRecebEncomenda: string;
    dataHoraRecebEncomenda?: Date | undefined;
    encomendaIdEncomenda: number;
    enderecoFiscalNumEndFiscal: number;
}

export default IRecebimentoEncomendaCreate;
