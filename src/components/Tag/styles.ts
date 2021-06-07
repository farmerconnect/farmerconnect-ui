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
  theme: any;
  color?: string;
  variant?: TagVariant;
  backgroundColor?: string;
}

interface IGetColorByKey extends IGetColor {
  key: 'color' | 'backgroundColor';
}

const getColorByKey = ({ theme, variant, key }: IGetColorByKey): string => {
  if (!variant) return tagDefaultStyles.colors.primary[key];

  return theme?.tag?.colors[variant][key] || tagDefaultStyles.colors[variant][key];
};

const getTextColor = ({ theme, variant, color }: IGetColor): string =>
  color || getColorByKey({ theme, variant, key: 'color' });

const getBackgroundColor = ({ theme, variant, backgroundColor }: IGetColor): string =>
  backgroundColor || getColorByKey({ theme, variant, key: 'backgroundColor' });

export const Container = styled.div<ITagProps>`
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 15px;
  padding: 5px 12px;
  text-align: center;
  text-transform: uppercase;

  ${({ color, variant, backgroundColor, theme }) => css`
    color: ${getTextColor({ theme, variant, color })};
    background-color: ${getBackgroundColor({ theme, variant, backgroundColor })};
  `}

  & + & {
    margin-left: 8px;
  }
`;
