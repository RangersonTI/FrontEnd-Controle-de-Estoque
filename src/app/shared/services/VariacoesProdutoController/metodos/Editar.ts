import { Api } from "../../Api";
import { ApiException } from "../../ApiException";
import type { IVariacoesProdutoData } from "../../interfaces/VariacoesProduto";
import type { IVariacoesProdutoProps } from "./Cadastrar";

interface IEditarVariacaoProdutoBody extends IVariacoesProdutoProps{
    Sequencial: number;
}

export const Editar = async(body: IEditarVariacaoProdutoBody): Promise<IVariacoesProdutoData> => {
    try {
        const { data } = await Api.put(
            `/variacoes-produto`,
            body        
        );

        return data;
    }
    catch (error) {
        throw new ApiException(error, "Não foi possível editar a variação do produto.");    
}
}
