import { DivPropsWithoutRef } from 'react-html-props';

export const variants = ['default', 'small'] as const;

export type Variants = typeof variants[number];

export interface IDatePickerProps extends Omit<DivPropsWithoutRef, 'onChange' | 'placeholder'> {
  start?: Date | null;
  end?: Date | null;
  selectsRange?: boolean;
  onChange?: (start: Date | null, end: Date | null) => void;
  monthsShown?: number;
  variant?: Variants;
  error?: boolean | string;
  helperText?: string;
  onBlur?: () => void;
  weekDays?: [string, string, string, string, string, string, string];
  buttonText?: [string, string, string];
  dividerText?: string;
  placeholder?: [string, string] | string;
}
