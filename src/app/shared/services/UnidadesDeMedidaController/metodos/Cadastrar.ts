import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IUnidadesDeMedidaData } from "../../interfaces/UnidadesDeMedida";

export interface ICadastroUnidadeDeMedidaProps {
    Descricao: string;
    Sigla: string;
}

export const Cadastrar = async(body: ICadastroUnidadeDeMedidaProps): Promise<IUnidadesDeMedidaData> => {
    try {
        const { data }= await Api.post(`/unidades-de-medida`, body);

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível cadastrar esta marca!"
        );    
    }
}