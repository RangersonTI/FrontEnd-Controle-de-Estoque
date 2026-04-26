import { type HTMLAttributes, type ReactNode, type RefObject } from "react";
import { FundoModal, RootModalStyle } from "../style";
import type { IPosicaoProps } from "../../../hooks/useModalAnimationContext";

interface IModalRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    posicaoModal?: IPosicaoProps;
    ref?: RefObject<HTMLDivElement | null>
}

export const ModalRoot = ({
    children,
    posicaoModal,
    ref
}: IModalRootProps) => {
    return(
        <FundoModal>
            <RootModalStyle
                ref={ref}
                $posicaoEsquerda={posicaoModal?.x}
                $posicaoTopo={posicaoModal?.y}
            >
                { children }
            </RootModalStyle>
        </FundoModal>
    );
}

// export const ModalRoot1 = forwardRef<>(({
//     children,
//     posicaoModal
// }: IModalRootProps, ref) => {
//     return(
//         <FundoModal>
//             <RootModalStyle
//                 $posicaoEsquerda={posicaoModal?.x}
//                 $posicaoTopo={posicaoModal?.y}
//             >
//                 { children }
//             </RootModalStyle>
//         </FundoModal>
//     );
// });