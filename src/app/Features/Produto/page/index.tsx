import { IoAddOutline } from "react-icons/io5";
import { Agrupamento } from "../../../shared/components/Agrupamento";
import { Botao } from "../../../shared/components/Botao";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { Titulo } from "../../../shared/components/Titulo";
import { Tabela } from "../../../shared/components/Tabela";
import { TabelaProdutos } from "../table/columns";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalProduto } from "../types";
import { ModalFormularioProduto } from "../components/ModalFormularioProduto";
import { useProduto } from "../hook/useProduto";

export const Produto = () => {

    const {
        STATE,
        handleChangeValue,
        handleAcaoDaTabela
    } = useProduto();

    const {
        abrirModal,
        modalAberta
    } = useModalContext<TModalProduto>();

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
                        onClick={() => abrirModal("ModalFormularioProduto")}
                    />
                </Agrupamento>
                <Titulo descricao="Produtos" />
                <Tabela
                    dados={STATE.produtos}
                    tabelaProps={TabelaProdutos}
                    acaoDaTabela={handleAcaoDaTabela}
                />
            </ContainerGlobal>

            {modalAberta("ModalFormularioProduto") && <ModalFormularioProduto/>}
        </>
    );
}