import type { ITabelaPropriedadesProps } from "../../../shared/global/interface"

export const TabelaMarcas: ITabelaPropriedadesProps[] = [
    {
        chave: "CodMarca",
        valor: "Id"
    },
    {
        chave: "Descricao",
        valor: "Descrição",
        propriedades: {
            alinhamento: "left"
        }
    },
    {
        chave: "DataUltimaAlteracao",
        valor: "Alterado Em"
    },
    {
        chave: "QtdProdutoVinculados",
        valor: "Qtd. Produtos Vinculado"
    },
    {
        chave: "acoes",
        valor: "Acões"
    },
]