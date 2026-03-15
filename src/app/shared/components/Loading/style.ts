import styled, { keyframes } from "styled-components";

interface ILoadingStyledProps {
    $tamanho?: number;
}

const prixCLipFix = keyframes`
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`;

const rotate = keyframes`
    100%   {transform: rotate(360deg)}
`;

export const LoadingStyled = styled.span<ILoadingStyledProps>`
    width: ${p => `${p.$tamanho ?? 20}px`};
    height: ${p => `${p.$tamanho ?? 20}px`};
    border-radius: 50%;
    position: relative;
    animation: ${rotate} 1s linear infinite;

    &::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid var(--branco);
        animation: ${prixCLipFix} 2s linear infinite ;
    }
`;
