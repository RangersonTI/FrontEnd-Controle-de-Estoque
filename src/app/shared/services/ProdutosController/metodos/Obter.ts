import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IProdutosData } from "../../interfaces/Produtos";

interface IObterProdutosProps {
    Descricao?: string;
    Marca?: string;
    TipoProduto?: string;
    UnidadeDeMedida?: string;
}

export const Obter = async(query?: IObterProdutosProps): Promise<IProdutosData[]> => {
    try {
        const { data } = await Api.get(`/produtos`,
            {
                params: query,
            }
        );

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível obter os produtos!"
        );    
    }
}