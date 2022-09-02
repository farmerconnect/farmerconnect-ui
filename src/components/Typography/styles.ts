// TODO tech-debt - we should be using rem instead of px for font-size / line-height.

import styled, { css } from 'styled-components';
import { ITypographyProps } from './interfaces';
import { farmerConnectTheme } from '../Theme';

const defaultFontColor = farmerConnectTheme.colors.fc_black_100;

const fontStyleMap = {
  semibold: css<ITypographyProps>`
    font-weight: 500;
    font-style: normal;
  `,
  highlight: css<ITypographyProps>`
    font-weight: bold;
    font-style: normal;
  `,
};

const defaultFontStyle = css`
  font-weight: normal;
  font-style: normal;
`;

const pickFontStyle = (fontStyle: ITypographyProps['fontStyle']) =>
  !!fontStyle ? fontStyleMap[fontStyle] : defaultFontStyle;

const fontDefaults = css<ITypographyProps>`
  margin: 0;
  font-family: var(--fc-typography-font, 'Red Hat Text', sans-serif);
  color: ${({ color }) => (!!color ? farmerConnectTheme.colors[color] : defaultFontColor)};
`;

const titleDefaults = css<ITypographyProps>`
  ${fontDefaults}
  font-style: normal;
  font-weight: bold;
`;

/* Title 1 */
export const title1 = styled.h1<ITypographyProps>`
  ${titleDefaults}
  font-size: 43px;
  line-height: 57px;
`;

/* Title 2 */
export const title2 = styled.h2<ITypographyProps>`
  ${titleDefaults}
  font-size: 34px;
  line-height: 45px;
`;

/* Title 3 */
export const title3 = styled.h3<ITypographyProps>`
  ${titleDefaults}
  font-size: 27px;
  line-height: 36px;
`;

/* Title 4 */
export const title4 = styled.h4<ITypographyProps>`
  ${titleDefaults}
  font-size: 22px;
  line-height: 29px;
`;

/* Title 5 */
export const title5 = styled.h5<ITypographyProps>`
  ${titleDefaults}
  font-size: 17px;
  line-height: 22px;
`;

/* Body */
export const body = styled.p<ITypographyProps>`
  ${fontDefaults}
  ${({ fontStyle }) => pickFontStyle(fontStyle)}
  font-size: 14px;
  line-height: 19px;
`;

/* Small text */
export const small = styled.p<ITypographyProps>`
  ${fontDefaults}
  ${({ fontStyle }) => pickFontStyle(fontStyle)}
  font-size: 11px;
  line-height: 15px;
`;

/* Step Label */
export const steplabel = styled.p<ITypographyProps>`
  ${fontDefaults}
  ${({ fontStyle }) => pickFontStyle(fontStyle)}
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
