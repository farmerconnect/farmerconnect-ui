import styled, { css, keyframes } from 'styled-components';
import { Mixins } from '../..';
import Typography from '../Typography';
import CustomButton from '../CustomButton';
import { DialogStyleProps } from './interfaces';

const overlayAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: #1414144c;
  animation: ${overlayAnimation} 0.2s ease-out;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const dialogWidth = {
  small: css`
    width: 33.5rem;
    min-height: 27.5rem;
    max-height: min(calc(100% - 5rem), 55rem);
    margin-left: 3.5rem;
  `,
  medium: css`
    width: 47.25rem;
    min-height: 27.5rem;
    max-height: min(calc(100% - 5rem), 55rem);
    margin-left: 3.5rem;
  `,
  large: css`
    width: calc(100% - 5rem);
    height: calc(100% - 5rem);
  `,
};

const showDialog = keyframes`
0% {
  transform: translateY(1rem);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;

export const Dialog = styled.dialog<DialogStyleProps>`
  ${({ size = 'small' }) => css`
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0.75rem;
    padding: 2.5rem 3.5rem;
    display: flex;
    flex-direction: column;
    border: none;
    margin: 0;
    animation: ${showDialog} 0.3s ease-out;
    ${dialogWidth[size]}
  `}
`;

export const Title = styled(Typography).attrs({ variant: 'title2' })`
  margin-bottom: 2rem;
`;
export const Subtitle = styled(Typography).attrs({ variant: 'title5' })`
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  flex: 1;
  overflow: auto;
  margin-right: -1.75rem;
  padding-right: 1.75rem;
  ${Mixins.customScrollbar()}
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
  gap: 1rem;
`;

export const Button = styled(CustomButton)`
  ${({ variant }) => css`
    ${variant === 'link' &&
    css`
      margin-right: auto;
    `}
  `}
`;

export const FeedbackDialog = styled(Dialog)`
  min-height: auto;
  > h3 {
    margin-bottom: 1rem;
    text-align: center;
  }
  > svg {
    margin: 1rem auto;
  }
  > p {
    text-align: center;
    flex: 1;
  }
`;

export const ConfirmationDialog = styled(Dialog)`
  min-height: 26rem;
  > h2 {
    margin-bottom: 1rem;
  }
  > p {
    text-align: center;
    flex: 1;
  }
`;
