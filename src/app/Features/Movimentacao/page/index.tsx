import { Agrupamento } from "../../../shared/components/Agrupamento";
import { Botao } from "../../../shared/components/Botao";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { ImBoxAdd } from "react-icons/im";
import { useMovimentacoes } from "../hooks/useMovimentacoes";
import { useModalContext } from "../../../shared/hooks/useModalContext";
import type { TModalMovimentacao } from "../types";
import { ModalFormularioMovimentacao } from "../components/ModalFormularioMovimentacao";

export const Movimentacao = () => {

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
            </ContainerGlobal>

            {modalAberta("FormularioMovimentacao") && <ModalFormularioMovimentacao/>}
        </>
    );
}