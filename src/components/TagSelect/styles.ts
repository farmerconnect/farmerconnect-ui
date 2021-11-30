import styled, { css } from 'styled-components';
import { farmerConnectTheme } from '../Theme';

type ContainerProps = {
  isOpen?: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 2.375rem;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  transition: filter 0.1s ease-out;
  z-index: ${({ isOpen }) => (isOpen ? 5 : 'unset')};

  &:hover {
    filter: ${({ isOpen }) => (isOpen ? 'none' : 'brightness(97%)')};
  }

  > svg {
    position: absolute;
    right: ${({ isOpen }) => (isOpen ? '0.5rem' : '0.85rem')};
    top: 50%;
    transform: translateY(-50%) rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
    width: 0.938rem;
    height: 0.938rem;
    transition: fill 0.2s ease-out, right 0.2s ease-out;
    pointer-events: none;
    margin-top: 1px;
  }
`;

type DropdownProps = {
  isOpen?: boolean;
};

export const Dropdown = styled.ul<DropdownProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  border: 1px solid ${({ isOpen }) => (isOpen ? farmerConnectTheme.colors.fc_black_100 : 'transparent')};
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;

  > li {
    display: flex;
    align-items: center;
    padding: ${({ isOpen }) => (isOpen ? '0.375rem 2.125rem 0.375rem 0.375rem' : '0.375rem')};
    transition: all 0.2s ease-out, background-color 0.1s ease-out;

    &:hover {
      background-color: ${({ isOpen }) => (isOpen ? farmerConnectTheme.colors.fc_black_10 : 'transparent')};
    }
  }
`;

type TagItemProps = {
  selected?: boolean;
  color?: string;
  background?: string;
  faded?: boolean;
};

export const TagItem = styled.span<TagItemProps>`
  font-size: 0.6825rem;
  font-weight: 700;
  color: ${({ color }) => color || farmerConnectTheme.colors.fc_dark_green};
  background-color: ${({ background }) => background || farmerConnectTheme.colors.fc_light_green};
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  opacity: ${({ faded }) => (faded ? 0.5 : 1)};
  transition: all 0.2s ease-out;
  ${({ selected }) =>
    selected
      ? css`
          padding-right: 2.5rem;
        `
      : ''}
`;
