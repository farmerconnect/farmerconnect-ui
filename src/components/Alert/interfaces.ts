import { HTMLAttributes, ReactNode } from 'react';
export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'danger' | 'warning' | 'info';
  children?: ReactNode;
}
