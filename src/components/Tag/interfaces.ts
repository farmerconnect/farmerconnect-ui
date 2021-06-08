import { HTMLAttributes } from 'react';
import CustomStyles from '../CustomStyles';

export type variant = 'danger' | 'primary' | 'success' | 'warning' | 'secondary';

interface ITagColor {
  color: string;
  backgroundColor: string;
}

export interface ITag {
  colors?: {
    danger?: ITagColor;
    primary?: ITagColor;
    success?: ITagColor;
    warning?: ITagColor;
    secondary?: ITagColor;
  };
}

export interface ITagProps extends CustomStyles, HTMLAttributes<HTMLDivElement> {
  color?: string;
  variant?: variant;
  backgroundColor?: string;
}
