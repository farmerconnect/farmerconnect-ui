import styled, { css } from 'styled-components';
import { customScrollbar } from '../../mixins/ScrollBar';
import { farmerConnectTheme } from '../Theme';

const fontFamily = `font-family: 'Red Hat Text', sans-serif;`;

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

type HeadingProps = {
  isOpen: boolean;
  disabled: boolean;
};

export const Heading = styled.div<HeadingProps>`
  ${({ disabled, isOpen }) => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${fontFamily}
    font-size: 0.875rem;
    line-height: 1.32;
    padding: 0.5rem 0.75rem 0.5rem 0.875rem;
    color: ${disabled ? farmerConnectTheme.colors.fc_black_30 : farmerConnectTheme.colors.fc_black_70};
    background-color: ${disabled ? farmerConnectTheme.colors.fc_black_10 : farmerConnectTheme.colors.fc_beige};
    transition: all 0.05s ease-out;
    border-radius: ${isOpen ? '0.75rem 0.75rem 0rem 0rem' : '0.75rem'};
    cursor: ${disabled ? 'default' : 'pointer'};
    box-shadow: ${isOpen ? `0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green}` : 'none'};

    > svg {
      flex-shrink: 0;
      fill: ${disabled ? farmerConnectTheme.colors.fc_black_30 : farmerConnectTheme.colors.fc_black_70};
      transform: ${isOpen ? 'rotate(180deg)' : 'none'};
    }
    input {
      background-color: ${disabled ? farmerConnectTheme.colors.fc_black_10 : farmerConnectTheme.colors.fc_beige};
      color: ${disabled ? farmerConnectTheme.colors.fc_black_30 : farmerConnectTheme.colors.fc_black_70};
      font-size: 14px;
      margin: 0;
      border: none;
      width: 100%;
      ${fontFamily}
      font-size: 14px;
      font-weight: 700;
      cursor: ${disabled ? 'default' : 'auto'};
    }

    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
    }

    input::placeholder {
      font-weight: 400;
      color: ${disabled ? farmerConnectTheme.colors.fc_black_30 : farmerConnectTheme.colors.fc_black_70};
    }
  `}
`;

type ContentProps = {
  isOpen: Boolean;
};

export const Content = styled.div<ContentProps>`
  position: absolute;
  background-color: ${farmerConnectTheme.colors.fc_beige};
  border-radius: ${({ isOpen }) => (isOpen ? '0rem 0rem 0.75rem 0.75rem' : '0.75rem')};
  z-index: 5;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${({ isOpen }) => (isOpen ? '20rem' : '0')};
  overflow: hidden;
  box-shadow: 0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green};
  transition: all 0.05s ease-out;
`;

export const EmptyResult = styled.div`
  ${fontFamily}
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0px;
`;

export const ItemList = styled.ul`
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  ${fontFamily}
  font-size: 14px;
  overflow-y: auto;

  ${customScrollbar({ trackBackgroundColor: farmerConnectTheme.colors.fc_black_10 })}

  > li {
    list-style: none;
    margin: 0;
    padding: 0.3125rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${farmerConnectTheme.colors.fc_black_10};
    }
  }

  li + li {
    border-top: 1px solid ${farmerConnectTheme.colors.fc_black_10};
  }
`;

type ItemProps = {
  isSelected: boolean;
};

export const Item = styled.li<ItemProps>`
  background-color: ${({ isSelected }) =>
    isSelected ? farmerConnectTheme.colors.fc_black_10 : farmerConnectTheme.colors.fc_beige};
`;
