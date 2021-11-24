import { HTMLProps, ReactNode } from 'react';
import * as Icon from '../Icons';
import { Label } from './styles';

export type CheckboxProps = {
  children?: ReactNode;
} & HTMLProps<HTMLInputElement>;

const Checkbox = ({ children, className, style, ...props }: CheckboxProps) => (
  <Label className={className} style={style} disabled={props.disabled}>
    <input type="checkbox" {...props} />
    <Icon.CheckboxChecked className="checked" />
    <Icon.CheckboxUnchecked className="unchecked" />
    {children}
  </Label>
);

export default Checkbox;
