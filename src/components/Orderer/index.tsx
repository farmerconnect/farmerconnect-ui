import React, { Fragment, useCallback } from 'react';
import IconArrow from '../Icons/Arrow';
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

      onSortChange && onSortChange(key, getSortOrder());
    },
    [onSortChange, sort?.key]
  );

  const getArrowStyle = useCallback(
    (key: string, order: string) => {
      if (key !== sort?.key) return {};

      if (order === sort?.order) return { isActive: true };

      return { isInactive: true };
    },
    [sort?.key, sort?.order]
  );

  const sortKey = sort?.key;
  const sortOrder = sort?.order;

  return (
    <Fragment>
      {!!sortKey && !!sortOrder ? (
        <S.Container>
          <S.SortButton onClick={() => handleSortClick(sortKey, sortOrder)}>
            <IconArrow {...getArrowStyle(sortKey, SORT_ORDER.DESC)} />
            <IconArrow {...getArrowStyle(sortKey, SORT_ORDER.ASC)} direction="down" />
          </S.SortButton>
        </S.Container>
      ) : null}
    </Fragment>
  );
};

export default Orderer;
