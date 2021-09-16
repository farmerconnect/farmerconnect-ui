import { Arrow } from '../Icons';
import Button from '../Button';
import SmallSelect from '../SmallSelect';
import { IPaginationProps, isIPaginationProps, IPagination, IPageNumber } from './interfaces';
import {
  getLastPageIndex,
  getFirstItemOnCurrentPage,
  getLastItemOnCurrentPage,
  generatePageNumberArray,
  updatePageNumber,
  generateSelectOptionArray,
} from './utils';

import * as S from './styles';
import { farmerConnectTheme } from '../Theme';
import Typography from '../Typography';

const MIN_NUMBER_OF_PAGES = 5;

const defaultProps = {
  hasSelect: true,
  hasArrows: true,
  pageSizeLabelTemplate: (pageSize: number) => `${pageSize} / page`,
  pageSizeArray: [10, 25, 50, 100],
  displayedItemsTemplate: (firstItem: number, lastItem: number, totalItemCount: number) =>
    `${firstItem}-${lastItem} of ${totalItemCount}`,
};

const Pagination: React.FC<IPaginationProps> = (incomingProps: IPaginationProps) => {
  const {
    hasSelect = defaultProps.hasSelect,
    hasArrows = defaultProps.hasArrows,
    pageSizeLabelTemplate = defaultProps.pageSizeLabelTemplate,
    pageSizeArray = defaultProps.pageSizeArray,
    displayedItemsTemplate = defaultProps.displayedItemsTemplate,
    pagination,
    onPaginate,
    ...props
  } = incomingProps;

  if (!isIPaginationProps(incomingProps)) {
    console.error('Pagination props are not valid, the pagination will likely render incorrectly.');
  }

  const lastPageIndex = getLastPageIndex(pagination);

  const onBackButtonClick = (currentPagination: IPagination) => {
    onPaginate({
      ...currentPagination,
      currentPageIndex: currentPagination.currentPageIndex - 1,
    });
  };

  const onForwardButtonClick = (currentPagination: IPagination) => {
    onPaginate({
      ...currentPagination,
      currentPageIndex: currentPagination.currentPageIndex + 1,
    });
  };

  const onSelectChange = (incomingOption: { value: string; label: string } | null) => {
    if (incomingOption == null) return;

    const { value } = incomingOption;
    const newPageSize = parseInt(value, 10);

    onPaginate(updatePageNumber(pagination, newPageSize));
  };

  const onPageNumberClick = (pageNumber: IPageNumber) => {
    onPaginate({
      ...pagination,
      currentPageIndex: pageNumber.index,
    });
  };

  const firstItemOnPage = getFirstItemOnCurrentPage(pagination);
  const lastItemOnPage = getLastItemOnCurrentPage(pagination);

  const selectOptions = generateSelectOptionArray(pagination, pageSizeArray, pageSizeLabelTemplate);

  return (
    <S.PaginationContainer {...props}>
      {hasSelect && (
        <S.SelectContainer>
          <S.PageCount>
            <SmallSelect
              onChange={onSelectChange}
              value={selectOptions.find((option) => option.selected) || selectOptions[0]}
              options={selectOptions}
            ></SmallSelect>
          </S.PageCount>
          <Typography variant="small" tagName="span">
            {displayedItemsTemplate(firstItemOnPage, lastItemOnPage, pagination.totalItemCount)}
          </Typography>
        </S.SelectContainer>
      )}
      <S.ButtonsContainer>
        {hasArrows && pagination.currentPageIndex !== 0 && (
          <Button backgroundColor={farmerConnectTheme.colors.fc_white} onClick={() => onBackButtonClick(pagination)}>
            <Arrow fill={farmerConnectTheme.colors.fc_green} direction="left"></Arrow>
          </Button>
        )}
        {
          <S.InlinePaginationNumbers>
            {generatePageNumberArray(MIN_NUMBER_OF_PAGES, pagination).map((pageNumber, i) => {
              return (
                <li key={`${pageNumber.display}-${i}`}>
                  {typeof pageNumber.index === 'number' ? (
                    pageNumber.selected ? (
                      <Button backgroundColor={farmerConnectTheme.colors.fc_black_5}>
                        <Typography color={'fc_green'} tagName="span" fontStyle="highlight">
                          {pageNumber.display}
                        </Typography>
                      </Button>
                    ) : (
                      <Button
                        onClick={() => onPageNumberClick(pageNumber as IPageNumber)}
                        color={farmerConnectTheme.colors.fc_black_100}
                        backgroundColor={farmerConnectTheme.colors.fc_white}
                      >
                        <Typography tagName="span">{pageNumber.display}</Typography>
                      </Button>
                    )
                  ) : (
                    <Typography tagName="span">{pageNumber.display}</Typography>
                  )}
                </li>
              );
            })}
          </S.InlinePaginationNumbers>
        }
        {hasArrows && pagination.currentPageIndex !== lastPageIndex && (
          <Button
            backgroundColor={farmerConnectTheme.colors.fc_white}
            color={farmerConnectTheme.colors.fc_green}
            onClick={() => onForwardButtonClick(pagination)}
          >
            <Arrow fill={farmerConnectTheme.colors.fc_green} direction="right"></Arrow>
          </Button>
        )}
      </S.ButtonsContainer>
    </S.PaginationContainer>
  );
};

export default Pagination;
