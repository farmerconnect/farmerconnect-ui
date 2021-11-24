import { Arrow } from '../Icons';
import Button from '../Button';
import SmallSelect from '../SmallSelect';
import { IPaginationProps, isIPaginationProps, IPagination, IPageNumber, IPageNumberDisplay } from './interfaces';
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

  const PaginationArrowButton: React.FC<{ direction: 'left' | 'right'; onClick: (pagination: IPagination) => void }> =
    ({ direction, onClick }) => {
      return (
        <S.PaginationArrowButton
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
        {hasArrows && pagination.currentPageIndex !== 0 && (
          <PaginationArrowButton
            direction="left"
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
        {hasArrows && pagination.currentPageIndex !== lastPageIndex && (
          <PaginationArrowButton
            direction="right"
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

export default Pagination;
