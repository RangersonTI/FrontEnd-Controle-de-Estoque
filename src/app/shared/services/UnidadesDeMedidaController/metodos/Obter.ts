import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IUnidadesDeMedidaData } from "../../interfaces/UnidadesDeMedida";

interface IObterUnidadesDeMedidaProps {
    Filtro?: string;
    CodUnidadeDeMedida?: number;
}

export const Obter = async(query?: IObterUnidadesDeMedidaProps): Promise<IUnidadesDeMedidaData[]> => {
    try {
        const { data } = await Api.get(`/unidades-de-medida`,
            {
                params: query,
            }
        );

        return data;
    }
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível obter as unidades de medida cadastradas!"
        );    
    }
}