import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IUnidadesDeMedidaData } from "../../interfaces/UnidadesDeMedida";
import type { ICadastroUnidadeDeMedidaProps } from "./Cadastrar";
3

interface IEdicaoUnidadeDeMedidProps extends ICadastroUnidadeDeMedidaProps {
    CodUnidadeDeMedida: number;
}

export const Editar = async(body: IEdicaoUnidadeDeMedidProps): Promise<IUnidadesDeMedidaData> => {
    try {
        const { data } = await Api.put(`/unidades-de-medida`, body);

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível editar esta marca!"
        );    
    }
}