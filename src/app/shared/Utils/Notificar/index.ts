import { toast } from "react-toastify";
import type { ApiException } from "../../services/ApiException";

const ErrorApi = (error: any) => {
    return toast.error((error as ApiException).mensagem);
}

const Sucesso = (mensagem: string) => toast.success(mensagem);

export const Notificar = {
    ErrorApi,Sucesso
}