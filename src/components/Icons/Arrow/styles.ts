import styled, { css } from 'styled-components';
import { ROTATION } from './constants';
import { IArrow } from './interfaces';

export const arrowDefaultStyles: IArrow = {
  colors: {
    activeColor: '#00E394',
    defaultColor: '#5B5B5B',
    inactiveColor: '#B9B9B9',
  },
};

export const StyledArrow = styled.svg<IArrow>`
  display: flex;
  flex-direction: column;
  transform: ${({ direction = 'up' }: IArrow) => css`rotate(${ROTATION[direction]}deg)`};

  path {
    fill: ${({ colors, theme, isActive, isInactive }) => {
      if (isActive) {
        return colors?.activeColor || theme?.arrow?.colors?.activeColor || arrowDefaultStyles.colors?.activeColor;
      }

      if (isInactive) {
        return colors?.inactiveColor || theme?.arrow?.colors?.inactiveColor || arrowDefaultStyles.colors?.inactiveColor;
      }

      return colors?.defaultColor || theme?.arrow?.colors?.defaultColor || arrowDefaultStyles.colors?.defaultColor;
    }};
    transition: fill 300ms ease;
  }
`;
