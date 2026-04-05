import { useContext } from "react"
import { MovimentacoesContext } from "../provider/MovimentacoesProvider";

export const useMovimentacoesContext = () => {
    const context = useContext(MovimentacoesContext);

    return context;
}