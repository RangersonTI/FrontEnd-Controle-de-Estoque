import { useContext } from "react"
import { UnidadesDeMedidaContext } from "../provider/UnidadesDeMedidaProvider";

export const useUnidadesDeMedidaContext = () => {

    const context = useContext(UnidadesDeMedidaContext);

    return context;
}