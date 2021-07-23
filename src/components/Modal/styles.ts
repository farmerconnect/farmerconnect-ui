import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  background-color: white;
  padding: 2.25rem;
  border-radius: 0.75rem;
  animation: ${showDialog} 0.3s ease-out;
`;
