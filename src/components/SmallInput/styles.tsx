import styled, { css } from 'styled-components';
import DefaultInput from '../Input';

export const Input = styled(DefaultInput)`
  box-sizing: border-box;
  > svg {
    height: 1.0625rem;
    width: 1.0625rem;
    right: 0.6825rem;
  }
  > input {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid #141414;
    font-size: 0.6875rem;
    font-weight: 700;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    ${(props) =>
      props.error
        ? css`
            border-color: #fb2e4c;
            padding-right: 2.25rem;
          `
        : ''}
    &:focus {
      box-shadow: none;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      background-color: black;
    }
  }
`;
