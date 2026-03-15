import { useEffect, useState, type ChangeEvent } from "react";
import type { ITiposDeProdutoData } from "../../../shared/services/interfaces/TiposDeProduto";
import { TiposDeProdutosController } from "../../../shared/services/TiposDeProdutosController";

export const useTipoDeProduto = () => {
    
    const [
        filtro,
        setFiltro
    ] = useState("");

    const[
        tiposDeProduto,
        setTiposDeProduto,
    ] = useState<ITiposDeProdutoData[]>([]);

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if(name === "filtro")
            return setFiltro(value);
    }

    const handleObterTiposDeProduto = async() => {
        try {
            const tiposDeProduto = await TiposDeProdutosController.Obter();

            setTiposDeProduto(tiposDeProduto);
        }
        catch (error) {

        }
    }

    useEffect(
        () => {
            handleObterTiposDeProduto();
        },[]
    );
    
    return {
        STATE: {
            filtro,
            setFiltro,

            tiposDeProduto,
            setTiposDeProduto,
        },
        handleChangeValue,
        handleObterTiposDeProduto
    };
}