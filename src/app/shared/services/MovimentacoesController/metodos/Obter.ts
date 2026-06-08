import { Api } from "../../Api";
import { ApiException } from "../../ApiException";

export interface IMovimentacoesEstoqueData {
    CodMovimentacao: number;
    CodProd: number;
    Produto: string;
    CodVariacaoProduto: number;
    Variacao: string;
    DataMovimentacao: string;
    DataArmazenagem: string | null;
    DataSaida: string | null,
    TipoMovimentacao: string;
    QtdMovimentacao: number,
    QtdRestante: number | null;
    TipoDeProduto: string;
}

export const Obter = async(): Promise<IMovimentacoesEstoqueData[]> => {
    try {
        const { data } = await Api.get(`/movimentacoes`);

        return data;
    } 
    catch (error) {
        throw new ApiException(error, "Não foi possível obter as movimentações realizadas!");    
    }
}