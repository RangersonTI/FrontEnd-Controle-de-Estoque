import { useContext } from "react"
import { ProdutosContext } from "../provider/ProdutosProvider";

export const useProdutosContext = () => {
    const context = useContext(ProdutosContext);

    return context;
}