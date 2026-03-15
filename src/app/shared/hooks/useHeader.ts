import { useContext } from "react";
import { HeaderContext } from "../provider/HeaderProvider";

export const useHeader = () => {
    const context = useContext(HeaderContext);

    if (!context) {
        throw new Error("useHeader deve ser usado dentro de HeaderProvider");
    }

    return context;
}