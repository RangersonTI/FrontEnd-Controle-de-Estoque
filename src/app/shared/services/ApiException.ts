import { isAxiosError, type HttpStatusCode } from "axios";
import { Instancia } from "../Utils/Instancia";

export class ApiException {
    
    public mensagem: string = "";

    public status: HttpStatusCode = 500;
    
    constructor(error: any, mensagemPersonalizada:string) {
        if(isAxiosError(error)) {

            const response = error.response;

            if(
                response?.status === 400 ||
                response?.status === 403 ||
                response?.status === 404 ||
                response?.status === 405 ||
                response?.status === 415 ||
                response?.status === 409 ||
                response?.status === 422 ||
                response?.status === 424 ||
                response?.status === 500
            ) {
                this.status = response.status;
                
                if(Instancia.MensagemErroApi(error.response?.data)){
                    this.mensagem = error.response.data.mensagem;
                }
                else {
                    this.mensagem = mensagemPersonalizada;
                }
            }
            else if(response?.status === 401) {
                this.status = response.status;
            }
        }
        else {
            this.status = 500;
            this.mensagem = mensagemPersonalizada;
        }
    }
}