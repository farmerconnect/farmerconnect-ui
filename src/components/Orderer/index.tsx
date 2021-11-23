import React, { Fragment, useCallback } from 'react';
import { Sorting } from '../Icons';
import { SORT_ORDER } from './constants';
import { ITableSortProps } from './interfaces';
import * as S from './styles';

const Orderer: React.FC<ITableSortProps> = ({ sort, onSortChange }) => {
  const handleSortClick = useCallback(
    (key: string, currentOrder: string) => {
      const getSortOrder = () => {
        if (key === sort?.key) {
          return currentOrder === SORT_ORDER.ASC ? SORT_ORDER.DESC : SORT_ORDER.ASC;
        }

        return SORT_ORDER.ASC;
      };

      onSortChange && onSortChange(key, getSortOrder(), key);
    },
    [onSortChange, sort?.key]
  );

  const sortKey = sort?.key;
  const sortOrder = sort?.order;

  return (
    <Fragment>
      {!!sortKey && !!sortOrder ? (
        <S.Container>
          <S.SortButton onClick={() => handleSortClick(sortKey, sortOrder)}>
            <Sorting order={sort?.actualSortKey === sortKey && sortOrder} />
          </S.SortButton>
        </S.Container>
      ) : null}
    </Fragment>
  );
};

export default Orderer;
