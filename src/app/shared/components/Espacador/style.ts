import styled from "styled-components";

export const EspacadorEstilizado = styled.div<{$altura: string}>`
    display: flex;
    width: 100%;
    height: ${p => p.$altura ?? "5px"};
`;