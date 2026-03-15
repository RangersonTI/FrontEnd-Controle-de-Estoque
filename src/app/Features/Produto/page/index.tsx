import { IoAddOutline } from "react-icons/io5";
import { Agrupamento } from "../../../shared/components/Agrupamento";
import { Botao } from "../../../shared/components/Botao";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { useMarca } from "../hook";
import { Titulo } from "../../../shared/components/Titulo";
import { Tabela } from "../../../shared/components/Tabela";
import { TabelaProdutos } from "../table/columns";
export const Produto = () => {

    const {
        STATE,
        handleChangeValue
    } = useMarca();

    return(
        <ContainerGlobal>
            <Agrupamento>
                <Input
                    onChange={handleChangeValue}
                    value={STATE.filtro}
                    name="filtro"
                    label="Filtro Geral"
                />

                <Botao
                    tipoBotao={"quadrado"}
                    Icone={IoAddOutline}
                />
            </Agrupamento>
            <Titulo descricao="Produtos" />
            <Tabela
                dados={STATE.produtos}
                tabelaProps={TabelaProdutos}
            />
        </ContainerGlobal>
    );
}