import styled, { css } from "styled-components";
import { containerFlexInCollumn, containerFlexInRowCenter } from "../../global/style/mixins";

export interface IContainerModalStyleProps {
    $gapEntreItens?: string
}

export interface IRootModalStyleProps {
    $posicaoEsquerda?: number | null;
    $posicaoTopo?: number | null;
}

export const HeaderModalStyle = styled.div`
    width: 100%;
    text-align: center;
    align-content: center;
    font-weight: 700;
    position:  relative;
    height: 28px;
    background-color: var(--marrom);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: var(--beje);
    font-family: var(--inter);
    font-size: 1em;
    user-select: none;

    svg {
        color: var(--beje);
        width: 28px;
        height: 28px;
    }
`;

export const BotaoFechar = styled.button`
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 0;
`;

export const RootModalStyle = styled.div<IRootModalStyleProps>`
    position: absolute;
    left: ${p => p.$posicaoEsquerda}px;
    top: ${p => p.$posicaoTopo}px;
    max-width: 50%;
    min-width: 300px;
    min-height: 200px;
    background-color: var(--beje);
    border-radius: 5px;
`;

export const ContainerModalStyle = styled.div<IContainerModalStyleProps>`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 25px;

    ${containerFlexInCollumn}

    ${p => p.$gapEntreItens && css`
        gap: ${p.$gapEntreItens};
    `}
`;

export const FundoModal = styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--fundo-modal);
    position: fixed;
    z-index: 19;
    ${containerFlexInRowCenter}
`;