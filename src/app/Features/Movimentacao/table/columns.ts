import type { ITabelaPropriedadesProps } from "../../../shared/global/interface";

export const TabelaMovimentacoes: ITabelaPropriedadesProps[] = [
    {
        valor: "Código",
        chave: "CodMovimentacao"
    },
    {
        valor: "Produto",
        chave: "Produto",
        propriedades: {
            alinhamento: "left"
        }
    },
    {
        valor: "T. Movimentação",
        chave: "TipoMovimentacao",
        propriedades: {
            alinhamento: "left"
        }
    },
    {
        valor: "Data Movimentado",
        chave: "DataMovimentacao"
    },
    {
        valor: "Armazeado Em",
        chave: "DataArmazenagem"
    },
    {
        valor: "Saída Em",
        chave: "DataSaida"
    },
    {
        valor: "Qtd.Movimetado",
        chave: "QtdMovimentacao"
    },
    {
        valor: "Qtd. Restante",
        chave: "QtdRestante"
    },
];