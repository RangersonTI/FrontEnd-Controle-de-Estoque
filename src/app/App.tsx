import { Bounce, Flip, ToastContainer, Zoom } from "react-toastify";
import { RotasApp } from "./routes";
import { GlobalStyle } from "./shared/global/style";
import { HeaderProvider } from "./shared/provider/HeaderProvider";
import { ModalProvider } from "./shared/provider/ModalProvider";
import { MarcasProvider } from "./shared/provider/MarcasProvider/index.tsx";

export default function App() {
  return (
    <ModalProvider>
      <HeaderProvider>
        <MarcasProvider>
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
        </MarcasProvider>
      </HeaderProvider>
    </ModalProvider>
  );
}