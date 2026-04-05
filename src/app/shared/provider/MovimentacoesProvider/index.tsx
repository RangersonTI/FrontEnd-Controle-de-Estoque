import { createContext, useState, type ReactNode } from "react";
import type { IFormularioMovimentacao } from "./interface";
import { Obter } from "../../Utils/Obter";

interface IMovimentacoesProviderProps {
    children: ReactNode;
}

interface IMovimentacoesContextData {
    formularioMovimentacao: IFormularioMovimentacao;
    setFormularioMovimentacao: React.Dispatch<
        React.SetStateAction<IFormularioMovimentacao>
    >;
}

const MovimentacoesContext = createContext({} as IMovimentacoesContextData);

const DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO:IFormularioMovimentacao = {
    codMovimentacaoEntrada: null,
    codProd: 0,
    dataArmazenagem: Obter.dataAtual(),
    dataSaida: Obter.dataAtual(),
    observacao: "",
    qtdAMovimentar: 0,
    tipoMovimentacao: 1
}

function MovimentacoesProvider({
    children
}: IMovimentacoesProviderProps) {

    const [
        formularioMovimentacao,
        setFormularioMovimentacao
    ] = useState<IFormularioMovimentacao>(DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO);

    console.log(Obter.dataAtual(),)

    return (
        <MovimentacoesContext
            value={{
                formularioMovimentacao,
                setFormularioMovimentacao,
            }}
        >
            { children }
        </MovimentacoesContext>
    )
}

export { MovimentacoesProvider, MovimentacoesContext, DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO }