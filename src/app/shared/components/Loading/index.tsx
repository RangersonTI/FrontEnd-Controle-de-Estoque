import { LoadingStyled } from "./style";
interface ILoadingProps {
    tamanho?: number;
}

export const Loading = ({tamanho}: ILoadingProps) => <LoadingStyled $tamanho={tamanho}/>