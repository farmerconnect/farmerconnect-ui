import styled, { css, keyframes } from 'styled-components';
import { customScrollbar } from '../../mixins/ScrollBar';
import colors from '../../styles/colors';
import { farmerConnectTheme } from '../Theme';

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
    top: 0.625rem;
    animation: ${animateIcons} 0.5s ease-out;
  }
`;
type TextAreaProps = {
  error?: boolean | string;
  success?: boolean;
};

export const TextArea = styled.textarea<TextAreaProps>`
  ${({ error, success, disabled }) => css`
    outline: none;
    border: none;
    color: ${disabled ? colors.fc_black_30 : colors.fc_black_100};
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.6875rem 1rem;
    border-radius: 0.75rem;
    background-color: ${disabled ? colors.fc_black_10 : colors.fc_beige};
    cursor: ${disabled ? 'default' : 'auto'};
    font-family: inherit;
    box-sizing: border-box;
    width: 100%;
    min-height: 2.5rem;
    overflow: auto;
    transition: box-shadow 0.2s ease-out;
    box-shadow: ${error ? '0.125rem 0.125rem 0 0 #FB2E4C' : 'none'};
    ${(error || success) && 'padding-right: 2.25rem;'}

    &::placeholder {
      font-weight: 400;
      color: #5b5b5b;
    }

    &:focus {
      box-shadow: 0.125rem 0.125rem 0 0 ${error ? '#FB2E4C' : '#00e394'};
    }

    &:active,
    &:focus {
      font-weight: ${disabled ? 500 : 700};
    }

    ${customScrollbar({ size: '1rem', trackBackgroundColor: 'transparent' })}

    &::-webkit-scrollbar-thumb {
      background-clip: content-box;
      border-width: 0.3rem;
      border-radius: 0.75rem;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
      border: none;
    }
  `}
`;

export const ErrorMessage = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  font-family: inherit;
  font-weight: 400;
  font-size: 0.6875rem;
  color: #fb2e4c;
  padding: 0.25rem 1rem 0;
  margin: 0;
`;
