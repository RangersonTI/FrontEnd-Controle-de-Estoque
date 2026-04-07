import { Agrupamento } from "../../../shared/components/Agrupamento";
import { Botao } from "../../../shared/components/Botao";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { ImBoxAdd } from "react-icons/im";
import { useMovimentacoes } from "../hooks/useMovimentacoes";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalMovimentacao } from "../types";
import { ModalFormularioMovimentacao } from "../components/ModalFormularioMovimentacao";
import { Tabela } from "../../../shared/components/Tabela";
import { TabelaMovimentacoes } from "../table/columns";
import { useMovimentacoesContext } from "../../../shared/hooks/useMovimentacoesContext";

export const Movimentacao = () => {

    const {
        movimentacoesEstoque
    } = useMovimentacoesContext();

    const {
        STATE,
        handleChangeValues
    } = useMovimentacoes();

    const {
        modalAberta,
        abrirModal
    } = useModalContext<TModalMovimentacao>();

    return (
        <>
            <ContainerGlobal>
                <Agrupamento>
                    <Input
                        name="filtro"
                        onChange={handleChangeValues}
                        value={STATE.filtro}
                        label="Filtro"
                    />

                    <Botao
                        Icone={ImBoxAdd}
                        onClick={() => abrirModal("FormularioMovimentacao")}
                    />
                </Agrupamento>

                <Tabela
                    acaoDaTabela={()=>{}}
                    dados={movimentacoesEstoque}
                    tabelaProps={TabelaMovimentacoes}
                />
            </ContainerGlobal>

            {modalAberta("FormularioMovimentacao") && <ModalFormularioMovimentacao/>}
        </>
    );
}