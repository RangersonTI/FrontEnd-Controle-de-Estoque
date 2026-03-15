import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { ITiposDeProdutoData } from "../../interfaces/TiposDeProduto";

interface IObterTiposDeProdutoProps {
    Descricao?: string;
    CodTipoDeProduto?: number;
}

export const Obter = async(query?: IObterTiposDeProdutoProps): Promise<ITiposDeProdutoData[]> => {
    try {
        const { data } = await Api.get(`/tipos-de-produto`,
            {
                params: query,
            }
        );

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível obter os tipos de produtos!"
        );    
    }
}