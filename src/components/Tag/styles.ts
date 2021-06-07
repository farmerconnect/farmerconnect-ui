import styled, { css } from 'styled-components';
import { ITagProps, TagVariant, TagVariantEnum } from './interfaces';

export const tagDefaultStyles = {
  colors: {
    [TagVariantEnum.PRIMARY]: {
      color: '#081851',
      backgroundColor: '#D1EBEE',
    },
    [TagVariantEnum.SECONDARY]: {
      color: '#5C5C5C',
      backgroundColor: '#EFEFEF',
    },
    [TagVariantEnum.SUCCESS]: {
      color: '#005E3A',
      backgroundColor: '#CEE9DD',
    },
    [TagVariantEnum.DANGER]: {
      color: '#FB2E4C',
      backgroundColor: '#FFEAED',
    },
    [TagVariantEnum.WARNING]: {
      color: '#AE8800',
      backgroundColor: '#FFFCD4',
    },
  },
};

interface IGetColor {
  key: 'color' | 'backgroundColor';
  theme: any;
  color?: string;
  variant?: TagVariant;
  backgroundColor?: string;
}

const getColor = ({ theme, variant, color, key }: IGetColor): string => {
  if (color) return color;

  if (!variant) return tagDefaultStyles.colors.primary[key];

  return theme?.tag?.colors[variant][key] || tagDefaultStyles.colors[variant][key];
};

export const Container = styled.div<ITagProps>`
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 15px;
  padding: 5px 12px;
  text-align: center;
  text-transform: uppercase;

  ${({ color, variant, backgroundColor, theme, customStyles }) => {
    const textColor = getColor({ theme, variant, color, key: 'color' });
    const bgColor = getColor({ theme, variant, color: backgroundColor, key: 'backgroundColor' });

    return css`
      color: ${textColor};
      background-color: ${bgColor};

      ${customStyles || {}}
    `;
  }}

  & + & {
    margin-left: 8px;
  }
`;
