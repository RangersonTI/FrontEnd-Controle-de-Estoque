import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IProdutosData } from "../../interfaces/Produtos";

export interface ICadastroProdutoProps {
    Descricao: string;
    CodMarca: number;
    CodTipoProduto: number;
    CodUnidadeDeMedida: number;
}

export const Cadastrar = async(body: ICadastroProdutoProps): Promise<IProdutosData> => {
    try {
        const { data } = await Api.post(`/produtos`, body);

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível cadastrar este produto!"
        );    
    }
}