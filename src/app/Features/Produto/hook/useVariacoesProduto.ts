import { useEffect, useState, type ChangeEvent } from "react";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import { useProdutosContext } from "../../../shared/hooks/useProdutoContext";
import type { IVariacoesProdutoData } from "../../../shared/services/interfaces/VariacoesProduto/index.ts";
import { VariacoesProdutoController } from "../../../shared/services/VariacoesProdutoController";
import { Notificar } from "../../../shared/Utils/Notificar";
import type { TModalProduto } from "../types";
import type { ObjetoMapeado } from "../../../shared/global/interface/index.ts";
import type { TTipoAcaoTabela } from "../../../shared/global/types/index.ts";

export const useVariacoesProduto = () => {

    const {
        fecharModal
    } = useModalContext<TModalProduto>();

    const {
        produtoSelecionado
    } = useProdutosContext();

    const [
        variacoesPorProduto,
        setVariacoesPorProduto
    ] = useState<IVariacoesProdutoData[]>([]);

    const [
        variacaoSelecionada,
        setVariacaoSelecionada
    ]  = useState({} as IVariacoesProdutoData);

    const [
        descricaoVariacao,
        setDescricaoVariacao
    ] = useState("");

    const handleFecharModalGerenciamentoVariacoesProduto = () => {
        fecharModal("ModalGerenciamentoVariacaoProduto");
    }

    const handleObterVariacoesPeloCodProd = async () => {
        try {
            const variacoes = await VariacoesProdutoController.Obter(
                produtoSelecionado.CodProd
            ); 

            setVariacoesPorProduto(variacoes);

        }
        catch (error) {
            Notificar.ErrorApi(error);
        }
    }

    const handleAcaoTabelaVariacoesProduto = (dado: ObjetoMapeado, tipo: TTipoAcaoTabela) => {
        const variacao = dado as IVariacoesProdutoData;

        setVariacaoSelecionada(variacao);

        if(tipo === "editar")
            setDescricaoVariacao(variacao.Descricao);
    }

    const handleChangeCampoDescricaoVariacao = (e: ChangeEvent<HTMLInputElement>) => {
        setDescricaoVariacao(e.target.value);
    }

    const handleSalvarVariacaoProduto = async() => {
        try {

            if(variacaoSelecionada.CodVariacao && variacaoSelecionada.CodVariacao > 0) {

                const variacaoEditada = await VariacoesProdutoController.Editar({
                    CodProd: produtoSelecionado.CodProd,
                    Descricao: descricaoVariacao,
                    Sequencial: variacaoSelecionada.Sequencial
                });

                setVariacoesPorProduto(vp =>
                    vp.map((v) => {
                        if(v.Sequencial === variacaoEditada.Sequencial) 
                            return variacaoEditada;

                        return v; 
                    })
                );
            }
            else {
                const variacaoCadastrada = await VariacoesProdutoController.Cadastrar({
                    CodProd: produtoSelecionado.CodProd,
                    Descricao: descricaoVariacao
                });

                setVariacoesPorProduto(vp => [...vp, variacaoCadastrada]);
            }

            setDescricaoVariacao("");
            setVariacaoSelecionada({} as IVariacoesProdutoData);
        }

        catch (error) {
            Notificar.ErrorApi(error);    
        }
    }

    useEffect(
        () => {
            handleObterVariacoesPeloCodProd();
        } ,[]
    )
    
    return {
        STATE: {
            variacoesPorProduto,
            variacaoSelecionada,
            descricaoVariacao
        },
        handleFecharModalGerenciamentoVariacoesProduto,
        handleAcaoTabelaVariacoesProduto,
        handleSalvarVariacaoProduto,
        handleChangeCampoDescricaoVariacao
    };
}