import { Arrow } from '../Icons';
import SmallSelect from '../SmallSelect';
import { IPageNumber, IPageNumberDisplay, IPagination, IPaginationProps, isIPaginationProps } from './interfaces';
import {
  generatePageNumberArray,
  generateSelectOptionArray,
  getFirstItemOnCurrentPage,
  getLastItemOnCurrentPage,
  getLastPageIndex,
  updatePageNumber,
} from './utils';

import { farmerConnectTheme } from '../Theme';
import Typography from '../Typography';
import * as S from './styles';

const MIN_NUMBER_OF_PAGES = 5;

const defaultProps = {
  openMenuUpwards: false,
  hasItemCount: true,
  hasSelect: true,
  hasArrows: true,
  pageSizeLabelTemplate: (pageSize: number) => `${pageSize} / page`,
  pageSizeArray: [10, 25, 50, 100],
  displayedItemsTemplate: (firstItem: number, lastItem: number, totalItemCount: number) =>
    `${firstItem}-${lastItem} of ${totalItemCount}`,
};

const Pagination: React.FC<IPaginationProps> = (incomingProps: IPaginationProps) => {
  const {
    openMenuUpwards = defaultProps.openMenuUpwards,
    hasSelect = defaultProps.hasSelect,
    hasArrows = defaultProps.hasArrows,
    hasItemCount = defaultProps.hasItemCount,
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

  const onSelectChange = (incomingOption: { value: string; label: string } | null) => {
    if (incomingOption == null) return;

    const { value } = incomingOption;
    const newPageSize = parseInt(value, 10);

    onPaginate(updatePageNumber(pagination, newPageSize));
  };

  const firstItemOnPage = getFirstItemOnCurrentPage(pagination);
  const lastItemOnPage = getLastItemOnCurrentPage(pagination);

  const selectOptions = generateSelectOptionArray(pagination, pageSizeArray, pageSizeLabelTemplate);

  return (
    <S.PaginationContainer {...props}>
      <S.SelectContainer>
        {hasSelect && (
          <S.PageCount>
            <SmallSelect
              onChange={onSelectChange}
              value={selectOptions.find((option) => option.selected) || selectOptions[0]}
              options={selectOptions}
              menuPlacement={openMenuUpwards ? 'top' : 'bottom'}
              isSearchable={false}
            ></SmallSelect>
          </S.PageCount>
        )}
        {hasItemCount && (
          <Typography variant="small" tagName="span">
            {displayedItemsTemplate(firstItemOnPage, lastItemOnPage, pagination.totalItemCount)}
          </Typography>
        )}
      </S.SelectContainer>
      <S.ButtonsContainer>
        {hasArrows && (
          <PaginationArrowButton
            isHidden={pagination.currentPageIndex === 0}
            direction="left"
            pagination={pagination}
            onClick={(currentPagination: IPagination) => {
              onPaginate({
                ...currentPagination,
                currentPageIndex: currentPagination.currentPageIndex - 1,
              });
            }}
          />
        )}
        {
          <S.InlinePaginationNumbers>
            {generatePageNumberArray(MIN_NUMBER_OF_PAGES, pagination).map((pageNumber, i) => {
              return (
                <li key={`${pageNumber.display}-${i}`}>
                  {typeof pageNumber.index === 'number' ? (
                    <PaginationButton
                      pageNumber={pageNumber}
                      onPageNumberClick={(pageNumber: IPageNumber) => {
                        onPaginate({
                          ...pagination,
                          currentPageIndex: pageNumber.index,
                        });
                      }}
                    />
                  ) : (
                    <Typography tagName="span">{pageNumber.display}</Typography>
                  )}
                </li>
              );
            })}
          </S.InlinePaginationNumbers>
        }
        {hasArrows && (
          <PaginationArrowButton
            isHidden={pagination.currentPageIndex === lastPageIndex}
            direction="right"
            pagination={pagination}
            onClick={(currentPagination: IPagination) => {
              onPaginate({
                ...currentPagination,
                currentPageIndex: currentPagination.currentPageIndex + 1,
              });
            }}
          />
        )}
      </S.ButtonsContainer>
    </S.PaginationContainer>
  );
};

const PaginationButton: React.FC<{
  pageNumber: IPageNumberDisplay;
  onPageNumberClick?: (pageNumber: IPageNumber) => void;
}> = ({ pageNumber, onPageNumberClick = () => {} }) => {
  return pageNumber.selected ? (
    <S.PaginationNumberButton
      disabled
      backgroundColor={farmerConnectTheme.colors.fc_black_5}
      customStyles={{
        ':hover': {
          backgroundColor: farmerConnectTheme.colors.fc_black_5,
          cursor: 'default',
        },
      }}
    >
      <Typography color={'fc_green'} tagName="span" fontStyle="highlight">
        {pageNumber.display}
      </Typography>
    </S.PaginationNumberButton>
  ) : (
    <S.PaginationNumberButton
      onClick={() => onPageNumberClick(pageNumber as IPageNumber)}
      color={farmerConnectTheme.colors.fc_black_100}
      backgroundColor={farmerConnectTheme.colors.fc_white}
      customStyles={{
        ':hover': {
          backgroundColor: farmerConnectTheme.colors.fc_black_5,
        },
      }}
    >
      <Typography tagName="span">{pageNumber.display}</Typography>
    </S.PaginationNumberButton>
  );
};

const PaginationArrowButton: React.FC<{
  direction: 'left' | 'right';
  onClick: (pagination: IPagination) => void;
  pagination: IPagination;
  isHidden: boolean;
}> = ({ direction, onClick, pagination, isHidden }) => {
  return (
    <S.PaginationArrowButton
      isHidden={isHidden}
      backgroundColor={farmerConnectTheme.colors.fc_white}
      color={farmerConnectTheme.colors.fc_green}
      onClick={() => onClick(pagination)}
      customStyles={{
        ':hover': {
          backgroundColor: farmerConnectTheme.colors.fc_black_5,
        },
      }}
    >
      <Arrow fill={farmerConnectTheme.colors.fc_green} direction={direction} />
    </S.PaginationArrowButton>
  );
};

export default Pagination;
