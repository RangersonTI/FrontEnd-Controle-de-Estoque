import styled from "styled-components";
import { containerFlexInCollumn } from "../../../../global/style/mixins";

interface IContainerMenuProps {
    $positionX: number;
    $positionY: number;
    $tamanho: number;
}

export const ContainerMenu = styled.div<IContainerMenuProps>`
    position: fixed;
    z-index: 2;
    ${containerFlexInCollumn}
    background-color: var(--beje);

    width: ${p => p.$tamanho}px;
    top: ${p => p.$positionX}px;
    left: ${p => p.$positionY}px;
    border-radius: 5px;
    border: var(--marrom-escuro) 2px solid;
    `;

export const ItemMenu = styled.section`
    padding: 0.5rem 0;
    padding-left: 0.2rem;
    border: var(--marrom) solid;
    border-width: 1px 0;
    cursor: pointer;
    font-weight: 700;
    
    span {
        margin: 0 0.4rem;
    }
    
    &:hover {
        
        span {
           color: var(--branco);
       }
        background-color: var(--marrom);
    }
`;