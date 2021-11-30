import styled from 'styled-components';
import { StyledArrow } from '../Icons/Arrow/styles';

export const Container = styled.div`
  position: relative;
  font-family: 'Red Hat Text', sans-serif;
`;

export const SortContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const SortButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin-left: 5px;
  padding: 5px;

  ${StyledArrow} + ${StyledArrow} {
    margin-top: 1px;
  }
`;
