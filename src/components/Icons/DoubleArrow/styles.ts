import styled, { css } from 'styled-components';
import { ROTATION } from './constants';
import { IDoubleArrowProps } from './interfaces';

export const StyledDoubleArrow = styled.svg<IDoubleArrowProps>`
  display: flex;
  flex-direction: column;
  transform: ${({ direction = 'up' }: IDoubleArrowProps) => css`rotate(${ROTATION[direction]}deg)`};
`;
