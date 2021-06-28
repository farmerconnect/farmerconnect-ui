import { FC } from 'react';

export interface IIconProps {
	fill?: string;
	className?: string;
}

export type IconData = {
	Icon: FC<IIconProps>;
	name: string;
};
