import { IPagination, IPageNumberDisplay, ISelectOptionArray } from './interfaces';

type PaginationDetailGenerator = (pagination: IPagination) => number;

export const getLastPageIndex: PaginationDetailGenerator = (pagination) => {
  const calculatedLastPage = Math.ceil(pagination.totalItemCount / pagination.pageSize) - 1;
  return calculatedLastPage >= 0 ? calculatedLastPage : 0;
};

export const getFirstItemOnCurrentPage: PaginationDetailGenerator = (pagination) => {
  if (pagination.totalItemCount === 0) return 0;
  return pagination.currentPageIndex * pagination.pageSize + 1;
};

export const getLastItemOnCurrentPage: PaginationDetailGenerator = (pagination) => {
  const potentialLastItem = (pagination.currentPageIndex + 1) * pagination.pageSize;
  return potentialLastItem > pagination.totalItemCount ? pagination.totalItemCount : potentialLastItem;
};

export const updatePageNumber: (pagination: IPagination, newPageSize: number) => IPagination = (
  pagination,
  newPageSize
) => {
  const firstItemOnPage = getFirstItemOnCurrentPage(pagination);
  const newPageOfFirstItemOnPage = Math.floor(firstItemOnPage / newPageSize);

  return {
    ...pagination,
    pageSize: newPageSize,
    currentPageIndex: newPageOfFirstItemOnPage,
  };
};

type PageIndexesArrayGenerator = (MIN_NUMBER_OF_PAGES: number, pagination: IPagination) => (number | string)[];
const generatePageIndexesOrDisplayArray: PageIndexesArrayGenerator = (MIN_NUMBER_OF_PAGES, pagination) => {
  const lastPageIndex = getLastPageIndex(pagination);
  if (lastPageIndex <= MIN_NUMBER_OF_PAGES - 1) {
    return Array(lastPageIndex + 1)
      .fill(undefined)
      .map((_, i) => i);
  }

  if (pagination.currentPageIndex === 0 || pagination.currentPageIndex === 1 || pagination.currentPageIndex === 2)
    return [0, 1, 2, 3, '...', lastPageIndex];

  if (
    pagination.currentPageIndex === lastPageIndex ||
    pagination.currentPageIndex === lastPageIndex - 1 ||
    pagination.currentPageIndex === lastPageIndex - 2
  )
    return [0, '...', lastPageIndex - 3, lastPageIndex - 2, lastPageIndex - 1, lastPageIndex];

  return [
    0,
    '...',
    pagination.currentPageIndex - 1,
    pagination.currentPageIndex,
    pagination.currentPageIndex + 1,
    '...',
    lastPageIndex,
  ];
};

type PageNumberDisplayArrayGenerator = (MIN_NUMBER_OF_PAGES: number, pagination: IPagination) => IPageNumberDisplay[];
export const generatePageNumberArray: PageNumberDisplayArrayGenerator = (MIN_NUMBER_OF_PAGES, pagination) => {
  const indexOrDisplayArray = generatePageIndexesOrDisplayArray(MIN_NUMBER_OF_PAGES, pagination);
  return indexOrDisplayArray.map((display) => ({
    selected: display === pagination.currentPageIndex,
    display: typeof display === 'string' ? display : `${display + 1}`,
    index: typeof display === 'number' ? display : undefined,
  }));
};

type SelectOptionArrayGenerator = (
  pagination: IPagination,
  pageSizeArray: number[],
  pageSizeLabelTemplate: (pageSize: number) => string
) => ISelectOptionArray;
export const generateSelectOptionArray: SelectOptionArrayGenerator = (pagination, pageSizeArray, pageSizeLabelTemplate) => {
  return pageSizeArray.map((pageSize) => ({
    selected: pageSize === pagination.pageSize,
    label: pageSizeLabelTemplate(pageSize),
    value: `${pageSize}`,
  }));
};
