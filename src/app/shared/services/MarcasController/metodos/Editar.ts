import { Api } from "../../Api";
import { ApiException } from "../../ApiException"
import type { IMarcasData } from "../../interfaces/Marcas";
import type { IFormularioMarcaBodyData } from "./Cadastrar";

export const Editar = async(body: IFormularioMarcaBodyData): Promise<IMarcasData> => {
    try {
        const { data } = await Api.put(`/marcas`, body);

        return data;
    }
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível editar esta marca!"
        );    
    }
}