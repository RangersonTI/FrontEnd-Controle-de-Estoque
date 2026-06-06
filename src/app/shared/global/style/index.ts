import { createGlobalStyle } from "styled-components";
import { PapelDeFundo } from "../../assets";

export const GlobalStyle = createGlobalStyle`
    :root {
        /**CORES */
        --marrom: #8D6E63;
        --marrom-escuro: #6D4C41;
        --verde: #80b840;
        --verde-escuro: #588d1b;
        --vermelho: #e76c6c;
        /* --beje: #FAF3E0; */
        --beje: #faf2db;
        --beje-opc-80: #FAF3E080;
        --branco: #fff;
        --fonte-padrao: #222;
        --fundo-modal: #00000030;

        /**FONTES */
        --roboto: 'Roboto', sans-serif;
        --inter: 'Inter', sans-serif;
        --lato: 'Lato', sans-serif;
    };

    * {
        box-sizing: border-box;
    };

    html, body {
        padding: 0;
        margin: 0;
        width: 100dvw;
        height: 100dvh;
        color: var(--fonte-padrao);

        background-image: url(${PapelDeFundo});
        background-repeat: no-repeat;
        background-size: cover;
    }

    label,
    input,
    textarea,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--inter);
        color: var(--fonte-padrao);
    }

    input,select {
        border: none;
        outline: none;
        color: var(--fonte-padrao);
        accent-color: var(--marrom);
    }

    button {
        font-family: var(--roboto);
        cursor: pointer;
        border: none;
        outline: none;
    }

    [disabled] {
        opacity: 0.6;
    }
`;