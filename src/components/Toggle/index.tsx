import { HTMLProps, ReactNode } from 'react';
import { Label, Slider } from './styles';

export type ToggleProps = {
	children?: ReactNode;
  textFirst?: boolean;
} & HTMLProps<HTMLInputElement>;

const Checkbox = ({ children, textFirst, className, style, ...props }: ToggleProps) => (
	<Label className={className} style={style}>
    {textFirst && children}
		<input type="checkbox" {...props} />
		<Slider data-testid="slider">
			<div />
		</Slider>
		{!textFirst && children}
	</Label>
);

export default Checkbox;
