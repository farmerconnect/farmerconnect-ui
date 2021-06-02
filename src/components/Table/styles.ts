import styled, { css } from 'styled-components';
import { StyledArrow } from '../Icons/Arrow/styles';

export const Container = styled.table`
  border: none;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;

export const Column = styled.td`
  box-sizing: border-box;

  img {
    display: block;
  }

  ${({ fitContent }: any) =>
    !!fitContent &&
    css`
      width: 1%;
      white-space: nowrap;
    `}
`;

export const Row = styled.tr``;

export const Head = styled.thead`
  background-color: #f7f6f4;

  ${Column} {
    color: #141414;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 5%;
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

export const Body = styled.tbody`
  ${Row} {
    ${Column} {
      color: #141414;
      background: #ffffff;
      font-size: 11px;
      font-weight: 500;
      line-height: 14px;
      border: 1px solid #e7e7e7;
      padding: 16px;
      position: relative;

      &:not(:first-child):not(:last-child) {
        border-left: 0;
        border-right: 0;
      }

      &:first-child {
        border-right: 0;
      }

      &:last-child {
        border-left: 0;
      }
    }

    &:last-of-type {
      ${Column} {
        &:first-child {
          border-radius: 0 0 0 12px;
        }

        &:last-child {
          border-radius: 0 0 12px;
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

export const SortContainer = styled.div`
  align-items: center;
  display: flex;
`;
