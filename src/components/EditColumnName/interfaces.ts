import { ReactNode } from 'react';

export interface IEditColumnNameProps {
	disabled?: boolean;
	children?: ReactNode;
	columnName?: string;
	columnFriendlyName?: string;
	onSave?: (s: string) => void;
	text?: {
		save: string;
		edit: string;
	};
}
