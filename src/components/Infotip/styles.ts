import styled from 'styled-components';
import { IInfotipProps } from './interfaces';

export const Container = styled.div`
  padding-top: 10rem;
  padding-left: 10rem;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const TipBase = styled.div<IInfotipProps>`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${(props) => props.color || '#F3F3F3'};
  background: ${(props) => props.backgroundColor || '#192C28'};
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  &:before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }
`;

export const TopTip = styled(TipBase)<IInfotipProps>`
  top: calc(30px * -1 - 6px);

  &:before {
    display: ${(props) => (props.arrow ? '' : 'none')};
    top: 100%;
    border-top-color: ${(props) => props.backgroundColor || '#192C28'};
  }
`;

export const RightTip = styled(TipBase)<IInfotipProps>`
  left: calc(100% + 6px);
  top: 50%;
  transform: translateX(0) translateY(-50%);

  &:before {
    display: ${(props) => (props.arrow ? '' : 'none')};
    left: calc(6px * -1);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${(props) => props.backgroundColor || '#192C28'};
  }
`;

export const BottomTip = styled(TipBase)<IInfotipProps>`
  bottom: calc(30px * -1 - 6px);

  &:before {
    display: ${(props) => (props.arrow ? '' : 'none')};
    bottom: 100%;
    border-bottom-color: ${(props) => props.backgroundColor || '#192C28'};
  }
`;

export const LeftTip = styled(TipBase)<IInfotipProps>`
  left: auto;
  right: calc(100% + 6px);
  top: 50%;
  transform: translateX(0) translateY(-50%);

  &:before {
    display: ${(props) => (props.arrow ? '' : 'none')};
    left: auto;
    right: calc(6px * -2);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: ${(props) => props.backgroundColor || '#192C28'};
  }
`;
