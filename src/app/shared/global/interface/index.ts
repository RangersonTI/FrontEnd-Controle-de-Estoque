
interface IColunasTabelaProps {
    alinhamento?: "left" | "right" | "center"
}

export interface ITabelaPropriedadesProps {
    chave: string;
    valor: string;
    propriedades?: IColunasTabelaProps
}

export interface ObjetoMapeado {
    [key: string] : any
}