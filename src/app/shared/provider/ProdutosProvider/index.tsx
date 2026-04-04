import { createContext, useState, type ReactNode } from "react";
import type { IProdutosData } from "../../services/interfaces/Produtos";
import type { IFormularioProduto } from "./interfaces";

export interface IProdutosProviderProps {
    children: ReactNode;
}

export interface IProdutosContextData {
    produtos: IProdutosData[];
    setProdutos: React.Dispatch<
        React.SetStateAction<IProdutosData[]>
    >;

    formularioProduto: IFormularioProduto;
    setFormularioProduto: React.Dispatch<
        React.SetStateAction<IFormularioProduto>
    >;

    produtoSelecionado: IProdutosData;
    setProdutoSelecionado: React.Dispatch<
        React.SetStateAction<IProdutosData>
    >;
}

const ProdutosContext = createContext({} as IProdutosContextData);

function ProdutosProvider({
    children
}: IProdutosProviderProps) {

    const [
        produtos,
        setProdutos,
    ] = useState<IProdutosData[]>([]);

    const [
        formularioProduto,
        setFormularioProduto,
    ] = useState({} as IFormularioProduto);

    const [
        produtoSelecionado,
        setProdutoSelecionado,
    ] = useState({} as IProdutosData);

    return(
        <ProdutosContext
            value={{
                produtos,
                setProdutos,

                formularioProduto,
                setFormularioProduto,

                produtoSelecionado,
                setProdutoSelecionado,
            }}
        >
            { children }
        </ProdutosContext>
    );
}

export { ProdutosProvider, ProdutosContext }