import styled from "styled-components";
import { containerFlexInRow } from "../../global/style/mixins";

export const Container = styled.div`
    display: flex;
    height: 65px;
    width: 100%;
    background-color: var(--marrom);
`;

export const Img = styled.img`
    width: 300px;
    padding: 0 15px;
    cursor: pointer;
`;

export const Opcoes = styled.div`
    ${containerFlexInRow};
    align-items: center;

    gap: 14px;
    padding: 0 2rem;
`;