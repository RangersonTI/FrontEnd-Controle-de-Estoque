import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Botao } from "../../../../shared/components/Botao";
import { Espacador } from "../../../../shared/components/Espacador";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { Tabela } from "../../../../shared/components/Tabela";
import { useModalAnimationContext } from "../../../../shared/hooks/useModalAnimationContext";
import { useProdutosContext } from "../../../../shared/hooks/useProdutoContext";
import { useVariacoesProduto } from "../../hook/useVariacoesProduto";
import { TabelaVariacoesProduto } from "../../table/columns";
import { VariacoesContainer } from "./style";
import { IoIosSave } from "react-icons/io";

export const ModalGerenciamentoVariacoesProduto = () => {

    const {
        REF,
        STATE,
        handleMouseMoveDown,
    } = useModalAnimationContext();

    const {
        variacoesPorProduto
    } = useProdutosContext();

    const {
        STATE: STATEVARIACOES,
        handleFecharModalGerenciamentoVariacoesProduto,
        handleAcaoTabelaVariacoesProduto,
        handleChangeCampoDescricaoVariacao,
        handleSalvarVariacaoProduto
    } = useVariacoesProduto();

    return (
        <Modal.Root
            ref={REF.modalRootRef}
            posicaoModal={STATE.posicaoModal}
        >
            <Modal.Header 
                fechar={handleFecharModalGerenciamentoVariacoesProduto}
                titulo="Gerenciamento de Variações do Produto"
                onMouseDown={handleMouseMoveDown}
            />

            <Modal.Container
                gapEntreItens="0.6rem"
            >
                <VariacoesContainer>
                    <Tabela
                        acaoDaTabela={handleAcaoTabelaVariacoesProduto}
                        dados={variacoesPorProduto}
                        tabelaProps={TabelaVariacoesProduto}
                        // ocultarHeader
                        corHeaderInverso={true}
                    />
                    <Espacador altura="40px"/>
                    <Agrupamento>
                        <Input
                            label="Descrição da Variação"
                            name=""
                            onChange={handleChangeCampoDescricaoVariacao}
                            value={STATEVARIACOES.descricaoVariacao}
                        />

                        <Botao
                            tipoBotao="quadrado"
                            Icone={IoIosSave}
                            onClick={handleSalvarVariacaoProduto}
                        />
                    </Agrupamento>
                </VariacoesContainer>
            </Modal.Container>
        </Modal.Root>
    );
}