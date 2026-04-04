import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { ITiposDeProdutoData } from "../../interfaces/TiposDeProduto";
import type { IBodyCadastroTipoDeProdutoData } from "./Cadastrar";

interface IBodyEdicaoTipoDeProdutoData 
    extends IBodyCadastroTipoDeProdutoData {
        CodTipoDeProduto: number;
}

export const Editar = async(body: IBodyEdicaoTipoDeProdutoData): Promise<ITiposDeProdutoData> => {
    try {
        const { data } = await Api.put(`/tipos-de-produto`, body);

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível editar esta marca!"
        );    
    }
}