import { useState } from "react";

export const useInput = () => {

    const [
        selectEstaFocada,
        setSelectEstaFocada
    ] = useState(false);

    const handleValueEhValido = (value: string | null) => {
        return value !== null && value !== ""
    }

    return {
        STATE: {
            selectEstaFocada,
            setSelectEstaFocada,
        },
        handleValueEhValido
    };
}