import type { ElementType, HTMLAttributes } from "react";
import type { TTipoBotao } from "./interface";
import { BotaoStyled } from "./style";
import { Loading } from "../Loading";

interface IBotaoProps extends HTMLAttributes<HTMLButtonElement>{
    tipoBotao?: TTipoBotao;
    descricao?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    isFlex?: boolean;
    corInversa?: boolean;
    Icone?: ElementType;
}

export const Botao = ({
    tipoBotao = "normal",
    Icone,
    descricao,
    isLoading = false,
    isDisabled = false,
    isFlex = false,
    corInversa = false,
    ...rest
}: IBotaoProps) => {
    return(
        <BotaoStyled
            $tipoBotao={tipoBotao}
            $isLoading={isLoading}
            $isFlex={isFlex}
            $corInversa={corInversa}
            disabled={isDisabled}
            {...rest}
        >   
            {isLoading
                ?
                    <Loading/>
                :
                    <>
                        { Icone && <Icone /> }
                        { descricao }
                    </>
            }
        </BotaoStyled>
    );
}