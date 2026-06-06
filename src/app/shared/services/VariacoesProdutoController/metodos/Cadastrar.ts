import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IVariacoesProdutoData } from "../../interfaces/VariacoesProduto";


export interface IVariacoesProdutoProps{
  Descricao: string;
  CodProd: number;
}

export const Cadastrar = async(body: IVariacoesProdutoProps): Promise<IVariacoesProdutoData> => {
    try {
       const { data } = await  Api.post(`/variacoes-produto`, body);
       
       return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível cadastrar a(s) variação(ões) para o produto!"
        );
    }
}