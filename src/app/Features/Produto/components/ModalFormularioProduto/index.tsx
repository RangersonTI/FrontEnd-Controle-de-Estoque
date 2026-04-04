import { Botao } from "../../../../shared/components/Botao";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { Select } from "../../../../shared/components/Select";
import { useProdutosContext } from "../../../../shared/hooks/useProdutoContext";
import { useProduto } from "../../hook/useProduto";

export const ModalFormularioProduto = () => {

    const {
        MEMO,
        TRANSITION,
        handleChangeValue,
        handleSalvarFormulario,
        handleFecharFormulario
    } = useProduto();

    const {
        formularioProduto
    } = useProdutosContext();

    return(
        <Modal.Root>
            <Modal.Header
                fechar={handleFecharFormulario}
                titulo={MEMO.tituloFormularioProduto}
            />

            <Modal.Container>
                <Input
                    name="descricao"
                    label="Descrição"
                    onChange={handleChangeValue}
                    value={formularioProduto.descricao}
                    autoFocus
                />

                <Select
                    name="codMarca"
                    onChange={handleChangeValue}
                    opcoes={MEMO.marcaFormatoSelect}
                    value={formularioProduto.codMarca}
                />

                <Select
                    name="codTipoProduto"
                    onChange={handleChangeValue}
                    opcoes={MEMO.tipoDeProdutoFormatoSelect}
                    value={formularioProduto.codTipoProduto}
                />

                <Select
                    name="codUnidadeDeMedida"
                    onChange={handleChangeValue}
                    opcoes={MEMO.unidadesDeMedidaFormatoSelect}
                    value={formularioProduto.codUnidadeDeMedida}
                />

                <Botao
                    descricao={MEMO.descricaoBotaoFormulario}
                    isDisabled={TRANSITION.estaSalvandoFormulario}
                    isLoading={TRANSITION.estaSalvandoFormulario}
                    onClick={handleSalvarFormulario}
                />
            </Modal.Container>
        </Modal.Root>
    );
}