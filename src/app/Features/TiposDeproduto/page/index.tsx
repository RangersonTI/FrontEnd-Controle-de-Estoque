import { IoAddOutline } from "react-icons/io5";
import { Agrupamento } from "../../../shared/components/Agrupamento";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { useTipoDeProduto } from "../hook/useTipoDeProduto";
import { Botao } from "../../../shared/components/Botao";
import { Titulo } from "../../../shared/components/Titulo";
import { Tabela } from "../../../shared/components/Tabela";
import { TabelaTiposDeProduto } from "../table/columns";

export const TiposDeproduto = () => {

    const {
        STATE,
        handleChangeValue
    } = useTipoDeProduto();

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
            <Titulo descricao="Tipos de Produto" />
            <Tabela
                dados={STATE.tiposDeProduto}
                tabelaProps={TabelaTiposDeProduto}
            />
        </ContainerGlobal>
    );
}