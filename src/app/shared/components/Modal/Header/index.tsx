import { IoIosClose } from "react-icons/io";
import { BotaoFechar, HeaderModalStyle } from "../style";

interface IHeaderModalProps {
    titulo: string;
    fechar: () => void;
}

export const HeaderModal = ({
    titulo,
    fechar
}: IHeaderModalProps) => {

    return(
        <HeaderModalStyle>
            { titulo }
            <BotaoFechar onClick={fechar}>
                <IoIosClose />
            </BotaoFechar>
        </HeaderModalStyle>
    );
}