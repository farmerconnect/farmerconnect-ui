import styled, { css } from 'styled-components';
import { small } from '../Typography/styles';
import { TipDirection, ITipProps, TipPosition } from './interfaces';

const TIP_HEIGHT = 25;
const TIP_MARGIN = 2;
const ARROW_SIZE = 5;
const ARROW_MARGIN = `${ARROW_SIZE * 2}px`;
const ARROW_VERTICAL_POSITION = `${(ARROW_SIZE + TIP_MARGIN) * 2}px`;

const tipVerticalPositionMap = {
  start: '0%',
  middle: '50%',
  end: '100%',
};

const arrowVerticalPositionMap = {
  start: ARROW_VERTICAL_POSITION,
  middle: '50%',
  end: `calc(100% - ${ARROW_VERTICAL_POSITION})`,
};

const getTipPosition = (direction: TipDirection, arrow: boolean | undefined) => {
  let baseSize = TIP_MARGIN;
  baseSize += arrow ? ARROW_SIZE : 0;

  if (direction === 'top' || direction === 'bottom') {
    baseSize += TIP_HEIGHT;
    return `${-baseSize}px`;
  }

  return `calc(100% + ${baseSize}px)`;
};

const dynamicVerticalPosition = (position: TipPosition) => css`
  top: ${tipVerticalPositionMap[position]};
  transform: translateX(0) ${`translateY(-${tipVerticalPositionMap[position]})`};

  &::before {
    top: ${arrowVerticalPositionMap[position]};
    transform: translateX(0) translateY(-50%);
  }
`;

export const Container = styled.div`
  padding-top: 10rem;
  padding-left: 10rem;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const TipBase = styled(small).attrs({ as: 'div' })<ITipProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${({ fontColor }) => fontColor};
  left: 50%;
  padding: 5px 12px;
  min-height: ${`${TIP_HEIGHT}px`};
  position: absolute;
  transform: translateX(-50%);
  z-index: 100;
  white-space: nowrap;

  &::before {
    border: ${`${ARROW_SIZE}px solid transparent`};
    content: ${({ arrow }) => (arrow ? '""' : 'none')};
    height: 0;
    left: 50%;
    position: absolute;
    pointer-events: none;
    transform: translateX(-50%);
    width: 0;
  }
`;

export const TopTip = styled(TipBase)<ITipProps>`
  top: ${({ arrow }) => getTipPosition('top', arrow)};

  &::before {
    border-top-color: ${({ backgroundColor }) => backgroundColor};
    top: 100%;
  }
`;

export const BottomTip = styled(TipBase)<ITipProps>`
  bottom: ${({ arrow }) => getTipPosition('bottom', arrow)};

  &::before {
    border-bottom-color: ${({ backgroundColor }) => backgroundColor};
    bottom: 100%;
  }
`;

export const RightTip = styled(TipBase)<ITipProps>`
  ${({ arrow, position, backgroundColor }) => css`
    left: ${getTipPosition('right', arrow)};
    ${dynamicVerticalPosition(position)}

    &:before {
      border-right-color: ${backgroundColor};
      left: -${ARROW_MARGIN};
    }
  `}
`;

export const LeftTip = styled(TipBase)<ITipProps>`
  ${({ arrow, position, backgroundColor }) => css`
    left: auto;
    right: ${getTipPosition('left', arrow)};
    ${dynamicVerticalPosition(position)}

    &:before {
      border-left-color: ${backgroundColor};
      left: auto;
      right: -${ARROW_MARGIN};
    }
  `}
`;
