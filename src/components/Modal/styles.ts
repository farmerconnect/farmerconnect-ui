import styled, { keyframes } from 'styled-components';
import InlineLoader from '../InlineLoader';

const showOverlay = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(20, 20, 20, 0.6);
  animation: ${showOverlay} 0.3s ease-out;
  z-index: 101;
`;

const showDialog = keyframes`
0% {
  transform: translateY(1rem);
}
100% {
  transform: translateY(0);
}
`;

export const DialogWrapper = styled.div`
  position: relative;
`;

export const Dialog = styled.div`
  background-color: white;
  padding: 2.25rem;
  border-radius: 0.75rem;
  animation: ${showDialog} 0.3s ease-out;
`;

type LoadingOverlayProps = {
  show: boolean;
};
export const LoadingOverlay = styled(InlineLoader)<LoadingOverlayProps>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'unset' : 'none')};
  position: absolute;
  inset: 0 0 0 0;
  border-radius: 0.75rem;
  transition: opacity 0.2s ease-out;
  background-color: rgba(20, 20, 20, 0.6);
  > svg {
    height: 2rem;
    width: auto;
  }
  > p {
    font-size: 1.125rem;
    color: #fff;
    line-height: 1.5;
    max-width: 21rem;
    font-weight: 400;
  }
`;
