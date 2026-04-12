import type { ITabelaPropriedadesProps } from "../../../shared/global/interface"

export const TabelaUnidadesDeMedida: ITabelaPropriedadesProps[] = [
    {
        chave: "CodUnidadeDeMedida",
        valor: "ID"
    },
    {
        chave: "Descricao",
        valor: "Descrição",
        propriedades: {
            alinhamento: "left"
        }
    },
    {
        chave: "Sigla",
        valor: "Sigla"
    },
    {
        chave: "QtdProdutoVinculado",
        valor: "Qtd.Produto/UnM"
    },
    {
        chave: "DataAlteracao",
        valor: "Alterado Em:"
    },
    {
        chave: "acoes",
        valor: "Açoes"
    }
];