import { useState } from "react";
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
    chaveLinhaSelecionado?: string;
    ocultarHeader?: boolean;
    corHeaderInverso?: boolean;
}

export const Tabela = ({
    dados,
    tabelaProps,
    acaoDaTabela,
    chaveLinhaSelecionado = "",
    ocultarHeader = false,
    corHeaderInverso = false,
}: ITabelaProps) => {

    const [
        linhaSelecionada,
        setLinhaSelecionada,
    ] = useState<number | null>(null)

    return(
        <TabelaStyle>
            {!ocultarHeader &&
                <THead
                    $corHeaderInverso={corHeaderInverso}
                >
                    <Trow
                        onClick={() => setLinhaSelecionada(null)}
                    >
                        {tabelaProps.map((row) => (
                            <Th>{ row.valor }</Th>
                        ))}
                    </Trow>
                </THead>
            }
            <TBody>
                {dados.map((dado) => (
                    <Trow
                        onClick={() => setLinhaSelecionada(dado[chaveLinhaSelecionado])}
                    >
                        {tabelaProps.map((row) => (
                            <Td 
                                $alinhamento={row.propriedades?.alinhamento}
                                $selecionado={Number(dado[chaveLinhaSelecionado]) === linhaSelecionada}
                            >
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
                                        dado[row.chave] ?? "-"
                                }
                            </Td>
                        ))}
                    </Trow>
                ))}
            </TBody>
        </TabelaStyle>
    );
}