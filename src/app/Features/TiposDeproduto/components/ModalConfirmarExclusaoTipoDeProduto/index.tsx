import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Botao } from "../../../../shared/components/Botao";
import { Modal } from "../../../../shared/components/Modal";
import { useTiposDeProdutoContext } from "../../../../shared/hooks/useTiposDeProdutoContext";
import { useTiposDeProduto } from "../../hook/useTiposDeProduto";
import { Descricao } from "./style";

export const ModalConfirmarExclusaoTipoDeProduto = () => {

    const {
        tiposDeProdutoSelecionado
    } = useTiposDeProdutoContext();

    const {
        TRANSITION,
        handleDeletarTipoDeProduto,
        handleFecharModal
    } = useTiposDeProduto();

    return(
      <Modal.Root>
        <Modal.Header 
            fechar={handleFecharModal}
            titulo="Exclusão de Tipo de Produto"
        />
        <Modal.Container>
            <Descricao>
                Confirmar a exclusão do tipo de produto <strong>{tiposDeProdutoSelecionado.Descricao}</strong>?
            </Descricao>
            <Agrupamento>
                <Botao
                    descricao="Cancelar"
                    onClick={handleFecharModal}
                    isFlex
                />

                <Botao
                    descricao="Confirmar"
                    isLoading={TRANSITION.estaDeletandoTipoDeProduto}
                    isDisabled={TRANSITION.estaDeletandoTipoDeProduto}
                    onClick={handleDeletarTipoDeProduto}
                    isFlex
                    corInversa
                />
            </Agrupamento>
        </Modal.Container>
      </Modal.Root>  
    );
}