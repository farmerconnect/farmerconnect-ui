interface IOrdererOptionsSortable {
  key: string;
}

export interface IOrdererOptions {
  sortable?: IOrdererOptionsSortable;
}

export interface ITableSortOptions {
  key: string;
  order: string;
  actualSortKey: string;
}

export interface ITableSortProps {
  sort?: ITableSortOptions;
  onSortChange?: (key: string, order: string, actualSortKey: string) => void;
}
