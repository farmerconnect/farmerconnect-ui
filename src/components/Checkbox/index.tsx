import { HTMLProps, ReactNode } from 'react';
import { Label } from './styles';
import { CheckboxChecked, CheckboxUnchecked } from '../Icons/Checkbox';

export type CheckboxProps = {
  children?: ReactNode;
} & HTMLProps<HTMLInputElement>;

const Checkbox = ({ children, className, style, ...props }: CheckboxProps) => (
  <Label className={className} style={style}>
    <input type="checkbox" {...props} />
    <CheckboxChecked className="checked" />
    <CheckboxUnchecked data-testid="unchecked" className="unchecked" />
    {children}
  </Label>
);

export default Checkbox;
