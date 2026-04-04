import { Botao } from "../../../../shared/components/Botao";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { useMarcaContext } from "../../../../shared/hooks/useMarcaContext";
import { useMarca } from "../../hooks/useMarca";

export const ModalFormularioMarca = () => {

    const {
        formularioMarca,
    } = useMarcaContext();

    const {
        TRANSITION,
        MEMO,
        handleChangeValue,
        handleCadastrarMarca,
        handleFecharModal
    } = useMarca();

    return(
        <Modal.Root>
            <Modal.Header
                fechar={handleFecharModal}
                titulo={MEMO.tituloModalFormularioMarca}
            />
            <Modal.Container
                gapEntreItens="2rem"
            >
                <Input
                    name="descricao"
                    onChange={handleChangeValue}
                    value={formularioMarca.descricao}
                    label="Descrição"
                    autoFocus
                />

                <Botao
                    isLoading={TRANSITION.estaCadastrandoMarca || TRANSITION.estaEditandoMarca}
                    isDisabled={TRANSITION.estaCadastrandoMarca || TRANSITION.estaEditandoMarca}
                    descricao={MEMO.descricaoBotaoFormularioMarca}
                    onClick={handleCadastrarMarca}
                />
            </Modal.Container>
        </Modal.Root>
    );
}