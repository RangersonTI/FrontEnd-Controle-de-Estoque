import { useState } from "react";

export const useInput = () => {

    const [
        inputEstaFocada,
        setInputEstaFocada
    ] = useState(false);

    const handleValueEhValido = (value: string | null) => {
        return value !== null && value !== ""
    }

    return {
        STATE: {
            inputEstaFocada,
            setInputEstaFocada,
        },
        handleValueEhValido
    };
}