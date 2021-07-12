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

export interface ITableBody {
  slim?: boolean;
}
export interface ITableHoverable {
  hoverable?: boolean;
}

export interface ITableStyles {
  slim?: boolean;
  hoverable?: boolean;
}
export interface ITable {
  colors?: {
    head?: {
      color?: string;
      backgroundColor?: string;
    };
    body?: {
      color?: string;
      borderColor?: string;
      backgroundColor?: string;
    };
  };
}

export interface ITableProps extends ITableSort, ITableBody, ITableHoverable {
  isLoading?: boolean;
  columns: ITableColumn[];
}
