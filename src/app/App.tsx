import { Flip, ToastContainer } from "react-toastify";
import { RotasApp } from "./routes";
import { GlobalStyle } from "./shared/global/style";
import { HeaderProvider } from "./shared/provider/HeaderProvider";
import { ModalProvider } from "./shared/provider/ModalProvider";
import { MarcasProvider } from "./shared/provider/MarcasProvider/index.tsx";
import { TiposDeProdutoProvider } from "./shared/provider/TiposDeProdutoProvider/index.tsx";
import { ProdutosProvider } from "./shared/provider/ProdutosProvider/index.tsx";
import { UnidadesDeMedidaProvider } from "./shared/provider/UnidadesDeMedidaProvider/index.tsx";
import { MovimentacoesProvider } from "./shared/provider/MovimentacoesProvider/index.tsx";

export default function App() {
  return (
    <ModalProvider>
      <HeaderProvider>
        <UnidadesDeMedidaProvider>
          <TiposDeProdutoProvider>
            <MarcasProvider>
              <ProdutosProvider>
                <MovimentacoesProvider>
                  <GlobalStyle />
                  <RotasApp />
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick={false}
                    pauseOnHover={false}
                    draggable
                    theme="dark"
                    transition={Flip}
                  />
                </MovimentacoesProvider>
              </ProdutosProvider>
            </MarcasProvider>
          </TiposDeProdutoProvider>
        </UnidadesDeMedidaProvider>
      </HeaderProvider>
    </ModalProvider>
  );
}