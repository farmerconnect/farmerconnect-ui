import React, { useMemo, useCallback } from 'react';
import IconArrow from '../Icons/Arrow';
import { SORT_ORDER } from './constants';
import { ITableColumn, ITableProps } from './interfaces';
import * as S from './styles';

const Table: React.FC<ITableProps> = ({ sort, columns, children, onSortChange }) => {
  const tableId = useMemo(() => Math.floor(Math.random() * Date.now()), []);
  const tableKey = useMemo(() => `fc-table-${tableId}`, [tableId]);

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

  const renderSortButton = useCallback(
    (options: any) => {
      const { sortable } = options || {};

      if (!sortable || !sortable.key || !sort) return null;

      const getArrowStyle = (order: string) => {
        if (sortable.key !== sort?.key) return {};

        if (order === sort?.order) return { isActive: true };

        return { isInactive: true };
      };

      return (
        <S.SortButton onClick={() => handleSortClick(sortable.key, sort.order)}>
          <IconArrow {...getArrowStyle(SORT_ORDER.DESC)} />
          <IconArrow {...getArrowStyle(SORT_ORDER.ASC)} direction="down" />
        </S.SortButton>
      );
    },
    [handleSortClick, sort]
  );

  const renderHeader = useMemo(
    () => (
      <S.Head>
        <S.Row>
          {columns.map(({ options, text }: ITableColumn, index: number) => (
            <S.Column key={`${tableKey}-th-${index}`} as="th" {...options}>
              <S.SortContainer>
                {text || ''}
                {renderSortButton(options)}
              </S.SortContainer>
            </S.Column>
          ))}
        </S.Row>
      </S.Head>
    ),
    [columns, renderSortButton, tableKey]
  );

  const renderRows = useMemo(
    () => (
      <S.Body>
        {children?.map((row: JSX.Element, index: number) =>
          React.cloneElement(row, {
            index,
            key: `${tableKey}-row-${row.key}`,
            children: row.props.children.map((column: JSX.Element, index: number) =>
              React.cloneElement(column, {
                ...column.props,
                ...columns[index]?.options,
                key: `${tableKey}-column-${row.key}-${index}`,
              })
            ),
          })
        )}
      </S.Body>
    ),
    [children, columns, tableKey]
  );

  return (
    <S.Container>
      {renderHeader}
      {renderRows}
    </S.Container>
  );
};

export default Object.assign(Table, {
  Row: S.Row,
  Column: S.Column,
});
