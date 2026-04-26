import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Botao } from "../../../../shared/components/Botao";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { Select } from "../../../../shared/components/Select";
import { useModalAnimationContext } from "../../../../shared/hooks/useModalAnimationContext";
import {
    useMovimentacoesContext
} from "../../../../shared/hooks/useMovimentacoesContext";
import { useMovimentacoes } from "../../hooks/useMovimentacoes";
import { ContainerMovimentacao } from "./style";

export const ModalFormularioMovimentacao = () => {
    
    const {
        formularioMovimentacao
    } = useMovimentacoesContext();

    const {
        MEMO,
        TRANSITION,
        handleChangeValues,
        handleFecharFormulario,
        handleRealizarMovimentacaoEstoque
    } = useMovimentacoes();

    const {
        REF,
        STATE,
        handleMouseMoveDown
    } = useModalAnimationContext();

    return(
        <Modal.Root
            ref={REF.modalRootRef}
            posicaoModal={STATE.posicaoModal}
        >
            <Modal.Header
                onMouseDown={handleMouseMoveDown}
                fechar={handleFecharFormulario}
                titulo="Movimentação de Estoque"
            />

            <Modal.Container>
                <ContainerMovimentacao>
                    <Select
                        name="codProd"
                        label="Produto"
                        onChange={handleChangeValues}
                        value={formularioMovimentacao.codProd}
                        opcoes={MEMO.produtosSelectFormat}
                    />

                    <Agrupamento>
                        <Select
                            name="tipoMovimentacao"
                            label="Tipo de Movimentação"
                            onChange={handleChangeValues}
                            opcoes={MEMO.tiposMovimentacaoSelectFormat}
                            value={formularioMovimentacao.tipoMovimentacao}
                        />

                        <Input
                            name="qtdAMovimentar"
                            label="Quantidade"
                            onChange={handleChangeValues}
                            value={formularioMovimentacao.qtdAMovimentar}
                        />
                    </Agrupamento>

                    {formularioMovimentacao.tipoMovimentacao === 1 &&
                        <Input
                            name="dataArmazenagem"
                            label="Data de Armazenagem"
                            onChange={handleChangeValues}
                            value={formularioMovimentacao.dataArmazenagem}
                            type="date"
                        />
                    }

                    {formularioMovimentacao.tipoMovimentacao === 2 &&
                        <Input
                            name="dataSaida"
                            label="Data de Saída"
                            onChange={handleChangeValues}
                            value={formularioMovimentacao.dataSaida}
                            type="date"
                        />
                    }

                    {formularioMovimentacao.tipoMovimentacao === 2 &&
                        <Select
                            name="codMovimentacaoEntrada"
                            label="Movimentação Entrada Ref."
                            opcoes={MEMO.movimentacoesEntradaSelectFormat}
                            onChange={handleChangeValues}
                            value={formularioMovimentacao.codMovimentacaoEntrada ?? ""}
                        />
                    }

                    <Input
                        name="observacao"
                        label="Observação"
                        onChange={handleChangeValues}
                        value={formularioMovimentacao.observacao}
                    />

                    <Botao
                        descricao="Salvar Movimentação"
                        onClick={handleRealizarMovimentacaoEstoque}
                        isLoading={TRANSITION.estaRealizandoMovimentacao}
                        isDisabled={TRANSITION.estaRealizandoMovimentacao}
                    />
                </ContainerMovimentacao>
            </Modal.Container>
        </Modal.Root>
    );

}