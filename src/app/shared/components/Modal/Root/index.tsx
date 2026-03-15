import type { ReactNode } from "react";
import { FundoModal, RootModalStyle } from "../style";

interface IModalRootProps {
    children: ReactNode;
}

export const ModalRoot = ({
    children
}: IModalRootProps) => {
    return(
        <FundoModal>
            <RootModalStyle>
                { children }
            </RootModalStyle>
        </FundoModal>
    );
}