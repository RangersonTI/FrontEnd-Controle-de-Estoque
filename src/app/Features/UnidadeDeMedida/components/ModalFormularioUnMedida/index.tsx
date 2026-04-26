import { Botao } from "../../../../shared/components/Botao";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { useModalAnimationContext } from "../../../../shared/hooks/useModalAnimationContext";
import { useUnidadesDeMedidaContext } from "../../../../shared/hooks/useUnidadesDeMedidaContext";
import { useUnidadeDeMedida } from "../../hook/useUnidadeDeMedida";

export const ModalFormularioUnMedida = () => {

    const {
        MEMO,
        TRANSITION,
        handleFecharModal,
        handleChangeValue,
        handleSalvarFormulario
    } = useUnidadeDeMedida();

    const {
        formularioUnMedida
    } = useUnidadesDeMedidaContext();

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
                fechar={handleFecharModal}
                titulo={MEMO.tituloModalFormulario}
            />

            <Modal.Container
                gapEntreItens="2rem"
            >
                <Input
                    name="descricao"
                    label="Descrição"
                    onChange={handleChangeValue}
                    value={formularioUnMedida.descricao}
                    autoFocus
                />

                <Input
                    name="sigla"
                    label="Sigla"
                    onChange={handleChangeValue}
                    value={formularioUnMedida.sigla}
                />

                <Botao
                    descricao={MEMO.tituloBotaoFormulario}
                    isLoading={TRANSITION.estaSalvandoFormulario}
                    isDisabled={TRANSITION.estaSalvandoFormulario}
                    onClick={handleSalvarFormulario}
                />
            </Modal.Container>
        </Modal.Root>
    );
}