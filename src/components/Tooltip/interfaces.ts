import { ReactNode } from 'react';

export interface ITooltipProps {
	active: boolean;
	backgroundColor?: string;
	color?: string;
	arrow?: boolean;
	direction: 'bottom' | 'left' | 'right' | 'top';
	content: ReactNode;
	children: ReactNode;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onClick?: () => void;
}
