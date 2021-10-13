import styled from 'styled-components';
import { IProgressBar } from './interfaces';

export const Container = styled.div`
  height: 4px;
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 7px;
`;

export const Filler = styled.div<IProgressBar>`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.backgroundColor};
  border-radius: inherit;
`;
