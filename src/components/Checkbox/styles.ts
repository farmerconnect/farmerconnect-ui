import styled, { keyframes } from 'styled-components';

const show = keyframes`
0% {
  transform: scale(1.1);
}
100% {
  transform: scale(1);
}
`;

type LabelProps = {
  disabled?: boolean;
};
export const Label = styled.label<LabelProps>`
  box-sizing: border-box;
  color: ${({ disabled }) => (disabled ? '#B9B9B9' : '#141414')};
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  margin-left: 2rem;
  column-gap: 0.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  cursor: pointer;

  input {
    cursor: pointer;
    opacity: 0;
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  > svg {
    min-width: 1.5rem;
  }

  input + .unchecked {
    display: block;
  }

  input + .checked {
    display: none;
  }

  input:checked + svg + .unchecked {
    display: none;
  }

  input:checked + .checked {
    display: block;
    animation: ${show} 0.2s;
  }
`;
