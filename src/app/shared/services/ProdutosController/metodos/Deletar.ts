import { Api } from "../../Api";
import { ApiException } from "../../ApiException"

export const Deletar = async() => {
    try {
        await Api.delete(`/`);
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível deletar esta marca!"
        );    
    }
}