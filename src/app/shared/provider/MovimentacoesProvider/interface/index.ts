import type { ETiposDeMovimentacao } from "../enum";

export interface IFormularioMovimentacao {
    codProd: number;
    tipoMovimentacao: ETiposDeMovimentacao;
    codMovimentacaoEntrada: number | null;
    qtdAMovimentar: number;
    dataArmazenagem: string;
    dataSaida: string;
    observacao: string;
}