import { useContext } from "react"
import { TiposDeProdutoContext } from "../provider/TiposDeProdutoProvider"

export const useTiposDeProdutoContext = () => {

    const context = useContext(TiposDeProdutoContext);

    return context;
}