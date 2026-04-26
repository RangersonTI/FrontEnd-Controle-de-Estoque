import styled, { css } from "styled-components";
import { containerFlexInRowCenter } from "../../global/style/mixins";

interface ITdProps {
    $alinhamento?: "left" | "right" | "center"
    $selecionado: boolean;
}

export const TabelaStyle = styled.table`
    width: 100%;
    background-color: var(--beje);
    border-collapse: collapse;
    font-family: var(--roboto);
    border-radius: 3px;
`;

export const Td = styled.td<ITdProps>`
    color: var(--marrom);
    font-weight: 600;
    text-align: ${p => p.$alinhamento ?? "center"};

    ${p => p.$selecionado && css`
        background-color: var(--marrom);
        color: var(--beje);
    `}
`

export const Trow = styled.tr`
    td, th {
        padding: 5px;
        min-width: 50px;
    }
`

export const Th = styled.th`
    color: var(--beje);
    user-select: none;
`

export const THead = styled.thead`
    th {
        background-color: var(--marrom);
    }
`

export const TBody = styled.tbody``

export const AgrupamentoAcoes = styled.div`
    ${containerFlexInRowCenter}
    gap: 8px;

    svg{
        cursor: pointer;
        width: 24px;
        height: 24px;
    }
`;