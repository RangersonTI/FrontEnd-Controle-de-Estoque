import { Agrupamento } from "../../../../shared/components/Agrupamento";
import { Botao } from "../../../../shared/components/Botao";
import { Espacador } from "../../../../shared/components/Espacador";
import { Input } from "../../../../shared/components/Input";
import { Modal } from "../../../../shared/components/Modal";
import { Select } from "../../../../shared/components/Select";
import { Tabela } from "../../../../shared/components/Tabela";
import { Titulo } from "../../../../shared/components/Titulo";
import { useModalAnimationContext } from "../../../../shared/hooks/useModalAnimationContext";
import { useProdutosContext } from "../../../../shared/hooks/useProdutoContext";
import { Converter } from "../../../../shared/Utils/Converter";
import { useProduto } from "../../hook/useProduto";
import { TabelaVariacoesProduto } from "../../table/columns";
import { ContainerFormulario, FormularioVariacoesProduto, VaricaoDescricao } from "./style";

export const ModalFormularioProduto = () => {

    const {
        MEMO,
        STATE: STATEPRODUTO,
        TRANSITION,
        handleChangeValue,
        handleSalvarFormulario,
        handleFecharFormulario,
        handleAdicionarNovaVariacaoLista
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

            <Modal.Container
                gapEntreItens="0.6rem"
            >
                <ContainerFormulario>
                    <Input
                        name="descricao"
                        label="Descrição"
                        onChange={handleChangeValue}
                        value={formularioProduto.descricao}
                        autoFocus
                    />

                    <Agrupamento>
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
                    </Agrupamento>

                    <Input
                        name=""
                        label="Produto com Variação"
                        onChange={(e) => 
                            STATEPRODUTO.setFlagPossuiVariacao(e.target.checked)
                        }
                        value={
                            Converter.booleanoParaString(STATEPRODUTO.flagPossuiVariacao)
                        }
                        type="checkbox"
                        autoFocus
                    />

                </ContainerFormulario>

                {STATEPRODUTO.flagPossuiVariacao &&
                    <FormularioVariacoesProduto>
                        <VaricaoDescricao>Variação</VaricaoDescricao>

                        <Agrupamento>
                            <Input
                                name="descricaoVariacao"
                                label="Descrição da Variacão"
                                onChange={(e) => 
                                    STATEPRODUTO.setDescricaoVariacao(e.target.value)
                                }
                                value={STATEPRODUTO.descricaoVariacao}
                                autoFocus
                            />

                            <Botao
                                descricao="Adicionar"
                                tipoBotao="normal"
                                onClick={handleAdicionarNovaVariacaoLista}
                            />
                        </Agrupamento>
                        <Espacador altura="15px"/>
                        <Tabela
                            acaoDaTabela={()=>{}}
                            dados={[]}
                            tabelaProps={TabelaVariacoesProduto}
                            
                        />
                    </FormularioVariacoesProduto>
                }

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