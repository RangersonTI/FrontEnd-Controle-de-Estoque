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
        handleFecharModalFormulario
    } = useMarca();

    return(
        <Modal.Root>
            <Modal.Header
                fechar={handleFecharModalFormulario}
                titulo="Cadastro de Marca"
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
                    isLoading={TRANSITION.estaCadastrandoMarca}
                    descricao={MEMO.descricaoBotaoFormularioMarca}
                    onClick={handleCadastrarMarca}
                />
            </Modal.Container>
        </Modal.Root>
    );
}