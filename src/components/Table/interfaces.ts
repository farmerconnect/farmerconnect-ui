import { HTMLAttributes, ReactElement, ReactNode } from 'react';

export type TableCloneChildrenFunction = (children: ITableChildren) => ReactElement | null;

interface ITableColumnOptionsSortable {
  key: string;
}

export interface ITableChildren {
  element: ReactNode;
  key?: string;
  index?: number;
}

export interface ITableColumnOptions extends HTMLAttributes<HTMLTableDataCellElement> {
  centered?: boolean;
  sortable?: ITableColumnOptionsSortable;
  fitContent?: boolean;
}

export interface ITableColumn {
  text?: string;
  options?: ITableColumnOptions;
}

export interface ITableSortOptions {
  key: string;
  order: string;
}

export interface ITableSort {
  sort?: ITableSortOptions;
  onSortChange?: (key: string, order: string) => void;
}

export interface ITableProps extends ITableSort {
  columns: ITableColumn[];
}
