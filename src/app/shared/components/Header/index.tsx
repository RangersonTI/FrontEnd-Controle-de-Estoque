import { NomeAplicacao } from "../../assets";
import { useHeaderHook } from "./hooks/useHeader";
import { Container, Img, Opcoes } from "./style";
import { Button } from "./Utils/Button";
import { FaArrowsRotate } from "react-icons/fa6";
import { Menu } from "./Utils/Menu";
import { routesConfig } from "../../configs";
import { useNavigate } from "react-router-dom";
import { useHeader } from "../../hooks/useHeader";

export const Header = () => {

    const {
        REF,
        handleBotaoClicado
    } = useHeaderHook();

    const {
        tipoBotaoPressionado,
    } = useHeader();

    const navigate = useNavigate();

    return(
        <Container>
            <Img
                src={NomeAplicacao}
                alt="Nome da Aplicação"
                onClick={() => navigate(routesConfig.INICIO)}
            />
            <Opcoes onClick={e => e.stopPropagation()}>
                <Button
                    descricao="Cadastros"
                    tipoBotaoPressionado={"cadastros"}
                    ref={REF.buttonCadastroRef}
                    onClick={handleBotaoClicado}
                    botaoExpansivo
                />

                <Button
                    descricao="Visualizar"
                    tipoBotaoPressionado={"visualizar"}
                    ref={REF.buttonVisualizarRef}
                    onClick={handleBotaoClicado}
                    botaoExpansivo
                />

                <Button
                    descricao="Movimentações"
                    tipoBotaoPressionado={"movimentacoes"}
                    ref={REF.buttonMovimentacoesRef}
                    onClick={handleBotaoClicado}
                    Icone={FaArrowsRotate}
                    rotaNavegacao={routesConfig.MOVIMENTACOES}
                />
            </Opcoes>
            {tipoBotaoPressionado && <Menu />}
        </Container>
    );
}