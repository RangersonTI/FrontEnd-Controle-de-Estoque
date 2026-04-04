import { useEffect, useMemo, useState, useTransition, type ChangeEvent } from "react";
import { TiposDeProdutosController } from "../../../shared/services/TiposDeProdutosController";
import { useTiposDeProdutoContext } from "../../../shared/hooks/useTiposDeProdutoContext";
import type { ObjetoMapeado } from "../../../shared/global/interface";
import type { TTipoAcaoTabela } from "../../../shared/global/types";
import type { ITiposDeProdutoData } from "../../../shared/services/interfaces/TiposDeProduto";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalTiposDeProduto } from "../types";
import { Notificar } from "../../../shared/Utils/Notificar";

export const useTiposDeProduto = () => {

    const {
        setTiposDeProduto,

        formularioTiposDeProduto,
        setFormularioTiposDeProduto,

        tiposDeProdutoSelecionado,
        setTiposDeProdutoSelecionado,

        handleObterTiposDeProduto
    } = useTiposDeProdutoContext();

    const {
        fecharModal,
        abrirModal
    } = useModalContext<TModalTiposDeProduto>();

    const [
        filtro,
        setFiltro
    ] = useState("");

    const [
        estaSalvandoFormulario,
        salvandoFormulario,
    ] = useTransition();

    const [
        estaDeletandoTipoDeProduto,
        deletandoTipoDeProduto
    ] = useTransition();

    const tituloModalFormulario = useMemo(
        () =>  tiposDeProdutoSelecionado.CodTipoProduto 
            ? "Edição do Tipo de Produto"
            : "Cadastro de Tipo de Produto"
        ,[
            tiposDeProdutoSelecionado
        ]
    );
    
    const tituloBotaoFormulario = useMemo(
        () => tiposDeProdutoSelecionado.CodTipoProduto
            ? "Editar" : "Salvar"
        ,[
            tiposDeProdutoSelecionado
        ]
    );


    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if(name === "filtro")
            return setFiltro(value);

        // DAQUI VAI SER PARA O FORMULARIO
        setFormularioTiposDeProduto(tp => ({
            ...tp,
            [name]: value
        }));
    }

    const handleFecharModal = () => {
        setFormularioTiposDeProduto({
            descricao: ''
        });

        setTiposDeProdutoSelecionado({} as ITiposDeProdutoData);

        fecharModal("FormularioTipoDeProduto");
        fecharModal("ConfirmarExclusaoTipoDeProduto");
    }


    const handleSalvarFormulario = () => {
        salvandoFormulario(async() => {
            try {

                const {
                    descricao
                } = formularioTiposDeProduto

                if(tiposDeProdutoSelecionado.CodTipoProduto){

                    const tipoDeProduto = await TiposDeProdutosController.Editar({
                        CodTipoDeProduto: tiposDeProdutoSelecionado.CodTipoProduto,
                        Descricao: descricao
                    });

                    setTiposDeProduto((tp) => tp.map(tp => {
                        if(tp.CodTipoProduto === tiposDeProdutoSelecionado.CodTipoProduto)
                            return tipoDeProduto
    
                        return tp
                    }));
                    
                    Notificar.Sucesso("Tipo de Produto editado com sucesso!")
                }
                else {
                    
                    const tipoDeProduto = await TiposDeProdutosController.Cadastrar({
                        Descricao: descricao
                    });

                    setTiposDeProduto(tp => ([
                        ...tp,
                        tipoDeProduto
                    ]))

                    Notificar.Sucesso("Tipo de Produto Cadastrado com sucesso!")
                }
                
                handleFecharModal();
            } 
            catch (error) {
                Notificar.ErrorApi(error);
            }
        });
    }

    const handleDeletarTipoDeProduto = async() => {
        deletandoTipoDeProduto(async() => {
            try {
                await TiposDeProdutosController.Deletar(tiposDeProdutoSelecionado.CodTipoProduto);
                
                setTiposDeProduto(p => p.filter(
                    t => t.CodTipoProduto != tiposDeProdutoSelecionado.CodTipoProduto)
                );
            
                handleFecharModal();
            } 
            catch (error) {
                Notificar.ErrorApi(error);
            }
        });    
    }

    const handleAcaoDaTabela = (data: ObjetoMapeado, tipo: TTipoAcaoTabela) => {

        const tiposDeProduto = data as ITiposDeProdutoData;

        setTiposDeProdutoSelecionado(tiposDeProduto);

        
        switch(tipo) {
            case "deletar":
                abrirModal("ConfirmarExclusaoTipoDeProduto");
                break;
            case "editar":
                setFormularioTiposDeProduto({
                    descricao: tiposDeProduto.Descricao
                });
                abrirModal("FormularioTipoDeProduto");
                break;  
            default:
                break
        }
    }

    useEffect(
        () => {
            handleObterTiposDeProduto();
        },[]
    );
    
    return {
        STATE: {
            filtro,
            setFiltro,
        },
        MEMO: {
            tituloModalFormulario,
            tituloBotaoFormulario
        },
        TRANSITION: {
            estaSalvandoFormulario,
            estaDeletandoTipoDeProduto
        },
        handleChangeValue,
        handleObterTiposDeProduto,
        handleAcaoDaTabela,
        handleFecharModal,
        handleSalvarFormulario,
        handleDeletarTipoDeProduto
    };
}