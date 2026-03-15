import { IoAddOutline } from "react-icons/io5";
import { Agrupamento } from "../../../shared/components/Agrupamento";
import { Botao } from "../../../shared/components/Botao";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { Titulo } from "../../../shared/components/Titulo";
import { useUnidadeDeMedida } from "../hook/useUnidadeDeMedida";
import { Tabela } from "../../../shared/components/Tabela";
import { TabelaUnidadesDeMedida } from "../table/columns";

export const UnidadeDeMedida = () => {

    const {
        STATE,
        handleChangeValue
    } = useUnidadeDeMedida();

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
            <Titulo descricao="Unidades de Medida"/>
            <Tabela
                dados={STATE.unidadesDeMedida}
                tabelaProps={TabelaUnidadesDeMedida}
            />
        </ContainerGlobal>
    );
}