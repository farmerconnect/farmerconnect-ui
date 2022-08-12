import { IPaginationProps } from './interfaces';
import styled, { css } from 'styled-components';
import Button from '../Button';

export const PageCount = styled.div<any>`
  width: 10rem;
`;

export const ButtonsContainer = styled.div<any>`
  display: inline-flex;
`;

export const SelectContainer = styled.div<any>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const InlinePaginationNumbers = styled.ul<any>`
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-left: 0.5rem;
  }

  > li {
    display: inline;
  }
`;

const defaultButtonStyle = css`
  min-width: 0px;
  font-weight: initial;
  border-radius: 0.5em;
  height: 1.5rem;

  > svg {
    margin: 0 auto;
  }
`;

export const PaginationNumberButton = styled(Button)`
  padding: 0 0.5rem;
  ${defaultButtonStyle}
`;

type PaginationArrowButtonProps = {
  isHidden: boolean;
};
export const PaginationArrowButton = styled(Button)<PaginationArrowButtonProps>`
  padding: 0 0.25rem;
  visibility: ${(props) => (props.isHidden ? 'hidden' : 'visible')};
  ${defaultButtonStyle}
`;

export const PaginationContainer = styled.div<Partial<IPaginationProps>>`
  display: inline-flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
`;
