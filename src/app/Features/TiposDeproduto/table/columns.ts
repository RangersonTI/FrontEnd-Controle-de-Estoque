import type { ITabelaPropriedadesProps } from "../../../shared/global/interface"

export const TabelaTiposDeProduto: ITabelaPropriedadesProps[] = [
    {
        chave: "CodTipoProduto",
        valor: "ID"
    },
    {
        chave: "Descricao",
        valor: "Descricao",
        propriedades: {
            alinhamento: "left"
        }
    },
    {
        chave: "DataAlteracao",
        valor: "Alterado Em"
    },
    {
        chave: "QtdProdutosVinculado",
        valor: "Qtd. Produtos Vinculado"
    },
    {
        chave: "acoes",
        valor: "Acões"
    },
];