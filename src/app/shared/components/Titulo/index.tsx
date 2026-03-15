import type { FC } from "react";
import { TitutoStyled } from "./style";

export const Titulo: FC<{descricao: string}> = ({
    descricao
}) => {
    return(
        <TitutoStyled>
            { descricao }
        </TitutoStyled>
    );
}