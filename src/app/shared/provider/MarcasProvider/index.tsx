import { createContext, useState, type ReactNode } from "react";
import type { IMarcasData } from "../../services/interfaces/Marcas";
import type { IFormularioMarcaState } from "./interface";
import { MarcasController } from "../../services/MarcasController";

interface IMarcaProviderProps {
    children: ReactNode;
}

interface IMarcasContextData {
    formularioMarca: IFormularioMarcaState;
    setFormularioMarca: React.Dispatch<
        React.SetStateAction<IFormularioMarcaState>
    >;

    marcas: IMarcasData[];
    setMarcas: React.Dispatch<
        React.SetStateAction<IMarcasData[]>
    >;

    marcaSelecionada: IMarcasData;
    setMarcaSelecionada: React.Dispatch<
        React.SetStateAction<IMarcasData>
    >;

    handleObterMarcasCadastradas: () => Promise<void>;
}

const MarcasContext = createContext({} as IMarcasContextData);

function MarcasProvider({
    children
}: IMarcaProviderProps) {

    const [
        formularioMarca,
        setFormularioMarca
    ] = useState({} as IFormularioMarcaState);

    const [
        marcas,
        setMarcas
    ] = useState<IMarcasData[]>([]);

    const [
        marcaSelecionada,
        setMarcaSelecionada
    ] = useState({} as IMarcasData);

    const handleObterMarcasCadastradas = async() => {
        try {
            const marcas = await MarcasController.Obter();

            setMarcas(marcas);
        } 
        catch (error) {

        }
    }

    return(
        <MarcasContext
            value={{
                formularioMarca,
                setFormularioMarca,

                marcas,
                setMarcas,

                marcaSelecionada,
                setMarcaSelecionada,

                handleObterMarcasCadastradas,
            }}
        >
            { children }
        </MarcasContext>
    );
}

export { MarcasProvider, MarcasContext }