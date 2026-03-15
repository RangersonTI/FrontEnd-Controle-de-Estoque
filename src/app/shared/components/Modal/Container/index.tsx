import type { ReactNode } from "react";
import { ContainerModalStyle } from "../style";

interface IContainerModalProps {
    children:  ReactNode;
    gapEntreItens?: string;
}

export const ContainerModal = ({
    children,
    gapEntreItens
}: IContainerModalProps) => {
    return(
        <ContainerModalStyle $gapEntreItens={gapEntreItens}>
            { children }
        </ContainerModalStyle>
    );
}