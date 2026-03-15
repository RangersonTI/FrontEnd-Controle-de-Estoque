import type { ChangeEvent, HTMLAttributes } from "react";
import { ContainerInput, InputStyled, LabelFlutuante } from "./style";
import { useInput } from "./hook";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    onChange,
    value,
    name,
    label,
    ...rest
}: IInputProps) => {

    const {
        STATE,
        handleValueEhValido
    } = useInput();

    return(
        <ContainerInput
            $labelSuspensa={STATE.inputEstaFocada || handleValueEhValido(value)}
        >
            <InputStyled
                onBlur={() => STATE.setInputEstaFocada(false)}
                onFocus={() => STATE.setInputEstaFocada(true)}
                value={value}
                name={name}
                onChange={onChange}
                autoComplete="off"
                {...rest}
            />
            <LabelFlutuante >
                { label }
            </LabelFlutuante>
        </ContainerInput>
    );
}