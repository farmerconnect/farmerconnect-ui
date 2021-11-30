import { HTMLProps, ReactNode } from 'react';
import { Label } from './styles';
import * as Icon from '../Icons';

export type RadioProps = {
  children?: ReactNode;
} & HTMLProps<HTMLInputElement>;

const Radio = ({ children, className, style, ...props }: RadioProps) => (
  <Label className={className} style={style} disabled={props.disabled}>
    <input type="radio" {...props} />
    <Icon.RadioChecked className="checked" />
    <Icon.RadioUnchecked className="unchecked" />
    {children}
  </Label>
);

export default Radio;
