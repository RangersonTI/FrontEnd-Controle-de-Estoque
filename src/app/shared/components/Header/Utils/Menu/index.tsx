import { useHeader } from "../../../../hooks/useHeader";
import { useHeaderHook } from "../../hooks/useHeader";
import { ContainerMenu, ItemMenu } from "./style";

export const Menu = () => {

    const {
        posicaoMenuExpansivo,
    } = useHeader();

    const {
        STATE,
        handleNavegar
    } = useHeaderHook();

    return(
        <ContainerMenu
            $positionX={posicaoMenuExpansivo.x}
            $positionY={posicaoMenuExpansivo.y}
            $tamanho={posicaoMenuExpansivo.tamanhoTotal}
        >
            {STATE.menuItens.map((item) => (
                <ItemMenu onClick={() => handleNavegar(item)}>
                    <span>{ item }</span>
                </ItemMenu>
            ))}
        </ContainerMenu>
    );
} 