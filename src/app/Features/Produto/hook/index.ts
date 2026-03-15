import { useEffect, useEffectEvent, useState, type ChangeEvent } from "react";
import { ProdutosController } from "../../../shared/services/ProdutosController";
import type { IProdutosData } from "../../../shared/services/interfaces/Produtos";

export const useMarca = () => {
    
    const [
        filtro,
        setFiltro,
    ] = useState("");

    const [
        produtos,
        setProdutos,
    ] = useState<IProdutosData[]>([]);

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        if(name === "filtro")
            return setFiltro(value);
    }

    const handleObterProdutosCadastrados = async() => {
        try {
            const produtos = await ProdutosController.Obter();

            setProdutos(produtos);
        } 
        catch (error) {

        }
    }

    useEffect(
        () => {
            handleObterProdutosCadastrados();
        },[]
    );
    
    return {
        STATE: {
            filtro,
            setFiltro,

            produtos,
            setProdutos,
        },
        handleChangeValue
    };
}