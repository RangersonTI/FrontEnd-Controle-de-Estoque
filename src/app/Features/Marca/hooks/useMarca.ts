import { useEffect, useMemo, useState, useTransition, type ChangeEvent } from "react";
import { MarcasController } from "../../../shared/services/MarcasController";
import type { TModalsMarca } from "../types";
import { Notificar } from "../../../shared/Utils/Notificar";
import { useMarcaContext } from "../../../shared/hooks/useMarcaContext";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { IMarcasData } from "../../../shared/services/interfaces/Marcas";
import type { IFormularioMarcaState } from "../../../shared/provider/MarcasProvider/interface";
import type { ObjetoMapeado } from "../../../shared/global/interface";
import type { TTipoAcaoTabela } from "../../../shared/global/types";

export const useMarca = () => {

    const {
        formularioMarca,
        setMarcas,
        setFormularioMarca,

        marcaSelecionada,
        setMarcaSelecionada,

        handleObterMarcasCadastradas
    } = useMarcaContext();

    const{
        fecharModal,
        abrirModal,
    } = useModalContext<TModalsMarca>();

    const [
        estaCadastrandoMarca,
        cadastrarMarca
    ] = useTransition();

    const [
        estaEditandoMarca,
        editarMarca
    ] = useTransition();

    const [
        estaDeletandoMarca,
        delatarMarca
    ] = useTransition();

    const [
        filtro,
        setFiltro
    ] = useState("");

    const descricaoBotaoFormularioMarca = useMemo(
        () => marcaSelecionada.CodMarca ? "Editar" : "Salvar"
        ,[marcaSelecionada]
    );

    const tituloModalFormularioMarca = useMemo(
        () => marcaSelecionada.CodMarca ? "Edição de Marca" : "Cadastro de Marca"
        ,[marcaSelecionada]
    );

    const handleFecharModal = () => {
        setMarcaSelecionada({} as IMarcasData);
        setFormularioMarca({} as IFormularioMarcaState);
        fecharModal("FormularioMarca");
        fecharModal("ConfirmarExclusaoMarca");
    }

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;

        if(name === "filtro")
            setFiltro(value);

        if(name === "descricao")
            setFormularioMarca(p => ({
                ...p, 
                [name]: value
            }));
    }

    const handleCadastrarMarca = () => {
        if(estaCadastrandoMarca || estaEditandoMarca) return;
        
        const {
            descricao
        } = formularioMarca;

        if(marcaSelecionada.CodMarca)
            editarMarca(async() => {
                try {
                    const marcaEditada = await MarcasController.Editar({
                        Descricao: descricao,
                        CodMarca: marcaSelecionada.CodMarca
                    });
    
                    setMarcas(p => p.map((marca) => {
                        if(marca.CodMarca !== marcaEditada.CodMarca)
                            return marca
                        else
                            return marcaEditada
                    }))
    
                    Notificar.Sucesso("Marca editada com sucesso!");
                    
                    handleFecharModal();
                } 
                catch (error) {
                    Notificar.ErrorApi(error);
                }
                
            });
            else
                cadastrarMarca(async() => {
            try {

                const marcaCadastrada = await MarcasController.Cadastrar({
                    Descricao: descricao
                });
                
                    setMarcas(p => ([...p, marcaCadastrada]));
                
                    Notificar.Sucesso("Marca cadastrada com sucesso!");

                    handleFecharModal();
                }
                catch (error) {
                    Notificar.ErrorApi(error);
                }
            });

        setMarcaSelecionada({} as IMarcasData);
        setFormularioMarca({} as IFormularioMarcaState);
    }

    const handleDeletarMarca = () => {
        delatarMarca(async() => {
            try {
                await MarcasController.Deletar(marcaSelecionada.CodMarca);

                Notificar.Sucesso("Marca deletada com sucesso!");

                setMarcas(p => p.filter(m => m.CodMarca !== marcaSelecionada.CodMarca));

                handleFecharModal();
            } 
            catch (error) {
                Notificar.ErrorApi(error);
            }
        });
    }

    const handleAcaoTabela = (dado: ObjetoMapeado, tipo: TTipoAcaoTabela) => {

        const marca = dado as IMarcasData;
        setMarcaSelecionada(marca);

        switch(tipo) {
            case "editar":
                abrirModal("FormularioMarca");
                setFormularioMarca({
                    descricao: marca.Descricao
                });
                break;
            case "deletar":
                abrirModal("ConfirmarExclusaoMarca");
                break;
            default:
                break;
        }
    }

    useEffect(
        () => {
            handleObterMarcasCadastradas();
        },[]
    );

    return {
        STATE: {
            filtro,
            setFiltro,
        },
        MEMO: {
            descricaoBotaoFormularioMarca,
            tituloModalFormularioMarca
        },
        TRANSITION: {
            estaCadastrandoMarca,
            estaEditandoMarca,
            estaDeletandoMarca
        },
        handleChangeValue,
        handleCadastrarMarca,
        handleFecharModal,
        handleAcaoTabela,
        handleDeletarMarca
    };
}