import { IoAddOutline } from "react-icons/io5";
import { Agrupamento } from "../../../shared/components/Agrupamento";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { Botao } from "../../../shared/components/Botao";
import { Titulo } from "../../../shared/components/Titulo";
import { Tabela } from "../../../shared/components/Tabela";
import { TabelaTiposDeProduto } from "../table/columns";
import { useTiposDeProdutoContext } from "../../../shared/hooks/useTiposDeProdutoContext";
import { useTiposDeProduto } from "../hook/useTiposDeProduto";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalTiposDeProduto } from "../types";
import { ModalCadastroTipoDeProduto } from "../components/ModalCadastroTipoDeProduto";
import { ModalConfirmarExclusaoTipoDeProduto } from "../components/ModalConfirmarExclusaoTipoDeProduto";

export const TiposDeproduto = () => {

    const {
        abrirModal,
        modalAberta
    } = useModalContext<TModalTiposDeProduto>();

    const {
        tiposDeProduto,
    } = useTiposDeProdutoContext();

    const {
        STATE,
        handleChangeValue,
        handleAcaoDaTabela
    } = useTiposDeProduto();

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
                        onClick={() => abrirModal("FormularioTipoDeProduto")}
                    />
                </Agrupamento>
                <Titulo descricao="Tipos de Produto" />
                <Tabela
                    dados={tiposDeProduto}
                    tabelaProps={TabelaTiposDeProduto}
                    acaoDaTabela={handleAcaoDaTabela}
                />
            </ContainerGlobal>

            {modalAberta("FormularioTipoDeProduto") &&
                <ModalCadastroTipoDeProduto />
            }

            {modalAberta("ConfirmarExclusaoTipoDeProduto") &&
                <ModalConfirmarExclusaoTipoDeProduto />
            }
        </>
    );
}