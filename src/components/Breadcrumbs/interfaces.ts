export interface IBreadcrumbProps {
  text: string;
  onClick?: () => void;
}

export interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumbProps[];
}