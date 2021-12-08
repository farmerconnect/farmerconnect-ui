import { InputHTMLAttributes, ReactNode } from 'react';

export interface ISmallInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
  success?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  helperText?: ReactNode;
}
