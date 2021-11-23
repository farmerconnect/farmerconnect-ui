import { IAccordionProps } from './interfaces';
import styled from 'styled-components';
import { farmerConnectTheme } from '../Theme';

export const Container = styled.div<IAccordionProps>`
  box-sizing: border-box;
  border-radius: 0.75rem;
  border: 1px solid ${farmerConnectTheme.colors.fc_black_10};

  header {
    box-sizing: border-box;
    padding: 0.5rem 0.625rem;
    display: flex;
    align-items: center;
    cursor: default;
    font-size: 0.875rem;
    font-weight: 500;

    > svg {
      color: ${farmerConnectTheme.colors.fc_black_70};
      margin: 0 1rem 0 0.25rem;
      transition: transform 0.1s ease-out;
      cursor: pointer;
      transform: ${({ isOpen }: IAccordionProps) => (isOpen ? 'rotate(0deg)' : 'rotate(-90deg)')};
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
