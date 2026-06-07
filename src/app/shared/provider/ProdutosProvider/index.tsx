import React, { createContext, useState, type ReactNode } from "react";
import type { IProdutosData } from "../../services/interfaces/Produtos";
import type { IFormularioProduto, IFormularioVariacoesProduto } from "./interfaces";
import { ProdutosController } from "../../services/ProdutosController";
import { Notificar } from "../../Utils/Notificar";
import { VariacoesProdutoController } from "../../services/VariacoesProdutoController";
import type { IVariacoesProdutoData } from "../../services/interfaces/VariacoesProduto";

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

    formularioVariacoesProduto: IFormularioVariacoesProduto[];
    setFormularioVariacoesProduto: React.Dispatch<
        React.SetStateAction<IFormularioVariacoesProduto[]>
    >;

    variacoesPorProduto: IVariacoesProdutoData[];
    setVariacoesPorProduto: React.Dispatch<
        React.SetStateAction<IVariacoesProdutoData[]>
    >;

    handleObterProdutosCadastrados: () => Promise<void>;
    handleObterVariacoesProdutoPeloCodProd: (codProd?: number) => Promise<IVariacoesProdutoData[]>;
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
        formularioVariacoesProduto,
        setFormularioVariacoesProduto,
    ] = useState<IFormularioVariacoesProduto[]>([]);

    const [
        produtoSelecionado,
        setProdutoSelecionado,
    ] = useState({} as IProdutosData);

    
    const [
        variacoesPorProduto,
        setVariacoesPorProduto
    ] = useState<IVariacoesProdutoData[]>([]);

    const handleObterProdutosCadastrados = async() => {
        try {
            const produtos = await ProdutosController.Obter();

            setProdutos(produtos);
        }
        catch (error) {
            Notificar.ErrorApi(error);
        }
    }

    const handleObterVariacoesProdutoPeloCodProd = async (codProd?: number) => {
        try {
            const variacoes = await VariacoesProdutoController.Obter(
                codProd || produtoSelecionado.CodProd
            ); 

            setVariacoesPorProduto(variacoes);

            return variacoes;
        }
        catch (error) {
            Notificar.ErrorApi(error);
            return [];
        }
    }

    return(
        <ProdutosContext
            value={{
                produtos,
                setProdutos,

                formularioProduto,
                setFormularioProduto,

                produtoSelecionado,
                setProdutoSelecionado,

                formularioVariacoesProduto,
                setFormularioVariacoesProduto,

                variacoesPorProduto,
                setVariacoesPorProduto,

                handleObterProdutosCadastrados,
                handleObterVariacoesProdutoPeloCodProd,
            }}
        >
            { children }
        </ProdutosContext>
    );
}

export { ProdutosProvider, ProdutosContext }