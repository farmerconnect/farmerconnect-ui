import { ReactNode } from "react";

export type ICardProps = {
  type: 'Default' | 'Main'
  maxHeight?: string,
  maxWidth?: string,
  title: string,
  children?: ReactNode;
  action?: string;
  onAction?: () => void; 
  collapse?: string;
  collapseState?: 'more' | 'less';
  onCollapse?: () => void; 
};