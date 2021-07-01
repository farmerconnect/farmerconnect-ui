import { TextareaHTMLAttributes } from 'react';

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean | string;
  success?: boolean;
}
