import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Botao } from "../../../../shared/components/Botao";
import { Modal } from "../../../../shared/components/Modal";
import { useModalAnimationContext } from "../../../../shared/hooks/useModalAnimationContext";
import { useUnidadesDeMedidaContext } from "../../../../shared/hooks/useUnidadesDeMedidaContext";
import { useUnidadeDeMedida } from "../../hook/useUnidadeDeMedida";
import { Descricao } from "./style";

export const ModalConfirmarExclusaoUnMedida = () => {

    const {
        TRANSITION,
        handleFecharModal,
        handleDeletarUnidadeDeMedida
    } = useUnidadeDeMedida();

    const {
        unidadesDeMedidaSelecionada
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
            titulo="Exclusão de Tipo de Produto"
        />
        <Modal.Container>
            <Descricao>
                Confirmar a exclusão da unidade de medida <strong>{unidadesDeMedidaSelecionada.Descricao}</strong>?
            </Descricao>
            <Agrupamento>
                <Botao
                    descricao="Cancelar"
                    onClick={handleFecharModal}
                    isFlex
                />

                <Botao
                    descricao="Confirmar"
                    isLoading={TRANSITION.estaDeletandoUnMedida}
                    isDisabled={TRANSITION.estaDeletandoUnMedida}
                    onClick={handleDeletarUnidadeDeMedida}
                    isFlex
                    corInversa
                />
            </Agrupamento>
        </Modal.Container>
      </Modal.Root>  
    );
}