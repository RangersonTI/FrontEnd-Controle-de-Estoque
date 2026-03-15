import { useContext } from "react";
import { ModalContext } from "../provider/ModalProvider";

export const useModalContext = <T>() => {

    const {
        modaisAberto,
        setModaisAberto
    } = useContext(ModalContext);

    const modalAberta = (tipoModal: T) =>
        modaisAberto.includes(String(tipoModal));

    const fecharModal = (tipoModal: T) =>
        setModaisAberto(p => p.filter(p => p !== tipoModal))

    const abrirModal = (tipoModal: T) =>
        setModaisAberto(p => [...p, String(tipoModal)])

    return {
        modalAberta,
        fecharModal,
        abrirModal
    };
}