import styled, { css, keyframes } from 'styled-components';
import { ILoader, ILoaderProps } from './interfaces';
import StyledButton from '../Button';

export const loaderDefaultStyles: ILoader = {
  icon: {
    color: '#00E394',
    size: 158,
  },
  button: {
    color: '#6D6D6D',
  },
};

const originalSize = 231;

const scaleTo = (number: number, to: number = loaderDefaultStyles.icon.size) =>
  (number * ((to * 100) / originalSize)) / 100;

const loadingAnimation = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

export const Button = styled(StyledButton)`
  color: ${({ theme, color }) => color || theme?.loader?.button?.color || loaderDefaultStyles.button.color};
  font-size: 14px;
  line-height: 18px;
  margin-top: 80px;
  text-decoration: underline;

  &,
  &:hover {
    background-color: transparent;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin: 20px 0 0;
  text-align: center;

  &.error {
    max-width: 392px;
  }

  a {
    color: black;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  opacity: 1;
  transition: opacity 0.5s, margin-top 0s 0s;
`;

export const Container = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  ${({ show }: ILoaderProps) =>
    !show &&
    css`
      transition: visibility 0s 0.5s;
      visibility: hidden;

      ${Content} {
        opacity: 0;
        margin-top: -100vh;
        transition: opacity 0.5s, margin-top 0s 0.5s;
      }
    `}
`;

export const Spinner = styled.div<ILoaderProps>`
  display: inline-block;
  overflow: hidden;
  background: none;
  flex-shrink: 0;

  ${({ iconSize }: ILoaderProps) => css`
    height: ${scaleTo(231, iconSize)}px;
    width: ${scaleTo(231, iconSize)}px;
  `}
`;

export const SpinnerItemList = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const SpinnerItem = styled.div<ILoaderProps>`
  box-sizing: content-box;
  position: absolute;
  animation: ${loadingAnimation} linear 1.0204081632653061s infinite;
  background: ${({ theme, iconColor }) => iconColor || theme?.loader?.color || loaderDefaultStyles.icon.color};

  ${({ iconSize }: ILoaderProps) => css`
    left: ${scaleTo(103.95, iconSize)}px;
    top: ${scaleTo(36.96, iconSize)}px;
    width: ${scaleTo(23.1, iconSize)}px;
    height: ${scaleTo(23.1, iconSize)}px;
    border-radius: ${scaleTo(6.93, iconSize)}px / ${scaleTo(6.93, iconSize)}px;
    transform-origin: ${scaleTo(11.55, iconSize)}px ${scaleTo(78.54, iconSize)}px;
  `}

  &:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9070294784580498s;
  }

  &:nth-child(2) {
    transform: rotate(40deg);
    animation-delay: -0.7936507936507936s;
  }

  &:nth-child(3) {
    transform: rotate(80deg);
    animation-delay: -0.6802721088435374s;
  }

  &:nth-child(4) {
    transform: rotate(120deg);
    animation-delay: -0.5668934240362812s;
  }

  &:nth-child(5) {
    transform: rotate(160deg);
    animation-delay: -0.4535147392290249s;
  }

  &:nth-child(6) {
    transform: rotate(200deg);
    animation-delay: -0.3401360544217687s;
  }

  &:nth-child(7) {
    transform: rotate(240deg);
    animation-delay: -0.22675736961451246s;
  }

  &:nth-child(8) {
    transform: rotate(280deg);
    animation-delay: -0.11337868480725623s;
  }

  &:nth-child(9) {
    transform: rotate(320deg);
    animation-delay: 0s;
  }
`;
