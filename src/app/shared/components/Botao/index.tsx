import type { ElementType, HTMLAttributes } from "react";
import type { TTipoBotao } from "./interface";
import { BotaoStyled } from "./style";
import { Loading } from "../Loading";

interface IBotaoProps extends HTMLAttributes<HTMLButtonElement>{
    tipoBotao?: TTipoBotao;
    descricao?: string;
    isLoading?: boolean;
    Icone?: ElementType;
}

export const Botao = ({
    tipoBotao = "normal",
    Icone,
    descricao,
    isLoading = false,
    ...rest
}: IBotaoProps) => {
    return(
        <BotaoStyled
            $tipoBotao={tipoBotao}
            $isLoading={isLoading}
            disabled={isLoading}
            {...rest}
        >   
            {isLoading
                ?
                    <Loading/>
                :
                    <>
                        { Icone && <Icone/> }
                        { descricao }
                    </>
            }
        </BotaoStyled>
    );
}