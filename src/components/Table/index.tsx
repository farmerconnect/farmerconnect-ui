import React, { useMemo, useCallback, ReactNode, isValidElement, ReactElement } from 'react';
import IconArrow from '../Icons/Arrow';
import { SORT_ORDER } from './constants';
import {
  ITableChildren,
  ITableColumn,
  ITableColumnOptions,
  ITableProps,
  TableCloneChildrenFunction,
} from './interfaces';
import * as S from './styles';

const Table: React.FC<ITableProps> = ({
  slim,
  sort,
  columns,
  children,
  onSortChange,
  hoverable = false,
  isLoading = false,
}) => {
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

  const getArrowStyle = useCallback(
    (key: string, order: string) => {
      if (key !== sort?.key) return {};

      if (order === sort?.order) return { isActive: true };

      return { isInactive: true };
    },
    [sort?.key, sort?.order]
  );

  const renderSortButton = useCallback(
    (options: ITableColumnOptions | undefined = {}) => {
      const { sortable } = options;

      if (!sortable || !sortable.key || !sort) return null;

      return (
        <S.SortButton onClick={() => handleSortClick(sortable.key, sort.order)}>
          <IconArrow {...getArrowStyle(sortable.key, SORT_ORDER.DESC)} />
          <IconArrow {...getArrowStyle(sortable.key, SORT_ORDER.ASC)} direction="down" />
        </S.SortButton>
      );
    },
    [getArrowStyle, handleSortClick, sort]
  );

  const renderHeader = useMemo(
    () => (
      <S.Head>
        <S.Row>
          {columns.map(({ options, text = '' }: ITableColumn, index: number) => (
            <S.Column key={`${tableKey}-th-${index}`} as="th" {...options}>
              <S.SortContainer>
                {text}
                {renderSortButton(options)}
              </S.SortContainer>
            </S.Column>
          ))}
          {isLoading && <S.LoadingBar />}
        </S.Row>
      </S.Head>
    ),
    [columns, renderSortButton, tableKey, isLoading]
  );

  const applyToChildren = useCallback(
    (fn: TableCloneChildrenFunction, children: ReactNode, key?: string): ReactNode => {
      if (Array.isArray(children)) {
        return children.map((child: ReactNode, index: number) => {
          if (Array.isArray(child)) return applyToChildren(fn, child, key);

          return fn({ element: child, key, index });
        });
      }

      return fn({ element: children, key });
    },
    []
  );

  const cloneColumn = useCallback(
    ({ element, index, key }: ITableChildren): ReactElement | null => {
      if (!isValidElement(element)) return null;

      const options = typeof index === 'number' ? columns[index]?.options : {};
      const props = { ...element.props, ...options, index, key: `${key}-column-${index}` };

      return React.cloneElement(element, props);
    },
    [columns]
  );

  const cloneRow = useCallback(
    ({ element, index = 0 }: ITableChildren): ReactElement | null => {
      if (!isValidElement(element)) return null;

      const key = `${tableKey}-row-${element.key || index}`;
      const props = { ...element.props, key, index };
      const children = applyToChildren(cloneColumn, element.props.children, key);

      return React.cloneElement(element, props, children);
    },
    [applyToChildren, cloneColumn, tableKey]
  );

  const renderRows = useMemo(
    () => (
      <S.Body slim={slim} hoverable={hoverable}>
        {applyToChildren(cloneRow, children)}
      </S.Body>
    ),
    [children, applyToChildren, cloneRow, slim, hoverable]
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
