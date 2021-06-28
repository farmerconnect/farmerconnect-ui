import { HTMLProps } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  variant?: 'filled' | 'outline' | 'link' | 'text';
  small?: boolean;
} & HTMLProps<HTMLButtonElement>;

const buttonModifiers = {
  filled: css`
    border: 1px solid transparent;
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid #00e394;
    color: #00e394;
    svg {
      fill: #00e394;
    }
    &:disabled {
      background-color: transparent;
      border-color: rgba(20, 20, 20, 0.3);
      color: rgba(20, 20, 20, 0.3);
      svg {
        fill: rgba(20, 20, 20, 0.3);
      }
    }
    &:hover:not(:disabled) {
      background-color: #f3f3f3;
      color: #02ce87;
      border-color: #02ce87;
      svg {
        fill: #02ce87;
      }
    }
  `,
  link: css`
    background-color: transparent;
    border: none;
    color: #00e394;
    padding: 0.625rem 0rem;
    svg {
      fill: #00e394;
    }
    text-decoration: underline;
    &:disabled {
      background-color: transparent;
      color: rgba(20, 20, 20, 0.3);
      svg {
        fill: rgba(20, 20, 20, 0.3);
      }
    }
    &:hover:not(:disabled) {
      color: #02ce87;
      svg {
        fill: #02ce87;
      }
      background-color: transparent;
    }
  `,
  text: css`
    background-color: transparent;
    border: none;
    color: #00e394;
    padding: 0.625rem 0rem;
    svg {
      fill: #00e394;
    }
    &:disabled {
      background-color: transparent;
      color: rgba(20, 20, 20, 0.3);
      svg {
        fill: rgba(20, 20, 20, 0.3);
      }
    }
    &:hover:not(:disabled) {
      color: #02ce87;
      background-color: transparent;
      svg {
        fill: #02ce87;
      }
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  font-size: 0.875rem;
  line-height: 1.32;
  padding: 0.625rem 2.3rem;
  display: inline-flex;
  border-radius: 0.75rem;
  font-weight: 700;
  color: white;
  box-sizing: border-box;
  background-color: #00e394;
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
  svg {
    fill: white;
    transition: fill 0.2s ease-out;

    path {
      fill: inherit;
    }
  }
  &:disabled {
    cursor: default;
    background-color: rgba(20, 20, 20, 0.3);
  }
  &:hover:not(:disabled) {
    background-color: #02ce87;
  }
  ${({ variant = 'filled' }) => buttonModifiers[variant]}
`;
