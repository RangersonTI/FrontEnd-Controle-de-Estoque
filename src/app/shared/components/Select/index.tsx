import type { ChangeEvent, HTMLAttributes } from "react";
import { useInput } from "./hook";
import type { ISelectFormatProps } from "../../types";
import { ContainerSelect, LabelFlutuante, Opcao, SelectStyled } from "./style";

interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
    label?: string;
    value: string | number;
    name: string;
    opcoes: ISelectFormatProps[]
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
    onChange,
    value,
    name,
    label,
    opcoes,
    ...rest
}: ISelectProps) => {

    const {
        STATE,
        handleValueEhValido
    } = useInput();

    return(
        <ContainerSelect
            $labelSuspensa={STATE.selectEstaFocada || handleValueEhValido(String(value))}
        >
            <SelectStyled
                onBlur={() => STATE.setSelectEstaFocada(false)}
                onFocus={() => STATE.setSelectEstaFocada(true)}
                value={value}
                name={name}
                onChange={onChange}
                autoComplete="off"
                {...rest}
                defaultValue={""}
            >
                <Opcao value={""}  disabled>
                    { "-" }
                </Opcao>
                {opcoes.map(opc => (
                    <Opcao value={opc.valor}>
                        { opc.chave}
                    </Opcao>
                ))}
            </SelectStyled>
            <LabelFlutuante>
                { label }
            </LabelFlutuante>
        </ContainerSelect>
    );
}