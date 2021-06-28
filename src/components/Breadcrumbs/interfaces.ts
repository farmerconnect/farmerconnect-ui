import { IBreadcrumbColorProps } from './Breadcrumb/interfaces';

export interface IBreadcrumbProps {
  active: boolean;
  text: string;
}

export interface IBreadcrumbsProps extends IBreadcrumbColorProps {
  breadcrumbs: IBreadcrumbProps[];
}
