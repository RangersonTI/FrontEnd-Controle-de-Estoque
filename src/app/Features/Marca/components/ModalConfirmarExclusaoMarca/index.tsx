import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Botao } from "../../../../shared/components/Botao";
import { Modal } from "../../../../shared/components/Modal";
import { useMarcaContext } from "../../../../shared/hooks/useMarcaContext";
import { useMarca } from "../../hooks/useMarca";
import { Descricao } from "./style";

export const ModalConfirmarExclusaoMarca = () => {

    const {
        marcaSelecionada,
    } = useMarcaContext();

    const {
        TRANSITION,
        handleDeletarMarca,
        handleFecharModal
    } = useMarca();

    return(
      <Modal.Root>
        <Modal.Header 
            fechar={handleFecharModal}
            titulo="Exclusão de Marca"
        />
        <Modal.Container>
            <Descricao>
                Confirmar a exclusão da marca <strong>{marcaSelecionada.Descricao}</strong>?
            </Descricao>
            <Agrupamento>
                <Botao
                    descricao="Cancelar"
                    onClick={handleFecharModal}
                    isFlex
                />

                <Botao
                    descricao="Confirmar"
                    isLoading={TRANSITION.estaDeletandoMarca}
                    isDisabled={TRANSITION.estaDeletandoMarca}
                    onClick={handleDeletarMarca}
                    isFlex
                    corInversa
                />
            </Agrupamento>
        </Modal.Container>
      </Modal.Root>  
    );
}