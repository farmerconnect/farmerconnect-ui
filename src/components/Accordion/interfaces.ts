import { ReactNode, HTMLAttributes } from 'react';

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}
