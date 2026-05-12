import { Api } from "../../Api";
import { ApiException } from "../../ApiException"


export interface IVariacoesProdutoProps{
  Descricao: string;
  CodProd: number;
}

export const Cadastrar = async(body: IVariacoesProdutoProps) => {
    try {
       await  Api.post(`/variacoes-produto`, body);
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível cadastrar a(s) variação(ões) para o produto!"
        );
    }
}