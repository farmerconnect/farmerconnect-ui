import { IAccordionProps } from './interfaces';
import styled from 'styled-components';

export const Container = styled.div<IAccordionProps>`
  box-sizing: border-box;
  border-radius: 0.75rem;
  border: 1px solid #e7e7e7;
  header {
    box-sizing: border-box;
    padding: 0.625rem;
    display: flex;
    align-items: center;
    cursor: default;
    font-size: 0.875rem;
    font-weight: 500;
    > svg {
      height: 0.5rem;
      width: auto;
      margin: 0 1.5rem 0 0.625rem;
      transition: transform 0.1s ease-out;
      cursor: pointer;
      transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(90deg)')};
    }
  }
  main {
    box-sizing: border-box;
    padding: 1rem 2.25rem 3.5rem;
  }
  & + & {
    border-top: none;
  }
`;
