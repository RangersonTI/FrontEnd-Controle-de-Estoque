
interface IMensagemErroApiProps {
    mensagem: string;
}

const MensagemErroApi = (error: any): error is IMensagemErroApiProps =>
    error && "mensagem" in error && typeof error.mensagem === "string";

export const Instancia = {
    MensagemErroApi
}