import React, { createContext, useState, type ReactNode } from "react";
import type { ITiposDeProdutoData } from "../../services/interfaces/TiposDeProduto";
import type { IFormularioTiposDeProdutoState } from "./interface";
import { TiposDeProdutosController } from "../../services/TiposDeProdutosController";
import { Notificar } from "../../Utils/Notificar";

interface ITiposDeprodutoProviderProps {
    children: ReactNode;
}
interface ITiposDeProdutoContextData {
    tiposDeProduto: ITiposDeProdutoData[];
    setTiposDeProduto: React.Dispatch<
        React.SetStateAction<ITiposDeProdutoData[]>
    >;

    tiposDeProdutoSelecionado: ITiposDeProdutoData;
    setTiposDeProdutoSelecionado: React.Dispatch<
        React.SetStateAction<ITiposDeProdutoData>
    >;

    formularioTiposDeProduto: IFormularioTiposDeProdutoState;
    setFormularioTiposDeProduto: React.Dispatch<
        React.SetStateAction<IFormularioTiposDeProdutoState>
    >;

    handleObterTiposDeProduto: () => Promise<void>;
}

const TiposDeProdutoContext = createContext({} as ITiposDeProdutoContextData);

function TiposDeProdutoProvider({
    children
}: ITiposDeprodutoProviderProps) {

    const [
        tiposDeProduto,
        setTiposDeProduto,
    ] = useState<ITiposDeProdutoData[]>([]);

    const [
        tiposDeProdutoSelecionado,
        setTiposDeProdutoSelecionado
    ] = useState({} as ITiposDeProdutoData);

    const [
        formularioTiposDeProduto,
        setFormularioTiposDeProduto
    ] = useState({} as IFormularioTiposDeProdutoState);

    const handleObterTiposDeProduto = async() => {
        try {
            const tiposDeProduto = await TiposDeProdutosController.Obter();

            setTiposDeProduto(tiposDeProduto);
        }
        catch (error) {
            Notificar.ErrorApi(error);
        }
    }

    return(
        <TiposDeProdutoContext
            value={{
                tiposDeProduto,
                setTiposDeProduto,

                tiposDeProdutoSelecionado,
                setTiposDeProdutoSelecionado,

                formularioTiposDeProduto,
                setFormularioTiposDeProduto,

                handleObterTiposDeProduto
            }}
        >
            { children }
        </TiposDeProdutoContext>
    );
}

export { TiposDeProdutoProvider, TiposDeProdutoContext }