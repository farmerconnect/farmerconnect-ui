import { AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { useEffect } from 'react';
import { FC } from 'react';
import Close from '../Icons/Close';
import * as S from './styles';

export type ModalProps = {
  show?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  closeOnKey?: string | string[] | false;
} & HTMLMotionProps<'div'>;

const transitionIn = {
  duration: 0.3,
  ease: 'easeOut',
};

const transitionOut = { ...transitionIn, duration: 0.2 };

const variants = {
  showOverlay: { opacity: 1, transition: transitionIn },
  hideOverlay: { opacity: 0, transition: transitionOut },
  showDialog: { y: 0, transition: transitionIn },
  hideDialog: { y: 16, transition: transitionOut },
};

const Modal: FC<ModalProps> = ({
  show = false,
  children,
  closeOnKey = false,
  showCloseButton = false,
  onClose = () => {},
  ...props
}) => {
  const handleKeyboardClose = (e: KeyboardEvent) => {
    if (Array.isArray(closeOnKey)) {
      if (closeOnKey.includes(e.key)) onClose();
    } else if (e.key === closeOnKey) onClose();
  };

  useEffect(() => {
    if (closeOnKey) {
      window.addEventListener('keydown', handleKeyboardClose);
    } else {
      window.removeEventListener('keydown', handleKeyboardClose);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyboardClose);
    };
    // eslint-disable-next-line
  }, [closeOnKey]);

  return (
    <AnimatePresence>
      {show ? (
        <S.Overlay variants={variants} animate="showOverlay" initial="hideOverlay" exit="hideOverlay">
          <S.Container
            variants={variants}
            animate="showDialog"
            exit="hideDialog"
            initial="hideDialog"
            {...props}
            role="dialog"
          >
            {showCloseButton && (
              <S.CloseButton onClick={onClose} tabIndex={0}>
                <Close fill="currentColor" />
              </S.CloseButton>
            )}
            {children}
          </S.Container>
        </S.Overlay>
      ) : null}
    </AnimatePresence>
  );
};
export default Modal;
