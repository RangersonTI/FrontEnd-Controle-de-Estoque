import styled, { css } from "styled-components";

interface IContainerInputProps {
    $width?: string;
    $heigth?: string;
    $labelSuspensa?: boolean;
    $ehCheckBox?: boolean;
}

export const ContainerInput = styled.div<IContainerInputProps>`
    position: relative;
    width: ${p => p.$width ?? "100%"};
    height: ${p => p.$heigth ?? "36px"};

    ${p => p.$labelSuspensa && !p.$ehCheckBox && css`
        label {
            top: -15px;
            left: 2px;
            transform: translate(-0px, -4px);
        }
    `}

    ${p => p.$ehCheckBox && css`
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        justify-items: center;
        vertical-align: center;

        input {
            width: 20px;
            height: 20px;
        }
    `}
`;

export const InputStyled = styled.input`
    width: 100%;
    min-height: 36px;
    background-color: var(--beje);
    border: 2px solid var(--marrom);
    border-radius: 5px;
    padding-left: 10px;
    font-weight: 500;
    font-family: var(--inter);
`;

export const LabelFlutuante = styled.label<IContainerInputProps>`
    font-family: var(--inter);
    user-select: none;
    font-weight: 600;
    font-size: 14px;
    
    ${p => !p.$ehCheckBox && css`
        position: absolute;
        left: 15px;
        transform: translateY(50%);
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    `}
`;