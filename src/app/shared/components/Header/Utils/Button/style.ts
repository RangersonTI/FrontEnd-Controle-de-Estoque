import styled, { css } from "styled-components";
import { containerFlexInRowCenter } from "../../../../global/style/mixins";

interface IButtonStyleHeaderProps{
    $opcFocado: boolean;
}

export const ButtonStyleHeader = styled.button<IButtonStyleHeaderProps>`
    min-width: 180px;
    border: var(--branco) solid 2px;
    gap: 8px;
    padding: 0.2rem 1rem;
    background: transparent;
    height: 36px;
    border-radius: 5px;
    color: var(--branco);
    font-weight: 800;
    font-size: 1rem;

    ${containerFlexInRowCenter}

    ${p => p.$opcFocado && css`
        background-color: var(--marrom-escuro);
    `}

    &:hover {
        background-color: var(--marrom-escuro);
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;