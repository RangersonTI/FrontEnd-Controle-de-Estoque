import { useEffect, useState, type ChangeEvent } from "react";
import type { IUnidadesDeMedidaData } from "../../../shared/services/interfaces/UnidadesDeMedida";
import { UnidadesDeMedidaController } from "../../../shared/services/UnidadesDeMedidaController";

export const useUnidadeDeMedida = () => {

    const [
        filtro,
        setFiltro
    ] = useState("");

    const [
        unidadesDeMedida,
        setUnidadesDeMedida
    ] = useState<IUnidadesDeMedidaData[]>([]);

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        if(name === "filtro")
            return setFiltro(value);
    }

    const handleObterUnidadeDeMedida = async() => {
        try {
            const unMedidas = await UnidadesDeMedidaController.Obter();

            setUnidadesDeMedida(unMedidas);
        } 
        catch (error) {

        }
    }

    useEffect(
        () => {
            handleObterUnidadeDeMedida();
        },[]
    );

    return {
        STATE: {
            filtro,
            setFiltro,

            unidadesDeMedida,
            setUnidadesDeMedida,
        },
        handleChangeValue
    };
}