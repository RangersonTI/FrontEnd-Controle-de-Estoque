import { Api } from "../../Api";
import { ApiException } from "../../ApiException"

export const Deletar = async(CodMarca: number) => {
    try {
        await Api.delete(`/marcas`, {
            params: {CodMarca}
        });
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível deletar esta marca!"
        );    
    }
}