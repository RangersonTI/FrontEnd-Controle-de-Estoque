import styled, { css } from "styled-components";
import type { TTipoBotao } from "./interface";

interface IBotaoStyledProps {
    $tipoBotao?: TTipoBotao;
    $isLoading?: boolean;
    $isFlex?: boolean;
    $corInversa?: boolean;
}

export const BotaoStyled = styled.button<IBotaoStyledProps>`
    background-color: var(--marrom);
    color: var(--beje);
    min-width: 36px;
    min-height: 36px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${p => p.$tipoBotao === "quadrado" && css`
        height: 36px;
        aspect-ratio: 1;
    `}

    ${p => p.$tipoBotao === "normal" && css`
        gap: 5px;
        padding: 0 0.6rem;
    `}

    ${p => p.$isLoading && css`
        cursor: not-allowed;
    `}

    ${p => p.$isFlex && css`
        width: 100%;
    `}

    ${p => p.$corInversa && css`
        background-color: var(--beje);
        border: 1px solid var(--marrom);
        color: var(--marrom);
        
        &:hover {
            background-color: transparent !important;
            box-shadow: 0 0 5px var(--marrom-escuro);
            color: var(--marrom-escuro);
        }
    `}

    svg {
        color: var(--beje);
        width: 26px;
        height: 26px;
    }

    &:hover {
        background-color: var(--marrom-escuro);
    }
`;