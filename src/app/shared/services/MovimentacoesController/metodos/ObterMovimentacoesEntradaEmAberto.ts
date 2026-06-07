import { ApiException } from "../../ApiException"
import { Api } from "../../Api";
import type { IMovimentacoesEstoqueData } from "./Obter";

export interface IMovimentacoesEntradaEmAbertoData
    extends Omit<IMovimentacoesEstoqueData, "Produto" | "DataSaida" | "TipoMovimentacao" | "TipoDeProduto"> { }


export const ObterMovimentacoesEntradaEmAberto = async (
    codProd: number,
    codVariacao: number
): Promise<IMovimentacoesEntradaEmAbertoData[]> => {
    try {
        const { data } = await Api.get(
            `/movimentacoes/obter-movimentacoes-entrada-em-aberto`,
            {
                params: {
                    CodProd: codProd,
                    CodVariacaoProduto: codVariacao
                }
            }
        );

        return data;
    }
    catch (error) {
        throw new ApiException(error, "Não foi possível obter as movimentações em aberto!");
    }
}