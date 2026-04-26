import { IoIosClose } from "react-icons/io";
import { BotaoFechar, HeaderModalStyle } from "../style";
import type { HTMLAttributes } from "react";

interface IHeaderModalProps extends HTMLAttributes<HTMLDivElement> {
    titulo: string;
    fechar: () => void;
}

export const HeaderModal = ({
    titulo,
    fechar,
    ...rest
}: IHeaderModalProps) => {

    return(
        <HeaderModalStyle
            { ...rest }
        >
            { titulo }
            <BotaoFechar onClick={fechar}>
                <IoIosClose />
            </BotaoFechar>
        </HeaderModalStyle>
    );
}