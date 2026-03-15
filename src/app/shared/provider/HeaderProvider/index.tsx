import { createContext, useState, type ReactNode } from "react";
import type { TBotaoPressionado, TMenuItemPressionado } from "../../global/types";

interface IPosicaoMenuExpansivo {
    x: number;
    y: number;
    tamanhoTotal: number;
}

interface IHeaderContextData {
    tipoBotaoPressionado: TBotaoPressionado;
    setTipoBotaoPressionado: React.Dispatch<
        React.SetStateAction<TBotaoPressionado>
    >;

    tipoMenuItemPressionado: TMenuItemPressionado;
    setTipoMenuItemPressionado: React.Dispatch<
        React.SetStateAction<TMenuItemPressionado>
    >;

    posicaoMenuExpansivo: IPosicaoMenuExpansivo;
    setPosicaoMenuExpansivo: React.Dispatch<
        React.SetStateAction<IPosicaoMenuExpansivo>
    >;
}

interface IHeaderProviderProps{
    children?: ReactNode;
}

const HeaderContext = createContext({} as IHeaderContextData);

function HeaderProvider({
    children
}: IHeaderProviderProps) {

    const [
        tipoBotaoPressionado,
        setTipoBotaoPressionado,
    ] = useState<TBotaoPressionado>(null);

    const [
        tipoMenuItemPressionado,
        setTipoMenuItemPressionado,
    ] = useState<TMenuItemPressionado>(null);

    const [
        posicaoMenuExpansivo,
        setPosicaoMenuExpansivo
    ] = useState<IPosicaoMenuExpansivo>(
        {x: 0, y: 0, tamanhoTotal:0}
    );

    return(
        <HeaderContext.Provider
            value={{
                tipoBotaoPressionado,
                setTipoBotaoPressionado,

                posicaoMenuExpansivo,
                setPosicaoMenuExpansivo,

                tipoMenuItemPressionado,
                setTipoMenuItemPressionado,
            }}
        >
            { children }
        </HeaderContext.Provider>
    );
}

export { HeaderProvider, HeaderContext };