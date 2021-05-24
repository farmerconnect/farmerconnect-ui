import styled, { css } from 'styled-components';
import { IColProps } from './interfaces';

export const Col = styled.div<IColProps>`
  ${({ xs = 12, sm, md, lg, xl, xxl }) => css`
    margin: 0;
    box-sizing: border-box;
    flex: 1;
    ${xs === 0 ? 'display: none;' : `max-width: ${xs ? (100 / 12) * xs : 100}%;`}

    ${sm !== undefined &&
    css`
      @media (min-width: 576px) {
        ${+sm === 0
          ? 'display: none;'
          : css`
              max-width: ${sm ? (100 / 12) * sm : 100}%;
              display: block;
            `}
      }
    `}
    ${md !== undefined &&
    css`
      @media (min-width: 768px) {
        ${+md === 0
          ? 'display: none;'
          : css`
              max-width: ${md ? (100 / 12) * md : 100}%;
              display: block;
            `}
      }
    `}
    ${lg !== undefined &&
    css`
      @media (min-width: 992px) {
        ${+lg === 0
          ? 'display: none;'
          : css`
              max-width: ${lg ? (100 / 12) * lg : 100}%;
              display: block;
            `}
      }
    `}
    ${xl !== undefined &&
    css`
      @media (min-width: 1200px) {
        ${+xl === 0
          ? 'display: none;'
          : css`
              max-width: ${xl ? (100 / 12) * xl : 100}%;
              display: block;
            `}
      }
    `}
    ${xxl !== undefined &&
    css`
      @media (min-width: 1400px) {
        ${+xxl === 0
          ? 'display: none;'
          : css`
              max-width: ${xxl ? (100 / 12) * xxl : 100}%;
              display: block;
            `}
      }
    `}
  `}
`;
