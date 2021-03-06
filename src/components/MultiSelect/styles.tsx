import styled, { css } from 'styled-components';
import { ListWrapper as SingleSelectListWrapper } from '../SingleSelect/styles';
import { customScrollbar } from '../../mixins/ScrollBar';

import { isOpenType } from '.';
import { farmerConnectTheme } from '../Theme';

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

type HeadingProps = {
  isOpen: isOpenType;
  disabled: boolean;
};

export const Heading = styled.div<HeadingProps>`
  ${({ disabled, isOpen }) => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.32;
    padding: 0.5rem 0.75rem 0.5rem 1rem;
    color: ${disabled ? farmerConnectTheme.colors.fc_black_30 : farmerConnectTheme.colors.fc_black_70};
    background-color: ${disabled ? farmerConnectTheme.colors.fc_black_10 : farmerConnectTheme.colors.fc_beige};
    transition: all 0.05s ease-out;
    border-radius: ${isOpen ? (isOpen === 'left' ? '0.75rem 0 0 0' : '0.75rem 0 0 0.75rem') : '0.75rem 0 0 0.75rem'};
    cursor: ${disabled ? 'default' : 'pointer'};
    box-shadow: ${isOpen ? `0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green}` : 'none'};
    border-right: ${isOpen === 'left'
      ? `2px solid ${farmerConnectTheme.colors.fc_green}`
      : `1px solid ${farmerConnectTheme.colors.fc_black_30}`};
    > svg {
      transform: ${isOpen ? 'rotate(180deg)' : 'none'};
    }
    & + ${Heading} {
      border-radius: ${isOpen ? (isOpen === 'right' ? '0 0.75rem 0 0' : '0 0.75rem 0.75rem 0') : '0 0.75rem 0.75rem 0'};
      border-right: none;
      box-shadow: ${isOpen === 'right' ? `0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green}` : 'none'};
    }
  `}
`;

type ContentProps = {
  isOpen: isOpenType;
};

export const Content = styled.div<ContentProps>`
  position: absolute;
  background-color: ${farmerConnectTheme.colors.fc_beige};
  border-radius: ${({ isOpen }) => (isOpen === 'right' ? '0.75rem 0' : '0 0.75rem')} 0.75rem 0.75rem;
  z-index: 5;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  height: ${({ isOpen }) => (isOpen ? '20rem' : '0')};
  overflow: hidden;
  box-shadow: 0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green};
  transition: all 0.05s ease-out;
`;

export const ListWrapper = styled(SingleSelectListWrapper)`
  > label > svg {
    align-self: flex-start;
    margin-top: 0.125rem;
  }
`;

export const ProductList = styled.ul`
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  ${customScrollbar({ trackBackgroundColor: farmerConnectTheme.colors.fc_black_10 })}

  > li {
    list-style: none;
    margin: 0;
    padding: 0.3125rem 1rem;
    cursor: pointer;
  }

  li + li {
    border-top: 1px solid ${farmerConnectTheme.colors.fc_black_10};
  }
`;
