import type { ITabelaPropriedadesProps } from "../../../shared/global/interface"

export const TabelaProdutos: ITabelaPropriedadesProps[] = [
    {
        chave: "CodProd",
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
        chave: "UnidadeDeMedida",
        valor: "U. Medida"
    },
    {
        chave: "TipoProduto",
        valor: "Tipo Produto",
        propriedades: {
            alinhamento: "left"
        }
    },
    {
        chave: "Marca",
        valor: "Marca",
        propriedades: {
            alinhamento: "left"
        }
    },
    {
        chave: "",
        valor: "Qtd. Atual"
    },
    {
        chave: "",
        valor: "Movimentação"
    },
    {
        chave: "acoes",
        valor: "Ações"
    },
];