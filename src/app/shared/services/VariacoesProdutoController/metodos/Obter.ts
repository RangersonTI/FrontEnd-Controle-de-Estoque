import { Api } from "../../Api";
import { ApiException } from "../../ApiException";
import type { IVariacoesProdutoData } from "../../interfaces/VariacoesProduto";

export const Obter = async (CodProd: number): Promise<IVariacoesProdutoData[]> => {
    try {
        const { data } = await Api.get(`/variacoes-produto`, {
            params: { CodProd }
        });

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            `Não foi possível obter as variações do produto CodProd. ${CodProd}`
        );
    }
}