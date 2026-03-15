import styled from "styled-components";
import { containerFlexInCollumn } from "../../global/style/mixins";

export const GlobalContainerStyle = styled.div`
    width: 100dvw;
    height: 100dvh;
    ${containerFlexInCollumn};
    background-color: var(--beje-opc-80);
`;

export const ContainerChildren = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    width: 100%;
    padding: 2rem;
`;