
import { useHeader } from "../../hooks/useHeader";
import { Header } from "../Header";
import { ContainerChildren, GlobalContainerStyle } from "./style";

interface IContainerGlobalProps{
    children?: React.ReactNode;
}

export const ContainerGlobal = ({
    children
}: IContainerGlobalProps) => {

    const {
        setTipoBotaoPressionado
    } = useHeader();

    return(
        <GlobalContainerStyle
            onClick={() => setTipoBotaoPressionado(null)}
        >
            <Header />
            <ContainerChildren>
                {children}
            </ContainerChildren>
        </GlobalContainerStyle>
    )
}