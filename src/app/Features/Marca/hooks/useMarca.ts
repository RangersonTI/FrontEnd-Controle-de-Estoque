import { useEffect, useMemo, useState, useTransition, type ChangeEvent } from "react";
import { MarcasController } from "../../../shared/services/MarcasController";
import type { TModalsMarca } from "../types";
import { toast } from "react-toastify";
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
        filtro,
        setFiltro
    ] = useState("");

    const descricaoBotaoFormularioMarca = useMemo(
        () => marcaSelecionada.CodMarca ? "Editar" : "Salvar"
        ,[marcaSelecionada]
    );

    const handleFecharModalFormulario = () => {
        setMarcaSelecionada({} as IMarcasData);
        setFormularioMarca({} as IFormularioMarcaState);
        fecharModal("CadastrarMarca");
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
                
                const marcaEditada = await MarcasController.Editar({
                    Descricao: descricao
                });

                setMarcas(p => ([
                    ...p.filter(m => m.CodMarca !== marcaSelecionada.CodMarca),
                    marcaEditada
                ]))

                toast.success("Marca cadastrada com sucesso!");

                fecharModal("CadastrarMarca");
            });
        else
                cadastrarMarca(async() => {
            try {

                const marcaCadastrada = await MarcasController.Cadastrar({
                    Descricao: descricao
                    });
        
                    setMarcas(p => ([...p, marcaCadastrada]));
                    
                    Notificar.Sucesso("Marca editar com sucesso!");

                    fecharModal("CadastrarMarca");
                } 
                catch (error) {
                    Notificar.ErrorApi(error);
                }
            });

        setMarcaSelecionada({} as IMarcasData);
        setFormularioMarca({} as IFormularioMarcaState);
    }

    const handleAcaoTabela = (dado: ObjetoMapeado, tipo: TTipoAcaoTabela) => {
        
        const marca = dado as IMarcasData;
        setMarcaSelecionada(marca);

        switch(tipo) {
            case "editar":
                abrirModal("CadastrarMarca");
                setFormularioMarca({
                    descricao: marca.Descricao
                });
                break;
            case "deletar":
                break;
            default: break;

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
            descricaoBotaoFormularioMarca
        },
        TRANSITION: {
            estaCadastrandoMarca
        },
        handleChangeValue,
        handleCadastrarMarca,
        handleFecharModalFormulario,
        handleAcaoTabela
    };
}