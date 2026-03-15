import React, { createContext, useState, type ReactNode } from "react";

interface IModalProviderProps {
    children: ReactNode;
}

interface IModalContextDataData {
    modaisAberto: string[];
    setModaisAberto: React.Dispatch<
        React.SetStateAction<string[]>
    >;
}

const ModalContext = createContext({} as IModalContextDataData);

function ModalProvider({
    children
}: IModalProviderProps) {

    const [
        modaisAberto,
        setModaisAberto,
    ] = useState<string[]>([]);

    return(
        <ModalContext
            value={{
                modaisAberto,
                setModaisAberto,
            }}
        >
            { children }
        </ModalContext>
    );
};

export { ModalContext, ModalProvider }