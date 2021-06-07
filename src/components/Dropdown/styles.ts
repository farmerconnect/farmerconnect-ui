import styled, { keyframes } from 'styled-components';
import { ListProps } from './interfaces';

const ListPositionModifiers = {
  'top-left': [0, 0],
  'top-center': [0, 50],
  'top-right': [0, 100],
  'middle-left': [50, 0],
  center: [50, 50],
  'middle-right': [50, 100],
  'bottom-left': [100, 0],
  'bottom-center': [100, 50],
  'bottom-right': [100, 100],
};

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: transparent;
  cursor: default;
`;

const dropdownAnimation = keyframes`
0% {
  transform: scale(0);
  li {
    opacity: 0;
  }
}
100% {
  transform: scale(1);
  li {
    opacity: 1;
  }
}
`;

export const List = styled.ul<ListProps>`
  position: absolute;
  top: ${({ position = 'top-left' }) => ListPositionModifiers[position][0]}%;
  left: ${({ position = 'top-left' }) => ListPositionModifiers[position][1]}%;
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  border-radius: 0.75rem;
  box-shadow: 0.125rem 0.125rem 0px #00e394;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: top left;
  z-index: 5;
  animation: ${dropdownAnimation} 0.1s ease-out;

  > li {
    margin: 0;
    padding: 0.5rem 3rem 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: #141414;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background-color: #f3f3f3;
    }
    & + li {
      border-top: 1px solid #e7e7e7;
    }
  }
`;
