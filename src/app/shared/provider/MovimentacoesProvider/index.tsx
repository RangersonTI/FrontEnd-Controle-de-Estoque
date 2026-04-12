import { createContext, useState, type ReactNode } from "react";
import type { IFormularioMovimentacao } from "./interface";
import { Obter } from "../../Utils/Obter";
import type { IMovimentacoesEstoqueData } from "../../services/MovimentacoesController/metodos/Obter";

interface IMovimentacoesProviderProps {
    children: ReactNode;
}

interface IMovimentacoesContextData {
    formularioMovimentacao: IFormularioMovimentacao;
    setFormularioMovimentacao: React.Dispatch<
        React.SetStateAction<IFormularioMovimentacao>
    >;

    movimentacoesEstoque: IMovimentacoesEstoqueData[];
    setMovimentacoesEstoque: React.Dispatch<
        React.SetStateAction<IMovimentacoesEstoqueData[]>
    >;
}

const MovimentacoesContext = createContext({} as IMovimentacoesContextData);

const DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO:IFormularioMovimentacao = {
    codMovimentacaoEntrada: "",
    codProd: "",
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
        movimentacoesEstoque,
        setMovimentacoesEstoque,
    ] = useState<IMovimentacoesEstoqueData[]>([]);

    const [
        formularioMovimentacao,
        setFormularioMovimentacao
    ] = useState<IFormularioMovimentacao>(DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO);

    return (
        <MovimentacoesContext
            value={{
                formularioMovimentacao,
                setFormularioMovimentacao,

                movimentacoesEstoque,
                setMovimentacoesEstoque,
            }}
        >
            { children }
        </MovimentacoesContext>
    )
}

export { MovimentacoesProvider, MovimentacoesContext, DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO }