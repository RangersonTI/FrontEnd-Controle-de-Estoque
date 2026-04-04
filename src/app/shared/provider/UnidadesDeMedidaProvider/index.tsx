import { createContext, useState, type ReactNode } from "react";
import type { IUnidadesDeMedidaData } from "../../services/interfaces/UnidadesDeMedida";
import type { IFormularioUnidadesDeMedidaState } from "./interface";
import { UnidadesDeMedidaController } from "../../services/UnidadesDeMedidaController";

interface IUnidadesDeMedidaProviderProps {
    children: ReactNode;
};

interface IUnidadesDeMedidaContextData{
    unidadesDeMedida: IUnidadesDeMedidaData[];
    setUnidadesDeMedida: React.Dispatch<
        React.SetStateAction<IUnidadesDeMedidaData[]>
    >;

    unidadesDeMedidaSelecionada: IUnidadesDeMedidaData;
    setUnidadesDeMedidaSelecionada: React.Dispatch<
        React.SetStateAction<IUnidadesDeMedidaData>
    >;

    formularioUnMedida: IFormularioUnidadesDeMedidaState;
    setFormularioUnMedida: React.Dispatch<
        React.SetStateAction<IFormularioUnidadesDeMedidaState>
    >;

    handleObterUnidadeDeMedida: () => Promise<void>;
}


const UnidadesDeMedidaContext = createContext({} as IUnidadesDeMedidaContextData);

function UnidadesDeMedidaProvider({
    children
}: IUnidadesDeMedidaProviderProps) {

    const [
        unidadesDeMedida,
        setUnidadesDeMedida
    ] = useState<IUnidadesDeMedidaData[]>([]);

    const [
        unidadesDeMedidaSelecionada,
        setUnidadesDeMedidaSelecionada
    ] = useState({} as IUnidadesDeMedidaData);

    const [
        formularioUnMedida,
        setFormularioUnMedida,
    ] = useState({} as IFormularioUnidadesDeMedidaState);

    const handleObterUnidadeDeMedida = async() => {
        try {
            const unMedidas = await UnidadesDeMedidaController.Obter();

            setUnidadesDeMedida(unMedidas);
        } 
        catch (error) {

        }
    }

    return (
        <UnidadesDeMedidaContext
            value={{
                unidadesDeMedida,
                setUnidadesDeMedida,

                formularioUnMedida,
                setFormularioUnMedida,

                unidadesDeMedidaSelecionada,
                setUnidadesDeMedidaSelecionada,

                handleObterUnidadeDeMedida,
            }}
        >
            { children }
        </UnidadesDeMedidaContext>
    );
}

export { UnidadesDeMedidaProvider, UnidadesDeMedidaContext }