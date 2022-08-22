import { FC, HTMLAttributes, ReactNode, useEffect } from 'react';
import * as S from './styles';

export type ModalProps = {
  show: boolean;
  children: ReactNode;
  isLoading?: boolean;
  loadingMessage?: string;
} & HTMLAttributes<HTMLDivElement>;

const Modal: FC<ModalProps> = ({ show, children, className, isLoading, loadingMessage, ...props }) => {
  const message = loadingMessage || 'We are working on your request, please bare with us for a moment...';

  useEffect(() => {
    // eslint-disable-next-line
    console.warn('This component is being deprecated. Please switch to the Modal_v2 component');
    // eslint-disable-next-line
  }, []);

  return show ? (
    <S.Overlay>
      <S.Dialog role="dialog" className={className} {...props}>
        {children}
      </S.Dialog>
      <S.LoadingOverlay show={!!isLoading} aria-hidden={isLoading ? 'false' : 'true'} role="alert" aria-busy="true">
        <p>{message}</p>
      </S.LoadingOverlay>
    </S.Overlay>
  ) : null;
};
export default Modal;
