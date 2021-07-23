import styled, { keyframes } from 'styled-components';

const jumpingDot = keyframes`
0% {
  opacity: 0.4;
  transform: translateY(0);
}
30% {
  opacity: 1;
  transform: translateY(-5px);
}
60% {
  opacity: 0.4;
  transform: translateY(0);
}
100% {
  opacity: 0.4;
  transform: translateY(0);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: #141414;
  font-size: 0.6875rem;
  .animate-dot1 {
    opacity: 0.4;
    animation: ${jumpingDot} 1.1s infinite;
  }
  .animate-dot2 {
    opacity: 0.4;
    animation: ${jumpingDot} 1.1s infinite 0.25s;
  }
  .animate-dot3 {
    opacity: 0.4;
    animation: ${jumpingDot} 1.1s infinite 0.5s;
  }
`;
