import styled, { css, keyframes } from 'styled-components';
import { ListProps } from './interfaces';

const ListPositionModifiers = {
  'top-left': css`
    bottom: 100%;
    right: 100%;
  `,
  'top-right': css`
    bottom: 100%;
    left: 100%;
  `,
  center: css`
    top: 50%;
    left: 50%;
  `,
  'bottom-left': css`
    top: 100%;
    right: 100%;
  `,
  'bottom-right': css`
    top: 100%;
    left: 100%;
  `,
};

const TransformOriginModifiers = {
  'top-left': 'bottom right',
  'top-right': 'bottom left',
  center: 'top left',
  'bottom-left': 'top right',
  'bottom-right': 'top left',
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
  ${(props) => ListPositionModifiers[props.position] || ListPositionModifiers['bottom-right']}
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  border-radius: 0.75rem;
  box-shadow: 0.125rem 0.125rem 0px #00e394;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: ${(props) => TransformOriginModifiers[props.position] || TransformOriginModifiers['bottom-right']};
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
