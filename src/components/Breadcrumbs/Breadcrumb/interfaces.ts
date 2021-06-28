export interface IBreadcrumb {
	colors: IBreadcrumbColors;
}

export interface IBreadcrumbColors {
	primary: string;
	secondary: string;
	tertiary?: string;
}

export interface IBreadcrumbColorProps {
	doneColor?: string;
	undoneColor?: string;
	titleColor?: string;
}

export interface IBreadcrumbBarProps extends IBreadcrumbColorProps {
	active?: boolean;
	done: boolean;
}

export interface IBreadcrumbProps extends IBreadcrumbBarProps {
	hasNext?: boolean;
	hasPrevious?: boolean;
	text: string;
}

export interface IBreadcrumbLineProps extends IBreadcrumbBarProps {
	visible?: boolean;
}
