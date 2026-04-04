import { Botao } from "../../../../shared/components/Botao";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { useTiposDeProdutoContext } from "../../../../shared/hooks/useTiposDeProdutoContext";
import { useTiposDeProduto } from "../../hook/useTiposDeProduto";

export const ModalCadastroTipoDeProduto = () => {

    const {
        MEMO,
        TRANSITION,
        handleFecharModal,
        handleChangeValue,
        handleSalvarFormulario
    } = useTiposDeProduto();

    const {
        formularioTiposDeProduto
    } = useTiposDeProdutoContext();

    return(
        <Modal.Root>
            <Modal.Header
                fechar={handleFecharModal}
                titulo={MEMO.tituloModalFormulario}
            />
            <Modal.Container
                gapEntreItens="2rem"
            >
                <Input
                    label="Descrição"
                    name="descricao"
                    onChange={handleChangeValue}
                    value={formularioTiposDeProduto.descricao}
                />

                <Botao
                    onClick={handleSalvarFormulario}
                    descricao={MEMO.tituloBotaoFormulario}
                    isLoading={TRANSITION.estaSalvandoFormulario}
                    isDisabled={TRANSITION.estaSalvandoFormulario}
                />
            </Modal.Container>
        </Modal.Root>
    );
}