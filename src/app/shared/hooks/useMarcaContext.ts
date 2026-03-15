import { useContext } from "react";
import { MarcasContext } from "../provider/MarcasProvider/index.tsx";

export const useMarcaContext = () => {
    const context = useContext(MarcasContext);

    return context;
}