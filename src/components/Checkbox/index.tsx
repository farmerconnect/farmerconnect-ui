import { HTMLProps, ReactNode } from 'react';
import { Label } from './styles';

export type CheckboxProps = {
  children?: ReactNode;
} & HTMLProps<HTMLInputElement>;

const Checkbox = ({ children, className, style, ...props }: CheckboxProps) => (
  <Label className={className} style={style}>
    <input type="checkbox" {...props} />
    <CheckboxChecked className="checked" />
    <CheckboxUnchecked className="unchecked" />
    {children}
  </Label>
);

export default Checkbox;

const CheckboxUnchecked = (props: { className: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" fill="none" stroke="#141414" />
  </svg>
);

const CheckboxChecked = (props: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" fill="#141414" stroke="#141414" />
    <path
      d="M10.1348 14.1591L8.03182 12.0561C7.91859 11.9426 7.76486 11.8788 7.60455 11.8788C7.44423 11.8788 7.2905 11.9426 7.17727 12.0561C6.94091 12.2924 6.94091 12.6742 7.17727 12.9106L9.71061 15.4439C9.94697 15.6803 10.3288 15.6803 10.5652 15.4439L16.9773 9.03181C17.2136 8.79545 17.2136 8.41363 16.9773 8.17726C16.864 8.06378 16.7103 8 16.55 8C16.3897 8 16.236 8.06378 16.1227 8.17726L10.1348 14.1591Z"
      fill="white"
    />
  </svg>
);
