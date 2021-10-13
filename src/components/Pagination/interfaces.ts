import { HTMLAttributes } from 'react';
import { getLastPageIndex } from './utils';

export function isIPaginationProps(props: IPaginationProps): props is IPaginationProps {
  const errorList = [];
  const pageSizeValid = props.pagination.pageSize > 0;

  if (!pageSizeValid) errorList.push(`pagination.pageSize (${props.pagination.pageSize}) must be greater than 0`);

  const pageSizeInSelectOptions = props.hasSelect
    ? props.pageSizeArray !== undefined && props.pageSizeArray.includes(props.pagination.pageSize)
    : true;

  if (!pageSizeInSelectOptions) {
    errorList.push(
      `pagination.pageSize (${
        props.pagination.pageSize
      }) in not in the values of selectOptions (${props.pageSizeArray?.join(', ')})`
    );
  }

  const currentPageIndexValid =
    props.pagination.currentPageIndex >= 0 && props.pagination.currentPageIndex <= getLastPageIndex(props.pagination);

  if (!currentPageIndexValid)
    errorList.push(
      `pagination.currentPageIndex (${
        props.pagination.currentPageIndex
      }) must be greater than 0 and less than ${getLastPageIndex(props.pagination)} while pagination.pageSize is ${
        props.pagination.pageSize
      }`
    );

  const totalItemCountValid = props.pagination.totalItemCount >= 0;

  if (!totalItemCountValid)
    errorList.push(`
      pagination.totalItemCount (${props.pagination.totalItemCount}) must be greater than or equal to 0.
  `);

  if (errorList.length > 0) console.error(errorList.join('\n'));

  return pageSizeValid && pageSizeInSelectOptions && currentPageIndexValid && totalItemCountValid;
}

export interface IPagination {
  pageSize: number;
  currentPageIndex: number;
  totalItemCount: number;
}

export type ISelectOption = { selected: boolean; label: string; value: string };
export type ISelectOptionArray = ReadonlyArray<ISelectOption>;

export interface IPaginationProps extends HTMLAttributes<HTMLDivElement> {
  hasItemCount?: boolean;
  hasSelect?: boolean;
  pageSizeArray?: number[];
  pageSizeLabelTemplate?: PageSizeLabelTemplate;
  hasArrows?: boolean;
  pagination: IPagination;
  onPaginate: (pagination: IPagination) => void;
  displayedItemsTemplate?: DisplayedItemsTemplate;
}

export type DisplayedItemsTemplate = (firstItem: number, lastItem: number, totalItemCount: number) => string;
export type PageSizeLabelTemplate = (pageSize: number) => string;
export interface IPageNumber {
  selected: boolean;
  display: string;
  index: number;
}

export interface IPageNumberDisplay {
  selected: boolean;
  display: string;
  index?: number;
}
