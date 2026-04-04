import { Agrupamento } from "../../../shared/components/Agrupamento";
import { Botao } from "../../../shared/components/Botao";
import { ContainerGlobal } from "../../../shared/components/ContainerGlobal";
import { Input } from "../../../shared/components/Input";
import { ImBoxAdd } from "react-icons/im";

export const Movimentacao = () => {
    return (
        <ContainerGlobal>
            <Agrupamento>
                <Input
                    name="filtro"
                    onChange={()=>{}}
                    value=""
                    label="Filtro"
                />

                <Botao
                    Icone={ImBoxAdd}
                />
            </Agrupamento>

        </ContainerGlobal>
    );
}