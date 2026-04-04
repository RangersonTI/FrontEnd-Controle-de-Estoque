import { Api } from "../../Api";
import { ApiException } from "../../ApiException";
import type { ITiposDeProdutoData } from "../../interfaces/TiposDeProduto";

export interface IBodyCadastroTipoDeProdutoData {
    Descricao:string
}

export const Cadastrar = async(body: IBodyCadastroTipoDeProdutoData): Promise<ITiposDeProdutoData> => {
    try {
        const { data } = await Api.post(`/tipos-de-produto`, body);

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível cadastrar este tipo de produto!"
        );    
    }
}