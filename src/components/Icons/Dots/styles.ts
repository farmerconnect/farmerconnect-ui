import styled, { css, keyframes } from 'styled-components';
import { IDots } from '.';

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

export const StyledIcon = styled.svg<IDots>`
  ${({ animated }) => css`
    .animate-dot1,
    .animate-dot2,
    .animate-dot3 {
      opacity: 0.4;
    }

    ${!!animated &&
    css`
      .animate-dot1 {
        animation: ${jumpingDot} 1.1s infinite;
      }

      .animate-dot2 {
        animation: ${jumpingDot} 1.1s infinite 0.25s;
      }

      .animate-dot3 {
        animation: ${jumpingDot} 1.1s infinite 0.5s;
      }
    `}
  `}}
`;
