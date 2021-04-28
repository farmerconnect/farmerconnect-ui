import styled from "styled-components";
import { IContainerProps } from "./interfaces";

export const Container = styled.div<IContainerProps>`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: ${({ size = 1544 }) => size}px;
`;
