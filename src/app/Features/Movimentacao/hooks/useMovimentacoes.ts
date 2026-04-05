import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalMovimentacao } from "../types";
import { useMovimentacoesContext } from "../../../shared/hooks/useMovimentacoesContext";
import { useProdutosContext } from "../../../shared/hooks/useProdutoContext";
import type { ISelectFormatProps } from "../../../shared/types";
import { ETiposDeMovimentacao } from "../../../shared/provider/MovimentacoesProvider/enum";
import { DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO } from "../../../shared/provider/MovimentacoesProvider";
import { Formatar } from "../../../shared/Utils/Formatar";

export const useMovimentacoes = () => {
    
    const {
        setFormularioMovimentacao,
    } = useMovimentacoesContext();

    const {
        handleObterProdutosCadastrados,
        produtos
    } = useProdutosContext();

    const [
        filtro,
        setFiltro,
    ] = useState("");

    const {
        fecharModal
    } = useModalContext<TModalMovimentacao>();

    const handleFecharFormulario = () => {
        fecharModal("FormularioMovimentacao");
        setFormularioMovimentacao(DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO);
    };

    const tiposMovimentacaoSelectFormat: ISelectFormatProps[] = [
        {
            chave: "Entrada",
            valor: `${ETiposDeMovimentacao.ENTRADA}`
        },
        {
            chave: "Saída",
            valor: `${ETiposDeMovimentacao.SAIDA}`
        }
    ]

    const produtosSelectFormat: ISelectFormatProps[] = useMemo(
        () => produtos.map(p => (
            {chave: p.Descricao, valor: String(p.CodProd)}
        )) ,[produtos]
    );

    const handleChangeValues = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { value, name } = e.target;

        if (name === "filtro")
            setFiltro(value);

        if(name === "qtdAMovimentar" && value.length > 4) return;

        const formatarParaNumero = ["qtdAMovimentar"];

        const ehTipoMovimentacao = name.includes("tipoMovimentacao");

        const tipoMovimentacao = ehTipoMovimentacao && (
            value === "1" ? ETiposDeMovimentacao.ENTRADA : ETiposDeMovimentacao.SAIDA
        )

        setFormularioMovimentacao(form => ({
            ...form,
            [name]: formatarParaNumero.includes(name)
                ? Formatar.paraNumero(value)
                : ehTipoMovimentacao
                    ? tipoMovimentacao
                    : value
        }));
    }

    useEffect(
        () => {
            handleObterProdutosCadastrados();
        },[]
    );

    return {
        STATE: {
            filtro,
            setFiltro,
        },
        MEMO: {
            produtosSelectFormat,
            tiposMovimentacaoSelectFormat
        },
        handleChangeValues,
        handleFecharFormulario
    };
}