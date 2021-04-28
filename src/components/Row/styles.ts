import styled from "styled-components";
import { IRowProps } from "./interfaces";
import { Col } from "../Col/styles";

export const Row = styled.div<IRowProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ gutter = 16 }) => gutter / 2}px;
  margin-bottom: ${({ bottom = 0 }) => bottom}px;
  ${Col} {
    padding: 0 ${({ gutter = 16 }) => gutter / 2}px;
  }
`;
