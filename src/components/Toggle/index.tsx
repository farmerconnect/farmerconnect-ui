import { HTMLProps, ReactNode } from 'react';
import { Label, Slider } from './styles';

export type ToggleProps = {
	children?: ReactNode;
} & HTMLProps<HTMLInputElement>;

const Checkbox = ({ children, className, style, ...props }: ToggleProps) => (
	<Label className={className} style={style}>
		<input type="checkbox" {...props} />
		<Slider data-testid="slider">
			<div />
		</Slider>
		{children}
	</Label>
);

export default Checkbox;
