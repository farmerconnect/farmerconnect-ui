import styled, { css } from "styled-components";
import { IContainerProps } from "./interfaces";

const breakpoints = {
  default: ["100%", "540px", "720px", "960px", "1140px", "1320px"],
  sm: ["100%", "540px", "720px", "960px", "1140px", "1320px"],
  md: ["100%", "100%", "720px", "960px", "1140px", "1320px"],
  lg: ["100%", "100%", "100%", "960px", "1140px", "1320px"],
  xl: ["100%", "100%", "100%", "100%", "1140px", "1320px"],
  xxl: ["100%", "100%", "100%", "100%", "100%", "1320px"],
  fluid: ["100%", "100%", "100%", "100%", "100%", "100%"],
};

export const Container = styled.div<IContainerProps>`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  ${({ size = "default" }) => css`
    max-width: ${breakpoints[size][0]};
    @media (min-width: 576px) {
      max-width: ${breakpoints[size][1]};
    }
    @media (min-width: 720px) {
      max-width: ${breakpoints[size][2]};
    }
    @media (min-width: 992px) {
      max-width: ${breakpoints[size][3]};
    }
    @media (min-width: 1200px) {
      max-width: ${breakpoints[size][4]};
    }
    @media (min-width: 1400px) {
      max-width: ${breakpoints[size][5]};
    }
  `}
`;
