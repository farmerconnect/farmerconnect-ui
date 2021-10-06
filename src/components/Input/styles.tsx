import styled, { css, keyframes } from 'styled-components';
import WarningIcon from '../Icons/Warning';
import CheckIcon from '../Icons/Check';

const animateIcons = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  > svg {
    position: absolute;
    right: 0.875rem;
    top: 50%;
    transform: translateY(-50%);
    animation: ${animateIcons} 0.5s ease-out;
  }
`;
type InputProps = {
  error?: boolean | string;
  success?: boolean;
  unit?: string;
};

export const Input = styled.input<InputProps>`
  ${(props) => css`
    outline: none;
    border: none;
    color: ${props.disabled ? '#B9B9B9' : '#141414'};
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.6875rem 1rem;
    border-radius: 0.75rem;
    background-color: ${props.disabled ? '#E7E7E7' : '#f7f6f4'};
    cursor: ${props.disabled ? 'default' : 'auto'};
    font-family: inherit;
    box-sizing: border-box;
    width: 100%;
    transition: box-shadow 0.2s ease-out;
    box-shadow: ${props.error ? '0.125rem 0.125rem 0 0 #FB2E4C' : 'none'};
    ${(props.error || props.success) && 'padding-right: 2.25rem;'}
    ${(props.unit) && 'padding-right: 3.5rem;'}
    &::placeholder {
      font-weight: 400;
      color: #5b5b5b;
    }
    &:focus {
      box-shadow: 0.125rem 0.125rem 0 0 ${props.error ? '#FB2E4C' : '#00e394'};
    }
    &:active,
    &:focus {
      font-weight: ${props.disabled ? '500' : '700'};
    }
  `}
`;

type IconProps = {
  unit?: string;
};
export const Check = styled(CheckIcon)<IconProps>`
  padding-right: ${(props) => (props.unit ? '2.5rem' : '')};
`;
export const Warning = styled(WarningIcon)<IconProps>`
  padding-right: ${(props) => (props.unit ? '2.5rem' : '')};
`;

type HelperTextProps = {
  error?: boolean;
};
export const HelperText = styled.p<HelperTextProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  font-family: inherit;
  font-weight: 400;
  font-size: 0.6875rem;
  color: ${(props) => (props.error ? '#fb2e4c' : '#5b5b5b')};
  padding: 0.25rem 1rem 0;
  margin: 0;
`;

export const Unit = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  color: #5B5B5B;
  background-color: #E7E7E7;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`;