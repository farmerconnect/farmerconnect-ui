import { HTMLProps } from 'react';
import styled, { css } from 'styled-components';

const buttonVariantList = ['filled', 'outline', 'link', 'text', 'cancel'] as const;
type IButtonVariant = typeof buttonVariantList[number];

export type ButtonProps = {
  variant?: IButtonVariant;
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

const buttonColors: { [key in IButtonVariant]: { [key in IColorState]: IButtonColorVariant } } = {
  filled: {
    default: {
      primary: 'white',
      background: '#00e394',
      border: 'transparent',
    },
    hover: {
      primary: 'white',
      background: '#02ce87',
      border: 'transparent',
    },
    disabled: {
      primary: 'white',
      background: 'rgba(20, 20, 20, 0.3)',
      border: 'transparent',
    },
  },
  outline: {
    default: {
      primary: '#00e394',
      background: 'transparent',
      border: '#00e394',
    },
    hover: {
      primary: '#02ce87',
      background: '#f3f3f3',
      border: '#02ce87',
    },
    disabled: {
      primary: 'rgba(20, 20, 20, 0.3)',
      background: 'transparent',
      border: 'rgba(20, 20, 20, 0.3)',
    },
  },
  link: {
    default: {
      primary: '#00e394',
      background: 'transparent',
      border: 'transparent',
    },
    hover: {
      primary: '#02ce87',
      background: 'transparent',
      border: 'transparent',
    },
    disabled: {
      primary: 'rgba(20, 20, 20, 0.3)',
      background: 'transparent',
      border: 'transparent',
    },
  },
  text: {
    default: {
      primary: '#00e394',
      background: 'transparent',
      border: 'transparent',
    },
    hover: {
      primary: '#02ce87',
      background: 'transparent',
      border: 'transparent',
    },
    disabled: {
      primary: 'rgba(20, 20, 20, 0.3)',
      background: 'transparent',
      border: 'transparent',
    },
  },
  cancel: {
    default: {
      primary: '#141414',
      background: 'transparent',
      border: 'transparent',
    },
    hover: {
      primary: '#141414',
      background: 'transparent',
      border: 'transparent',
    },
    disabled: {
      primary: 'rgba(20, 20, 20, 0.3)',
      background: 'transparent',
      border: 'transparent',
    },
  },
};

const buttonColorSwitch = (colorState: IColorState) => css<ButtonProps>`
  color: ${({ variant = 'filled' }) => buttonColors[variant][colorState].primary};
  background-color: ${({ variant = 'filled' }) => buttonColors[variant][colorState].background};
  border-color: ${({ variant = 'filled' }) => buttonColors[variant][colorState].border};
  svg {
    fill: ${({ variant = 'filled' }) => buttonColors[variant][colorState].primary};
    transition: fill 0.2s ease-out;

    path {
      fill: inherit;
    }
  }
`;

const buttonModifiers = {
  filled: css`
    border: 1px solid;
  `,
  outline: css`
    border: 1px solid;
  `,
  link: css`
    padding: 0.625rem 0rem;
    text-decoration: underline;
  `,
  text: css`
    padding: 0.625rem 0rem;
  `,
  cancel: css`
    padding: 0.625rem 0rem;
    text-decoration: underline;
  `,
};

export const Button = styled.button<ButtonProps>`
  font-family: 'Red Hat Text', sans-serif;
  font-size: 0.875rem;
  line-height: 1.32;
  padding: 0.625rem 2.3rem;
  display: inline-flex;
  border-radius: 0.75rem;
  font-weight: 700;
  box-sizing: border-box;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ small = false }) =>
    small
      ? css`
          font-size: 0.6875rem;
          padding: 0.375rem 1rem;
        `
      : ''}

  ${buttonColorSwitch('default')}

  &:disabled {
    cursor: default;
    ${buttonColorSwitch('disabled')}
  }

  &:hover:not(:disabled) {
    ${buttonColorSwitch('hover')}
  }

  ${({ variant = 'filled' }) => buttonModifiers[variant]}

  ${({ iconOnly = false }) =>
    iconOnly
      ? css`
          min-width: 2rem;
          padding: 0;
          height: 32px;
          width: 32px;
          border-radius: 8px;
        `
      : ''}
`;
