import styled, { css } from 'styled-components';
import { ROTATION } from './constants';
import { IArrowProps } from './interfaces';

export const StyledArrow = styled.svg<IArrowProps>`
  display: flex;
  flex-direction: column;
  transform: ${({ direction = 'up' }: IArrowProps) => css`rotate(${ROTATION[direction]}deg)`};
`;
