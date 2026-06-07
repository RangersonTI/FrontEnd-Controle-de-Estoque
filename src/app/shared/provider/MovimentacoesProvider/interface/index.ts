import type { ETiposDeMovimentacao } from "../enum";

export interface IFormularioMovimentacao {
    codProd: string;
    codVariacao: string;
    tipoMovimentacao: ETiposDeMovimentacao;
    codMovimentacaoEntrada: string;
    qtdAMovimentar: number;
    dataArmazenagem: string;
    dataSaida: string;
    observacao: string;
}