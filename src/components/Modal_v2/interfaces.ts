import { ReactNode } from 'react';
import { DivPropsWithoutRef, DialogPropsWithoutRef } from 'react-html-props';
import { iconVariants } from '.';
import { dialogWidth } from './styles';

export type DialogStyleProps = Pick<DialogProps, 'size'>;

export type OverlayProps = {
  show?: boolean;
} & DivPropsWithoutRef;

export type DialogProps = {
  onEsc?: () => void;
  size: keyof typeof dialogWidth;
} & Omit<DialogPropsWithoutRef, 'size'>;

export type FeedbackDialogProps = {
  variant?: keyof typeof iconVariants;
  title?: ReactNode;
  children?: ReactNode;
  controls?: ReactNode;
} & DialogPropsWithoutRef;

export type ConfirmationDialogProps = Omit<FeedbackDialogProps, 'variant'> & {
  onEsc?: () => void;
};
