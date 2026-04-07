import { useEffect, useMemo, useState, useTransition, type ChangeEvent } from "react";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalMovimentacao } from "../types";
import { useMovimentacoesContext } from "../../../shared/hooks/useMovimentacoesContext";
import { useProdutosContext } from "../../../shared/hooks/useProdutoContext";
import type { ISelectFormatProps } from "../../../shared/types";
import { ETiposDeMovimentacao } from "../../../shared/provider/MovimentacoesProvider/enum";
import { DADOS_INICIAIS_FORMULARIO_MOVIMENTACAO } from "../../../shared/provider/MovimentacoesProvider";
import { Formatar } from "../../../shared/Utils/Formatar";
import { Notificar } from "../../../shared/Utils/Notificar";
import { MovimentacoesController } from "../../../shared/services/MovimentacoesController";
import type { IMovimentacoesEntradaEmAbertoData } from "../../../shared/services/MovimentacoesController/metodos/ObterMovimentacoesEntradaEmAberto";

export const useMovimentacoes = () => {
    
    const {
        formularioMovimentacao,
        setFormularioMovimentacao,
        setMovimentacoesEstoque
    } = useMovimentacoesContext();

    const {
        handleObterProdutosCadastrados,
        produtos
    } = useProdutosContext();
    
    const {
        fecharModal
    } = useModalContext<TModalMovimentacao>();

    const [
        filtro,
        setFiltro,
    ] = useState("");

    const [
        movimentacoesEntradaEmAberto,
        setMovimentacoesEntradaEmAberto,
    ] = useState<IMovimentacoesEntradaEmAbertoData[]>([]);

    const [
        estaRealizandoMovimentacao,
        realizarMovimentacao
    ] = useTransition();


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

    const movimentacoesEntradaSelectFormat: ISelectFormatProps[] = useMemo(
        () => movimentacoesEntradaEmAberto.map((mov) => (
            {
                chave: `Cód.${mov.CodMovimentacao} - Armazenado: ${mov.DataArmazenagem} - Qtd.Restante:${mov.QtdRestante}`,
                valor: mov.CodMovimentacao.toString()
            } as ISelectFormatProps
        ))
        ,[
            movimentacoesEntradaEmAberto
        ]
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

    const handleRealizarMovimentacaoEstoque = async() => {

        const {
            codMovimentacaoEntrada,
            codProd,
            dataArmazenagem,
            dataSaida,
            observacao,
            qtdAMovimentar,
            tipoMovimentacao
        } = formularioMovimentacao;

        realizarMovimentacao(
            async() => {

                try {
                    await MovimentacoesController.Cadastrar({
                        CodMovimentacaoEntrada: codMovimentacaoEntrada,
                        CodProd: Number(codProd),
                        DataArmazenagem: dataArmazenagem,
                        DataSaida: dataSaida,
                        Observacao: observacao,
                        QtdAMovimentar: qtdAMovimentar,
                        TipoMovimentacao: tipoMovimentacao
                    });

                    handleFecharFormulario();

                    Notificar.Sucesso("Movimentação criada com sucesso!");
                }
                catch (error) {
                    Notificar.ErrorApi(error);    
                }
            }
        );
    }

    const handleObterMovimentacoesRealizadas = async() => {
        try {
            const movimentacoes = await MovimentacoesController.Obter();

            setMovimentacoesEstoque(movimentacoes);
        }
        catch (error) {
            Notificar.ErrorApi(error);    
        }
    }

    const handleObterMoviventacoesDeEntradaEmAberto = async() => {

        try {
            const movimentacoes = await MovimentacoesController.ObterMovimentacoesEntradaEmAberto(
                Number(formularioMovimentacao.codProd)
            );

            setMovimentacoesEntradaEmAberto(movimentacoes);
        }
        catch (error) {
            Notificar.ErrorApi(error);
        }
    }

    useEffect(
        () => {
            handleObterProdutosCadastrados();
            handleObterMovimentacoesRealizadas();
        },[]
    );

    useEffect(
        () => {
            if(
                formularioMovimentacao.codProd &&
                formularioMovimentacao.tipoMovimentacao === 2
            )
                handleObterMoviventacoesDeEntradaEmAberto();
        },[
            formularioMovimentacao.codProd,
            formularioMovimentacao.tipoMovimentacao
        ]
    );

    return {
        STATE: {
            filtro,
            setFiltro,
        },
        MEMO: {
            produtosSelectFormat,
            tiposMovimentacaoSelectFormat,
            movimentacoesEntradaSelectFormat
        },
        TRANSITION: {
            estaRealizandoMovimentacao
        },
        handleChangeValues,
        handleFecharFormulario,
        handleRealizarMovimentacaoEstoque,
        handleObterMovimentacoesRealizadas,
        handleObterMoviventacoesDeEntradaEmAberto
    };
}