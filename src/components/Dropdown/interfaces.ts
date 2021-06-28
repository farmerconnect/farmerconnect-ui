export type DropdownItem = {
	value: string;
	label: string;
};

type positionType =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'middle-left'
	| 'center'
	| 'middle-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

export type ListProps = {
	position: positionType;
};

export type IDropdownListProps<T extends DropdownItem> = {
	items: T[];
	isOpen?: boolean;
	position?: positionType;
	onSelect?: (item: T) => void;
	onClose?: () => void;
	className?: string;
};
