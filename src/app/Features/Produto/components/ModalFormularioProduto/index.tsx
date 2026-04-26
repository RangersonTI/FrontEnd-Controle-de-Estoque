import { Botao } from "../../../../shared/components/Botao";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { Select } from "../../../../shared/components/Select";
import { useModalAnimationContext } from "../../../../shared/hooks/useModalAnimationContext";
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
        REF,
        STATE,
        handleMouseMoveDown
    } = useModalAnimationContext();

    const {
        formularioProduto
    } = useProdutosContext();

    return(
        <Modal.Root
            ref={REF.modalRootRef}
            posicaoModal={STATE.posicaoModal}
        >
            <Modal.Header
                fechar={handleFecharFormulario}
                onMouseDown={handleMouseMoveDown}
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
                    label="Marca"
                    onChange={handleChangeValue}
                    opcoes={MEMO.marcaFormatoSelect}
                    value={formularioProduto.codMarca}
                    />

                <Select
                    name="codTipoProduto"
                    label="Tipo de Produto"
                    onChange={handleChangeValue}
                    opcoes={MEMO.tipoDeProdutoFormatoSelect}
                    value={formularioProduto.codTipoProduto}
                />

                <Select
                    label="Unidade de Medida"
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