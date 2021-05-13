import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(20, 20, 20, 0.4);
  animation: show 0.1s ease-out;

  @keyframes show {
    0% {
      background-color: rgba(20, 20, 20, 0);
    }
    100% {
      background-color: rgba(20, 20, 20, 0.4);
    }
  }
`;

export const Container = styled.div`
  background-color: white;
  padding: 2.25rem;
  border-radius: 0.75rem;
  animation: show 0.3s ease-out;
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
