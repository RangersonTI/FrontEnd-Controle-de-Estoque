import { useEffect, useRef, useState } from "react";

export interface IPosicaoProps {
    x: number | null;
    y: number | null;
}

export const useModalAnimationContext = () => {

    const modalRootRef = useRef<HTMLDivElement>(null);

    const [
        estaArrastandoModal,
        setEstaArrastandoModal,
    ] = useState(false);

    const [
        posicaoModal,
        setPosicaoModal,
    ] = useState<IPosicaoProps>({
        x: null,
        y: null
    });

    const [
        offSet,
        setOffSet,
    ] = useState<IPosicaoProps>({
        x: 0,
        y: 0
    });

    const handleMouseMoveDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!modalRootRef.current) return;

        setEstaArrastandoModal(true);

        setOffSet({
            x: e.clientX - modalRootRef.current.offsetLeft,
            y: e.clientY - modalRootRef.current.offsetTop
        });
    }

    const handleMouseMove = (e: MouseEvent) => {

        if(!estaArrastandoModal) return;

        if(!offSet.x || !offSet.y) return;

        setPosicaoModal({
            x: e.clientX - offSet.x,
            y: e.clientY - offSet.y
        });
    }

    const handleMouseUp = () => 
        setEstaArrastandoModal(false)

    useEffect(
        () => {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            }
        },[estaArrastandoModal, offSet]
    );

    return {
        REF: {
            modalRootRef
        },
        STATE: {
            posicaoModal,
            setPosicaoModal,
        },
        handleMouseMoveDown
    };
}