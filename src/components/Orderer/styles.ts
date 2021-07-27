import styled from 'styled-components';
import { StyledArrow } from '../Icons/Arrow/styles';

export const Container = styled.div`
  position: relative;
  font-family: 'Red Hat Text', sans-serif;
  width: 100%;
`;

export const SortContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const SortButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  padding: 5px;

  ${StyledArrow} + ${StyledArrow} {
    margin-top: 1px;
  }
`;
