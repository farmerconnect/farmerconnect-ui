import { HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const buttonVariantList = ['filled', 'outline', 'link', 'text', 'cancel'] as const;
type IButtonVariant = typeof buttonVariantList[number];

export type ButtonProps = {
  variant?: IButtonVariant;
  colorVariant?: IColorVariant;
  small?: boolean;
  iconOnly?: boolean;
} & HTMLProps<HTMLButtonElement>;

type IButtonColorVariant = {
  primary: string;
  background: string;
  border: string;
};

const colorStateList = ['default', 'hover', 'disabled'];
type IColorState = typeof colorStateList[number];

const PRIMARY_COLOR_NAME = 'primary';

const requiredColorVariantList = [PRIMARY_COLOR_NAME] as const;
export const colorVariantList = [...requiredColorVariantList, 'primary', 'danger', 'secondary'] as const;
type IColorVariant = typeof colorVariantList[number];
type IRequiredColorVariants = typeof requiredColorVariantList[number];

type ColorStateRecord = Record<IColorState, IButtonColorVariant>;

type ColorVariantRecord = Record<IRequiredColorVariants, ColorStateRecord> &
  Partial<Record<Exclude<IColorVariant, IRequiredColorVariants>, ColorStateRecord>>;

const buttonColors: Record<IButtonVariant, ColorVariantRecord> = {
  filled: {
    primary: {
      default: {
        primary: colors.fc_white,
        background: colors.fc_green,
        border: 'transparent',
      },
      hover: {
        primary: colors.fc_white,
        background: colors.fc_hover_green,
        border: 'transparent',
      },
      disabled: {
        primary: colors.fc_white,
        background: colors.fc_black_30,
        border: 'transparent',
      },
    },
    danger: {
      default: {
        primary: colors.fc_white,
        background: colors.fc_red,
        border: 'transparent',
      },
      hover: {
        primary: colors.fc_white,
        background: colors.fc_hover_red,
        border: 'transparent',
      },
      disabled: {
        primary: colors.fc_white,
        background: colors.fc_black_30,
        border: 'transparent',
      },
    },
  },
  outline: {
    primary: {
      default: {
        primary: colors.fc_green,
        background: 'transparent',
        border: colors.fc_green,
      },
      hover: {
        primary: colors.fc_hover_green,
        background: 'transparent',
        border: colors.fc_hover_green,
      },
      disabled: {
        primary: colors.fc_black_30,
        background: 'transparent',
        border: colors.fc_black_30,
      },
    },
    danger: {
      default: {
        primary: colors.fc_red,
        background: 'transparent',
        border: colors.fc_red,
      },
      hover: {
        primary: colors.fc_hover_red,
        background: 'transparent',
        border: colors.fc_hover_red,
      },
      disabled: {
        primary: colors.fc_black_30,
        background: 'transparent',
        border: colors.fc_black_30,
      },
    },
  },
  link: {
    primary: {
      default: {
        primary: colors.fc_black_100,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        primary: colors.fc_hover_green,
        background: 'transparent',
        border: 'transparent',
      },
      disabled: {
        primary: colors.fc_black_30,
        background: 'transparent',
        border: 'transparent',
      },
    },
    secondary: {
      default: {
        primary: colors.fc_black_70,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        primary: colors.fc_hover_green,
        background: 'transparent',
        border: 'transparent',
      },
      disabled: {
        primary: colors.fc_black_30,
        background: 'transparent',
        border: 'transparent',
      },
    },
    danger: {
      default: {
        primary: colors.fc_red,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        primary: colors.fc_hover_red,
        background: 'transparent',
        border: 'transparent',
      },
      disabled: {
        primary: colors.fc_black_30,
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
  text: {
    primary: {
      default: {
        primary: colors.fc_green,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        primary: colors.fc_hover_green,
        background: 'transparent',
        border: 'transparent',
      },
      disabled: {
        primary: colors.fc_black_30,
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
  cancel: {
    primary: {
      default: {
        primary: colors.fc_black_100,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        primary: colors.fc_black_100,
        background: 'transparent',
        border: 'transparent',
      },
      disabled: {
        primary: colors.fc_black_30,
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
};

const getColorVariantOrPrimary = (variant: IButtonVariant, colorVariant: IColorVariant) =>
  buttonColors[variant][colorVariant] ?? buttonColors[variant][PRIMARY_COLOR_NAME];

const buttonColorSwitch = (colorState: IColorState) => css<ButtonProps>`
  color: ${({ variant = 'filled', colorVariant = 'primary' }) =>
    getColorVariantOrPrimary(variant, colorVariant)[colorState].primary};

  background-color: ${({ variant = 'filled', colorVariant = 'primary' }) =>
    getColorVariantOrPrimary(variant, colorVariant)[colorState].background};

  border-color: ${({ variant = 'filled', colorVariant = 'primary' }) =>
    getColorVariantOrPrimary(variant, colorVariant)[colorState].border};

  svg {
    ${({ small = false }) =>
      small
        ? css`
            width: 16px;
            height: 16px;
          `
        : css`
            width: 24px;
            height: 24px;
          `}

    fill: ${({ variant = 'filled', colorVariant = 'primary' }) =>
      getColorVariantOrPrimary(variant, colorVariant)[colorState].primary};

    transition: fill 0.2s ease-out;

    path {
      fill: inherit;
    }
  }
`;

const filledAndOutline = {
  default: css`
    min-width: 100px;
    border: 1px solid;

    padding: 0rem 12px;

    span.fc-button__raw-text {
      padding: 0 4px;
    }
  `,
  small: css`
    min-width: 80px;
    border: 1px solid;

    padding: 0rem 12px;

    span.fc-button__raw-text:only-child {
      padding: 0rem 4px;
    }

    span.fc-button__raw-text {
      padding-right: 2px;
      padding-left: 4px;
    }

    svg + span.fc-button__raw-text {
      padding-right: 4px;
      padding-left: 2px;
    }
  `,
};

const buttonModifiers = {
  filled: filledAndOutline,
  outline: filledAndOutline,
  link: {
    default: css`
      gap: 4px;
      padding: 0;
      text-decoration: underline;
    `,
    small: css`
      gap: 2px;
      padding: 0;
      text-decoration: underline;
    `,
  },
  text: {
    default: css`
      gap: 4px;
      padding: 0;
    `,
    small: css`
      gap: 2px;
      padding: 0;
    `,
  },
  cancel: {
    default: css`
      gap: 4px;
      padding: 0;
      text-decoration: underline;
    `,
    small: css`
      gap: 2px;
      padding: 0;
      text-decoration: underline;
    `,
  },
};

export const Button = styled.button<ButtonProps>`
  ${({ small = false }) =>
    small
      ? css`
          font-size: 0.6875rem; // 11px;
          height: 32px;
        `
      : css`
          font-size: 0.875rem; // 14px
          height: 40px;
        `}

  font-family: 'Red Hat Text', sans-serif;
  line-height: 1.32;
  display: inline-flex;
  border-radius: 12px;
  font-weight: 700;
  box-sizing: border-box;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  ${buttonColorSwitch('default')}

  &:disabled {
    cursor: default;
    ${buttonColorSwitch('disabled')}
  }

  &:hover:not(:disabled) {
    ${buttonColorSwitch('hover')}
  }

  ${({ variant = 'filled', small = false }) => buttonModifiers[variant][small ? 'small' : 'default']}

  ${({ iconOnly = false }) =>
    iconOnly
      ? css`
          min-width: 32px;
          padding: 0;
          height: 32px;
          width: 32px;
          border-radius: 8px;

          *:not(svg, svg *) {
            display: none;
          }
        `
      : ''}
`;
