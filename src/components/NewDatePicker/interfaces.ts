import { DivPropsWithoutRef } from 'react-html-props';

export interface IDatePickerProps extends Omit<DivPropsWithoutRef, 'onChange'> {
  start?: Date | null;
  end?: Date | null;
  selectsRange: boolean;
  onChange?: (start: Date | null, end: Date | null) => void;
  monthsShown?: number;
  variant?: 'small' | 'default';
  error?: boolean | string;
  helperText?: string;
}
