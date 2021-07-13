import styled, { css, keyframes } from 'styled-components';
import { StyledArrow } from '../Icons/Arrow/styles';
import { ITable, ITableStyles, ITableColumnOptions, ITableHoverable, StyledHeaderProps } from './interfaces';

export const tableDefaultStyles: ITable = {
  colors: {
    head: {
      color: '#141414',
      backgroundColor: '#f7f6f4',
    },
    body: {
      color: '#141414',
      borderColor: '#e7e7e7',
      backgroundColor: '#ffffff',
    },
  },
};

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

export const Row = styled.tr`
  position: relative;
`;

const tableHeaderLoadingAnimation = keyframes`
0% {
  left: 0;
  right: 100%;
}
50% {
  right: 0;
  left: 0;
}
100% {
  left: 100%;
  right: 0;
}
`;

type HeadProps = {
  isLoading?: boolean;
};

export const Head = styled.thead<HeadProps>`
  position: relative;
  background-color: ${({ theme }) =>
    theme?.table?.colors?.head?.backgroundColor || tableDefaultStyles?.colors?.head?.backgroundColor};

  ${Column} {
    color: ${({ theme }) => theme?.table?.colors?.head?.color || tableDefaultStyles?.colors?.head?.color};
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
  ${(props) =>
    props.isLoading
      ? css`
  &::after {
    content: ''
    position: absolute;
    height: 0.125rem;
    left: 0;
    bottom: 0;
    background-color: #00e394;
    animation: ${tableHeaderLoadingAnimation} 3s infinite linear;
  }
  `
      : ''}
`;

export const Body = styled.tbody<ITableStyles>`
  ${Row} {
    background-color: ${({ theme }) =>
      theme?.table?.colors?.body?.backgroundColor || tableDefaultStyles?.colors?.body?.backgroundColor};

    ${({ hoverable }: ITableHoverable) =>
      hoverable &&
      css`
        &:hover {
          background-color: #f3f3f3;
        }
      `}

    ${Column} {
      color: ${({ theme }) => theme?.table?.colors?.head?.color || tableDefaultStyles?.colors?.head?.color};
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      border: 1px solid
        ${({ theme }) => theme?.table?.colors?.body?.borderColor || tableDefaultStyles?.colors?.body?.borderColor};
      padding: ${({ slim }) => (slim ? '8px 16px' : '16px')};
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
