/* eslint-disable no-console */
import { InputHTMLAttributes } from 'react';

export function isISearchInputProps(props: ISearchInputProps): props is ISearchInputProps {
  const errorList = [];
  let debounceTimeValid = false;
  if (typeof props.debounceTime === 'number'){
    debounceTimeValid = props.debounceTime >= 0;
  }

  if (!debounceTimeValid) errorList.push(`debounceTime (${props.debounceTime}) must be greater than or equal to 0.`);

  if (errorList.length > 0) console.error(errorList.join('\n'));

  return debounceTimeValid;
}

export type OnSearchFn = (value: string) => void;

export interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  onSearch: OnSearchFn;
  debounceTime?: number;
  placeholder?: string;
}
