import { Api } from "../../Api";
import { ApiException } from "../../ApiException"

export const Editar = async() => {
    try {
        await Api.put(`/`);
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível editar esta marca!"
        );    
    }
}