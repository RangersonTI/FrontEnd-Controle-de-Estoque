import { EspacadorEstilizado } from "./style";

interface IEspacadorProps {
    altura: string;
}

export const Espacador = ({
    altura
}: IEspacadorProps) => {
    return(
        <EspacadorEstilizado
            $altura={altura}
        />
    );
}