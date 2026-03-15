import { Agrupamento } from "../../../shared/components/Agrupamento";
import { Botao } from "../../../shared/components/Botao";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { Tabela } from "../../../shared/components/Tabela";
import { Titulo } from "../../../shared/components/Titulo";
import { useMarca } from "../hooks/useMarca";
import { TabelaMarcas } from "../table/columns";
import { IoAddOutline } from "react-icons/io5";
import type { TModalsMarca } from "../types";
import { ModalFormularioMarca } from "../components/ModalFormularioMarca";
import { useMarcaContext } from "../../../shared/hooks/useMarcaContext";
import { useModalContext } from "../../../shared/hooks/useModalContext";

export const Marca = () => {

    const {
        STATE,
        handleChangeValue,
        handleAcaoTabela
    } = useMarca();

    const {
        marcas
    } = useMarcaContext();

    const {
        modalAberta,
        abrirModal,
    } = useModalContext<TModalsMarca>();

    return(
        <>
            <ContainerGlobal>
                <Agrupamento>
                    <Input
                        onChange={handleChangeValue}
                        value={STATE.filtro}
                        name="filtro"
                        label="Filtro Geral"
                    />

                    <Botao
                        tipoBotao={"quadrado"}
                        Icone={IoAddOutline}
                        onClick={() => abrirModal("CadastrarMarca")}
                    />
                </Agrupamento>
                <Titulo descricao="Marcas" />
                <Tabela
                    dados={marcas}
                    tabelaProps={TabelaMarcas}
                    acaoDaTabela={handleAcaoTabela}
                />
            </ContainerGlobal>

            {modalAberta("CadastrarMarca") && (
                <ModalFormularioMarca />
            )}
        </>
    );
}