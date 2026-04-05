import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { Select } from "../../../../shared/components/Select";
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
        handleChangeValues,
        handleFecharFormulario
    } = useMovimentacoes();

    return(
        <Modal.Root>
            <Modal.Header
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

                    <Input
                        name=""
                        label="Observação"
                        onChange={handleChangeValues}
                        value={formularioMovimentacao.observacao}
                    />
                </ContainerMovimentacao>
            </Modal.Container>
        </Modal.Root>
    );

}