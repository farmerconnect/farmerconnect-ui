import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean | string;
  success?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  helperText?: ReactNode;
  unit?: string;
}
