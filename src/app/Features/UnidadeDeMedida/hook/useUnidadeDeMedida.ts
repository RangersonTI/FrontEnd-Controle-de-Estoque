import { useEffect, useMemo, useState, useTransition, type ChangeEvent } from "react";
import { UnidadesDeMedidaController } from "../../../shared/services/UnidadesDeMedidaController";
import type { ObjetoMapeado } from "../../../shared/global/interface";
import type { TTipoAcaoTabela } from "../../../shared/global/types";
import { useUnidadesDeMedidaContext } from "../../../shared/hooks/useUnidadesDeMedidaContext";
import type { IUnidadesDeMedidaData } from "../../../shared/services/interfaces/UnidadesDeMedida";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalFormularioUnMedida } from "../types";
import type { IFormularioUnidadesDeMedidaState } from "../../../shared/provider/UnidadesDeMedidaProvider/interface";
import { Notificar } from "../../../shared/Utils/Notificar";

export const useUnidadeDeMedida = () => {

    const {
        formularioUnMedida,
        setFormularioUnMedida,

        unidadesDeMedidaSelecionada,
        setUnidadesDeMedidaSelecionada,

        setUnidadesDeMedida,
        unidadesDeMedida,

        handleObterUnidadeDeMedida
    } = useUnidadesDeMedidaContext();

    const {
        abrirModal,
        fecharModal
    } = useModalContext<TModalFormularioUnMedida>();

    const [
        filtro,
        setFiltro
    ] = useState("");

    const [
        estaSalvandoFormulario,
        salvandoFormulario
    ] = useTransition();

    const [
        estaDeletandoUnMedida,
        deletandoUnMedida
    ] = useTransition();

    const tituloModalFormulario = useMemo(
        () => unidadesDeMedidaSelecionada.CodUnidadeDeMedida
                ? "Edição de Un. de Medida"
                : "Cadastro de Un. de Medida"
        ,[unidadesDeMedidaSelecionada]
    );

    const tituloBotaoFormulario = useMemo(
        () => unidadesDeMedidaSelecionada.CodUnidadeDeMedida
                ? "Editar"
                : "Salvar"
        ,[unidadesDeMedidaSelecionada]
    );

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        if(name === "filtro")
            return setFiltro(value);

        setFormularioUnMedida(f => ({
            ...f,
            [name]: value
        }));
    }

    const handleFecharModal = () => { 
        setUnidadesDeMedidaSelecionada({} as IUnidadesDeMedidaData);
        setFormularioUnMedida({} as IFormularioUnidadesDeMedidaState);

        fecharModal("FormularioUnMedida");
        fecharModal("ConfirmaExclusaoUnMedida");
    }   

    const handleAcaoDaTabela = (data: ObjetoMapeado, tipo: TTipoAcaoTabela) => {

        const unMedida = data as IUnidadesDeMedidaData;
        setUnidadesDeMedidaSelecionada(unMedida);

        switch(tipo){
            case "deletar":
                abrirModal("ConfirmaExclusaoUnMedida");
                break;
            case "editar":
                setFormularioUnMedida({
                    descricao: unMedida.Descricao,
                    sigla: unMedida.Sigla
                });

                abrirModal("FormularioUnMedida");
                break;
            default:
                break;
        }
    }

    const handleDeletarUnidadeDeMedida = () => {
        deletandoUnMedida(
            async() => {
                try {
                    await UnidadesDeMedidaController.Deletar(unidadesDeMedidaSelecionada.CodUnidadeDeMedida);

                    setUnidadesDeMedida(un => 
                        un.filter(u => u.CodUnidadeDeMedida != unidadesDeMedidaSelecionada.CodUnidadeDeMedida

                        )
                    );

                    handleFecharModal();
                } 
                catch (error) {
                    Notificar.ErrorApi(error);    
                }
            }
        );
    }

    const handleSalvarFormulario  = () => {
        salvandoFormulario(
            async() => {

                const {
                    CodUnidadeDeMedida
                } = unidadesDeMedidaSelecionada;

                const {
                    descricao,
                    sigla
                } = formularioUnMedida;

                try {

                    if(unidadesDeMedidaSelecionada.CodUnidadeDeMedida) {

                        const unMedida = await UnidadesDeMedidaController.Editar({
                            CodUnidadeDeMedida,
                            Descricao: descricao,
                            Sigla: sigla
                        });
    
                        setUnidadesDeMedida(un => un.map((u) => {
                            if(u.CodUnidadeDeMedida === unidadesDeMedidaSelecionada.CodUnidadeDeMedida)
                                return unMedida
    
                            return u;
                        }));
                    }
                    else {

                        const unMedida = await UnidadesDeMedidaController.Cadastrar({
                            Descricao: descricao,
                            Sigla: sigla
                        });
                        
                        setUnidadesDeMedida(un => ([
                            ...un,
                            unMedida
                        ]));
                    }

                    handleFecharModal();
                } 
                catch (error) {
                    Notificar.ErrorApi(error);    
                }
            }
        );
    }

    useEffect(
        () => {
            handleObterUnidadeDeMedida();
        },[]
    );

    return {
        STATE: {
            filtro,
            setFiltro,

            unidadesDeMedida,
            setUnidadesDeMedida,
        },
        MEMO: {
            tituloModalFormulario,
            tituloBotaoFormulario,
        },
        TRANSITION: {
            estaSalvandoFormulario,
            estaDeletandoUnMedida
        },
        handleChangeValue,
        handleAcaoDaTabela,
        handleFecharModal,
        handleSalvarFormulario,
        handleDeletarUnidadeDeMedida,
    };
}