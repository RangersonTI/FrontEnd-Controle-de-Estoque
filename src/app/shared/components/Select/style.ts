import styled, { css } from "styled-components";

interface IContainerSelectProps {
    $width?: string;
    $heigth?: string;
    $labelSuspensa?: boolean;
}

export const ContainerSelect = styled.div<IContainerSelectProps>`
    position: relative;
    width: ${p => p.$width ?? "100%"};
    height: ${p => p.$heigth ?? "36px"};

    ${p => p.$labelSuspensa && css`
        label {
            top: -15px;
            left: 2px;
            transform: translate(-0px, -4px);
        }
    `}
`;

export const SelectStyled = styled.select`
    width: 100%;
    min-height: 36px;
    background-color: var(--beje);
    border: 2px solid var(--marrom);
    border-radius: 5px;
    padding-left: 10px;
    font-weight: 500;
    font-family: var(--inter);
`;

export const LabelFlutuante = styled.label<IContainerSelectProps>`
    font-family: var(--inter);
    position: absolute;
    left: 15px;
    transform: translateY(50%);
    user-select: none;
    font-weight: 600;
    font-size: 14px;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Opcao = styled.option``;