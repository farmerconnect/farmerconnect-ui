import { FC, HTMLProps, ReactNode } from "react";
import * as S from "./styles";

export type ModalProps = {
  show: boolean;
  children: ReactNode;
} & HTMLProps<HTMLDivElement>;

const Modal: FC<ModalProps> = ({ show, children, className, ...props }) =>
  show ? (
    <S.Overlay>
      <S.Container className={className}>{children}</S.Container>
    </S.Overlay>
  ) : null;
export default Modal;
