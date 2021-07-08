import { ReactNode } from 'react';

export interface iEditableLabelProps {
  disabled?: boolean;
  children?: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  allowEmptyValue?: boolean;
  validate?: (s: string) => string | boolean;
  onSave?: (s: string) => void;
  text?: {
    save: string;
    edit: string;
  };
}
