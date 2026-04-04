import { Api } from "../../Api";
import { ApiException } from "../../ApiException";

export const Deletar = async(CodTipoDeProduto: number) => {
    try {
        await Api.delete(`/tipos-de-produto`, {
            params: { CodTipoDeProduto }
        });
    } 
    catch (error) {
        throw new ApiException(
            error,
            "Não foi possível deletar este tipo de produto!"
        );    
    }
}