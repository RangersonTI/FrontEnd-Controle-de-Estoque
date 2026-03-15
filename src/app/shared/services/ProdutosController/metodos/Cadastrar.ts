import { Api } from "../../Api";
import { ApiException } from "../../ApiException"

export const Cadastrar = async() => {
    try {
        await Api.post(`/`);
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível cadastrar esta marca!"
        );    
    }
}