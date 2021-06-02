export interface ITableColumnOptions {
  sortable?: boolean;
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
