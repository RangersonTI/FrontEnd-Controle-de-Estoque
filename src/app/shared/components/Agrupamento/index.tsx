import type { FC, ReactNode } from "react";
import { AgrupamentoStyled } from "./style";

export const Agrupamento: FC<{children: ReactNode}> = ({children}) => 
    <AgrupamentoStyled>
        { children }
    </AgrupamentoStyled>