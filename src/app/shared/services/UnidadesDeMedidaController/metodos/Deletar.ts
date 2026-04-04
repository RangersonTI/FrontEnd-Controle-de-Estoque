import { Api } from "../../Api";
import { ApiException } from "../../ApiException"

export const Deletar = async(CodUnidadeDeMedida: number) => {
    try {
        await Api.delete(`/unidades-de-medida`, {
            params: { CodUnidadeDeMedida }
        });
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível deletar esta marca!"
        );    
    }
}