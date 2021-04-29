import styled from "styled-components";
import { IContainerProps } from "./interfaces";

export const Container = styled.div<IContainerProps>`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: ${({ size = 1600 }) => size}px;
`;
