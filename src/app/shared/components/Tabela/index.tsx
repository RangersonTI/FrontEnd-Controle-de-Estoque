import type { ITabelaPropriedadesProps, ObjetoMapeado } from "../../global/interface"
import type { TTipoAcaoTabela } from "../../global/types";
import { AgrupamentoAcoes, TabelaStyle, TBody, Td, Th, THead, Trow } from "./style";
import { 
    MdEdit,
    MdDelete 
} from "react-icons/md";

interface ITabelaProps {
    tabelaProps: ITabelaPropriedadesProps[];
    dados: ObjetoMapeado[];
    acaoDaTabela: (dado: ObjetoMapeado, tipo: TTipoAcaoTabela) => Promise<any> | any;
}

export const Tabela = ({
    dados,
    tabelaProps,
    acaoDaTabela
}: ITabelaProps) => {
    return(
        <TabelaStyle>
            <THead>
                <Trow>
                    {tabelaProps.map((row) => (
                        <Th>{ row.valor }</Th>
                    ))}
                </Trow>
            </THead>
            <TBody>
                {dados.map((dado) => (
                    <Trow>
                        {tabelaProps.map((row) => (
                            <Td>
                                {row.chave === "acoes"
                                    ?
                                        <AgrupamentoAcoes>
                                            <MdEdit
                                                color="var(--verde)"
                                                onClick={() => acaoDaTabela(dado, "editar")}
                                            />

                                            <MdDelete
                                                color="var(--vermelho)"
                                                onClick={() => acaoDaTabela(dado, "deletar")}
                                            />
                                        </AgrupamentoAcoes>
                                    :
                                        dado[row.chave]
                                }
                            </Td>
                        ))}
                    </Trow>
                ))}
            </TBody>
        </TabelaStyle>
    );
}