import type { ComponentType, HTMLAttributes, RefObject } from "react";
import { ButtonStyleHeader } from "./style";
import {
    IoIosArrowUp,
    IoIosArrowDown
} from "react-icons/io";
import type { TBotaoPressionado } from "../../../../global/types";
import { useHeader } from "../../../../hooks/useHeader";
import { useNavigate } from "react-router-dom";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    descricao: string;
    tipoBotaoPressionado?: TBotaoPressionado;
    botaoExpansivo?: boolean;
    botaoExpansivoAberto?: boolean;
    Icone?: ComponentType;
    ref?: RefObject<HTMLButtonElement | null>;
    rotaNavegacao?: string;
    onClick: (
        e: React.MouseEvent<HTMLButtonElement>,
        ref?: RefObject<HTMLButtonElement | null>
    ) => void;
}

export const Button = ({
    descricao,
    botaoExpansivo=false,
    botaoExpansivoAberto,
    tipoBotaoPressionado,
    Icone,
    ref,
    rotaNavegacao,
    onClick,
    ...rest
}: IButtonProps) => {

    const {
        tipoBotaoPressionado: botaoPressionado
    } = useHeader();

    const navigate = useNavigate();

    return(
        <ButtonStyleHeader
            $opcFocado={botaoPressionado === tipoBotaoPressionado}
            id={`${tipoBotaoPressionado}`}
            ref={ref}
            {...rest}
            onClick={(e) => 
                (!botaoExpansivo && rotaNavegacao)
                    ? navigate(rotaNavegacao)
                    : onClick(e)
            }
        >
            {!botaoExpansivo && Icone && <Icone /> }
            { descricao }
            {botaoExpansivo && 
                <>
                    { botaoExpansivoAberto 
                        ? <IoIosArrowUp/>
                        : <IoIosArrowDown/> 
                    }
                </>
            }
        </ButtonStyleHeader>
    );
}