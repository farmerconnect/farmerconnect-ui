import styled, { css } from 'styled-components';
import { StyledArrow } from '../Icons/Arrow/styles';
import { ITableColumnOptions, ITableHoverable } from './interfaces';

export const Container = styled.table`
  border: none;
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Red Hat Text', sans-serif;
  width: 100%;
`;

export const SortContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const Column = styled.td<ITableColumnOptions>`
  box-sizing: border-box;

  img {
    display: block;
  }

  ${({ fitContent }: ITableColumnOptions) =>
    !!fitContent &&
    css`
      width: 1%;
      white-space: nowrap;
    `}

  ${({ centered }: ITableColumnOptions) =>
    !!centered &&
    css`
      text-align: center;

      > * {
        margin: 0 auto;
      }

      ${SortContainer} {
        justify-content: center;
      }
    `}
`;

export const Row = styled.tr``;

export const Head = styled.thead`
  background-color: #f7f6f4;

  ${Column} {
    color: #141414;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.5px;
    font-weight: 400;
    height: 40px;
    padding: 0 16px;
    text-align: left;
    text-transform: uppercase;

    &:first-child {
      border-top-left-radius: 12px;
    }

    &:last-child {
      border-top-right-radius: 12px;
    }
  }
`;

export const Body = styled.tbody<ITableHoverable>`
  ${Row} {
    background-color: #fff;

    ${({ hoverable }: ITableHoverable) =>
      hoverable &&
      css`
        &:hover {
          background-color: #f3f3f3;
        }
      `}

    ${Column} {
      color: #141414;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      border: 1px solid #e7e7e7;
      padding: 16px;
      position: relative;

      &:not(:first-child):not(:last-child) {
        border-left: 0;
        border-right: 0;
      }

      &:first-child:not(:last-child) {
        border-right: 0;
      }

      &:last-child:not(:first-child) {
        border-left: 0;
      }
    }

    &:last-of-type {
      ${Column} {
        &:first-child {
          border-bottom-left-radius: 12px;
        }

        &:last-child {
          border-bottom-right-radius: 12px;
        }
      }
    }

    & + ${Row} {
      > ${Column} {
        border-top: 0;
      }
    }
  }
`;

export const SortButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  padding: 5px;

  ${StyledArrow} + ${StyledArrow} {
    margin-top: 1px;
  }
`;
