import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IMarcasData } from "../../interfaces/Marcas";

export interface IFormularioMarcaBodyData{
    Descricao: string;
}

export const Cadastrar = async(body: IFormularioMarcaBodyData): Promise<IMarcasData> => {
    try {
        const { data } = await Api.post(`/marcas`, body);

        return data;
    }
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível cadastrar esta marca!"
        );    
    }
}