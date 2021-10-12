import { IPaginationProps } from './interfaces';
import styled from 'styled-components';

export const PageCount = styled.div<any>`
  min-width: 100%;
  width: max-content;
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

export const PaginationContainer = styled.div<Partial<IPaginationProps>>`
  display: inline-flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;

  button {
    padding: 0rem 0.5rem;
    min-width: 0px;
    font-weight: initial;
    border-radius: 0.5em;
    height: 1.5rem;

    > svg {
      margin: 0 auto;
      width: 1rem;
      height: 1.75rem;
    }
  }
`;
