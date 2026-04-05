import { useEffect, useMemo, useState, useTransition, type ChangeEvent } from "react";
import { ProdutosController } from "../../../shared/services/ProdutosController";
import type { IProdutosData } from "../../../shared/services/interfaces/Produtos";
import type { ObjetoMapeado } from "../../../shared/global/interface";
import type { TTipoAcaoTabela } from "../../../shared/global/types";
import { useProdutosContext } from "../../../shared/hooks/useProdutoContext";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalProduto } from "../types";
import { useMarcaContext } from "../../../shared/hooks/useMarcaContext";
import { useTiposDeProdutoContext } from "../../../shared/hooks/useTiposDeProdutoContext";
import { useUnidadesDeMedidaContext } from "../../../shared/hooks/useUnidadesDeMedidaContext";
import type { ISelectFormatProps } from "../../../shared/types";
import { Notificar } from "../../../shared/Utils/Notificar";
import type { IFormularioProduto } from "../../../shared/provider/ProdutosProvider/interfaces";

export const useProduto = () => {

    const {
        produtos,
        setProdutos,

        formularioProduto,
        setFormularioProduto,

        produtoSelecionado,
        setProdutoSelecionado,
        handleObterProdutosCadastrados
    } = useProdutosContext();

    const {
        marcas,
        handleObterMarcasCadastradas
    } = useMarcaContext();

    const {
        tiposDeProduto,
        handleObterTiposDeProduto
    } = useTiposDeProdutoContext();

    const {
        unidadesDeMedida,
        handleObterUnidadeDeMedida        
    } = useUnidadesDeMedidaContext();

    const {
        abrirModal,
        fecharModal
    } = useModalContext<TModalProduto>();

    const [
        filtro,
        setFiltro,
    ] = useState("");

    const [
        estaSalvandoFormulario,
        salvandoFormulario
    ] = useTransition();

    const tituloFormularioProduto = useMemo(
        () => 
            produtoSelecionado.CodProd ? "Edição de Produto" : "Cadastro de Produto" 
        ,[produtoSelecionado]
    );

    const descricaoBotaoFormulario = useMemo(
        () => 
            produtoSelecionado.CodProd ? "Editar" : "Salvar" 
        ,[produtoSelecionado]
    );

    const marcaFormatoSelect = useMemo(
        () =>  
            marcas.map(marca => (
                {
                    chave: marca.Descricao,
                    valor: String(marca.CodMarca)
                } as ISelectFormatProps
            ))
        ,[marcas]
    );

    const tipoDeProdutoFormatoSelect = useMemo(
        () =>  
            tiposDeProduto.map(marca => (
                {
                    chave: marca.Descricao,
                    valor: String(marca.CodTipoProduto)
                } as ISelectFormatProps
            ))
        ,[tiposDeProduto]
    );

    const unidadesDeMedidaFormatoSelect = useMemo(
        () =>  
            unidadesDeMedida.map(marca => (
                {
                    chave: marca.Descricao,
                    valor: String(marca.CodUnidadeDeMedida)
                } as ISelectFormatProps
            ))
        ,[unidadesDeMedida]
    );

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;

        if(name === "filtro")
            return setFiltro(value);

        setFormularioProduto(fp => ({
            ...fp,
            [name] : value
        }));
    }

    const handleFecharFormulario = () => {
        setProdutoSelecionado({} as IProdutosData);
        setFormularioProduto({} as IFormularioProduto);
        fecharModal("ModalCofirmaExclusaoProduto");
        fecharModal("ModalFormularioProduto");
    }

    const handleAcaoDaTabela = (data: ObjetoMapeado, tipo: TTipoAcaoTabela) => {
        const produto = data as IProdutosData;

        setProdutoSelecionado(produto);

        switch(tipo) {
            case "editar":
                setFormularioProduto({
                    codMarca: produto.CodMarca,
                    codTipoProduto: produto.CodTipoProduto,
                    codUnidadeDeMedida: produto.CodUnidadeDeMedida,
                    descricao: produto.Descricao
                });

                abrirModal("ModalFormularioProduto");

                break;
            case "deletar":
                abrirModal("ModalCofirmaExclusaoProduto");
                break;
            default:
                break;

        }
    }

    const handleSalvarFormulario = () => {
        try {

            const {
                codMarca,
                codTipoProduto,
                codUnidadeDeMedida,
                descricao
            } = formularioProduto;

            salvandoFormulario(async() => {

                if(produtoSelecionado.CodProd){
                    const produtoEditado = await ProdutosController.Editar({
                        CodProd: produtoSelecionado.CodProd,
                        CodMarca: codMarca,
                        CodTipoProduto: codTipoProduto,
                        CodUnidadeDeMedida: codUnidadeDeMedida,
                        Descricao: descricao
                    });

                    setProdutos(p => p.map(produto => {
                        if(produto.CodProd === produtoSelecionado.CodProd)
                            return produtoEditado
                        else
                            return produto;
                    }));

                    Notificar.Sucesso("Produto editado com sucesso!");
                }
                else {
                    const produtoCadastrado = await ProdutosController.Cadastrar({
                        CodMarca: codMarca,
                        CodTipoProduto: codTipoProduto,
                        CodUnidadeDeMedida: codUnidadeDeMedida,
                        Descricao: descricao
                    });

                    setProdutos(p => ([...p, produtoCadastrado]));

                    Notificar.Sucesso("Produto cadastrado com sucesso!");
                }

                handleFecharFormulario();
            })
        } 
        catch (error) {
            Notificar.ErrorApi(error);    
        }
    }

    

    useEffect(
        () => {
            handleObterProdutosCadastrados();
            handleObterMarcasCadastradas();
            handleObterTiposDeProduto();
            handleObterUnidadeDeMedida();
        },[]
    );
    
    return {
        STATE: {
            filtro,
            setFiltro,

            produtos,
            setProdutos,
        },
        MEMO: {
            tituloFormularioProduto,
            descricaoBotaoFormulario,
            marcaFormatoSelect,
            tipoDeProdutoFormatoSelect,
            unidadesDeMedidaFormatoSelect,
        },
        TRANSITION: {
            estaSalvandoFormulario
        },
        handleChangeValue,
        handleAcaoDaTabela,
        handleSalvarFormulario,
        handleFecharFormulario
    };
}