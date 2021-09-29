import { HTMLAttributes } from 'react';
import colors from '../../styles/colors';

export const typographyColorList = [
  'fc_black_100',
  'fc_black_70',
  'fc_black_30',
  'fc_white',
  'fc_red',
  'fc_green',
  'fc_dark_green',
  'fc_dark_blue',
  'fc_dark_yellow',
] as const;
type TypographyColor = typeof typographyColorList[number] & keyof typeof colors;

export const typopgrahyFontStyleList = ['semibold', 'highlight'] as const;
type TypographyFontStyle = typeof typopgrahyFontStyleList[number];

export const typographyTagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'sup', 'sub'] as const;
type TypographyTag = typeof typographyTagList[number];

export const typographyVariantList = ['title1', 'title2', 'title3', 'title4', 'title5', 'body', 'small', 'steplabel'] as const;
type TypographyVariant = typeof typographyVariantList[number];

type TypographyVariantToTag = {
  [key in TypographyVariant]: TypographyTag;
};

export const typographyVariantToTag: TypographyVariantToTag = {
  title1: 'h1',
  title2: 'h2',
  title3: 'h3',
  title4: 'h4',
  title5: 'h5',
  body: 'p',
  small: 'p',
  steplabel: 'span',
};

export interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  fontStyle?: TypographyFontStyle;
  tagName?: TypographyTag;
}
