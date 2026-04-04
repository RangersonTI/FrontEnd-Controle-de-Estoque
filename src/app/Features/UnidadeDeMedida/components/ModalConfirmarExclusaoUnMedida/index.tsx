import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Botao } from "../../../../shared/components/Botao";
import { Modal } from "../../../../shared/components/Modal";
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

    return(
      <Modal.Root>
        <Modal.Header 
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