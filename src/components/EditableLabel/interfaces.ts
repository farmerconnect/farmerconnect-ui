import { ReactNode } from 'react';

export interface iEditableLabelProps {
  disabled?: boolean;
  children?: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  allowEmptyValue?: boolean;
  minLength?: number;
  maxLength?: number;
  onSave?: (s: string) => void;
  text?: {
    save: string;
    edit: string;
  };
}
