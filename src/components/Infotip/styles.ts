import styled from 'styled-components';
import { ITipProps } from './interfaces';

export const Container = styled.div`
  padding-top: 10rem;
  padding-left: 10rem;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const TipBase = styled.div<ITipProps>`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
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

export const TopTip = styled(TipBase)<ITipProps>`
  top: calc(30px * -1 - 6px);

  &:before {
    display: ${(props) => (props.arrow ? '' : 'none')};
    top: 100%;
    border-top-color: ${(props) => props.backgroundColor};
  }
`;

export const RightTip = styled(TipBase)<ITipProps>`
  left: calc(100% + 6px);
  top: ${(props) => (props.position === 'start' 
    ? '0%' 
    : (props.position === 'end' ? '100%' : '50%'))};
  transform: translateX(0) ${(props) => (props.position === 'start' 
    ? 'translateY(0%)' 
    : (props.position === 'end' ? 'translateY(-100%)' : 'translateY(-50%)'))};

  &:before {
    display: ${(props) => (props.arrow ? '' : 'none')};
    left: calc(6px * -1);
    top: ${(props) => (props.position === 'start' 
      ? 'calc(0% - (-6px * 2))' 
      : (props.position === 'end' ? 'calc(100% - (6px * 2))' : '50%'))};
    transform: translateX(0) translateY(-50%);
    border-right-color: ${(props) => props.backgroundColor};
  }
`;

export const BottomTip = styled(TipBase)<ITipProps>`
  bottom: calc(30px * -1 - 6px);

  &:before {
    display: ${(props) => (props.arrow ? '' : 'none')};
    bottom: 100%;
    border-bottom-color: ${(props) => props.backgroundColor};
  }
`;

export const LeftTip = styled(TipBase)<ITipProps>`
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
    border-left-color: ${(props) => props.backgroundColor};
  }
`;
