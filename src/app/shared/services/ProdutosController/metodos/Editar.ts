import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IProdutosData } from "../../interfaces/Produtos";
import type { ICadastroProdutoProps } from "./Cadastrar";

interface IEditarProdutoProps extends ICadastroProdutoProps {
    CodProd: number;
}

export const Editar = async(body: IEditarProdutoProps): Promise<IProdutosData> => {
    try {
        const { data } = await Api.put(`/produtos`, body);

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível editar este produto!"
        );    
    }
}