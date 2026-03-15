import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IMarcasData } from "../../interfaces/Marcas";

interface IObterMarcasProps {
    descricao?: string;
    codMarca?: number;
}

export const Obter = async(query?: IObterMarcasProps): Promise<IMarcasData[]> => {
    try {
        const { data } = await Api.get(`/marcas`,
            {
                params: query,
            }
        );

        return data;
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível obter as marcas!"
        );    
    }
}