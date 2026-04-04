import { useEffect, useRef, useState } from "react";
import { useHeader } from "../../../hooks/useHeader";
import { EItensMenu } from "../Enum"
import type { TBotaoPressionado, TMenuItemPressionado } from "../../../global/types";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../../../configs";

export const useHeaderHook = () => {

    const {
        setTipoBotaoPressionado,
        setPosicaoMenuExpansivo,
        setTipoMenuItemPressionado
    } = useHeader();

    const [
        menuItens,
        setMenuItens,
    ] = useState<string[]>([]);

    const navigate = useNavigate();

    const buttonCadastroRef = useRef<HTMLButtonElement>(null);
    const buttonVisualizarRef = useRef<HTMLButtonElement>(null);
    const buttonMovimentacoesRef = useRef<HTMLButtonElement>(null);

    // const ehAcaoCadastro = useMemo(
    //     () => tipoBotaoPressionado === "cadastros"
    //     ,[tipoBotaoPressionado]
    // )

    const handleNavegar = (item: string) => {
        switch(item) {
            case EItensMenu.MARCA:
                //ehAcaoCadastro && abrir// ai seta modal como aberta
                navigate(routesConfig.MARCAS);
                break;
            case EItensMenu.PRODUTO:
                //handleVerificaSeEhAcaoCadastro()// ai seta modal como aberta
                navigate(routesConfig.PRODUTOS);
                break;
            case EItensMenu.TIPOPRODUTO:
                //handleVerificaSeEhAcaoCadastro()// ai seta modal como aberta
                navigate(routesConfig.TIPOS_DE_PRODUTO);
                break;
            case EItensMenu.UNIDADEMEDIDA:
                //handleVerificaSeEhAcaoCadastro()// ai seta modal como aberta
                navigate(routesConfig.UNIDADES_DE_MEDIDA);
                break;
            default:
                break;
        }

        setTipoBotaoPressionado(null);
    }

    const handleBotaoClicado = (event: React.MouseEvent<HTMLButtonElement>,) => {

        const id = event.currentTarget.id as TBotaoPressionado;

        const { 
            top: x,
            left: y,
            right
        } = event.currentTarget.getBoundingClientRect();

        setTipoMenuItemPressionado(id as TMenuItemPressionado);

        const tiposBotaoComMenu: TBotaoPressionado[] = ["cadastros", "visualizar"]

        tiposBotaoComMenu.includes(id)
            ? setTipoBotaoPressionado(id)
            : setTipoBotaoPressionado(null)

        setPosicaoMenuExpansivo({
            x: x+40,
            y,
            tamanhoTotal: right - y
        });
    }

    useEffect(
        () => {
            setMenuItens([
                "Marca",
                "Tipo de Produto",
                "Unidade de Medida",
                "Produto"
            ]);
        },[]
    );

    return {
        REF: {
            buttonCadastroRef,
            buttonVisualizarRef,
            buttonMovimentacoesRef
        },
        STATE: {
            menuItens,
            setMenuItens,
        },
        handleBotaoClicado,
        handleNavegar
    };
}