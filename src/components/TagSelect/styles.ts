import styled, { css } from 'styled-components';

type ContainerProps = {
  isOpen?: boolean;
};
export const Container = styled.div<ContainerProps>`
  height: 2.375rem;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  &:hover {
    filter: ${(props) => (props.isOpen ? 'none' : 'brightness(97%)')};
  }
  transition: filter 0.1s ease-out;
  > svg {
    position: absolute;
    right: ${(props) => (props.isOpen ? '0.6825rem' : '1rem')};
    transform: rotate(180deg);
    top: 50%;
    transform: translateY(-50%) rotate(${(props) => (props.isOpen ? '0deg' : '180deg')});
    width: 0.625rem;
    height: auto;
    transition: fill 0.2s ease-out, right 0.2s ease-out;
    pointer-events: none;
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
  border: 1px solid ${(props) => (props.isOpen ? '#141414' : 'transparent')};
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  > li {
    display: flex;
    align-items: center;
    padding: ${(props) => (props.isOpen ? '0.375rem 2.125rem 0.375rem 0.375rem' : '0.375rem')};
    transition: all 0.2s ease-out, background-color 0.1s ease-out;
    &:hover {
      background-color: ${(props) => (props.isOpen ? '#E7E7E7' : 'transparent')};
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
  color: ${(props) => props.color || '#005e3a'};
  background-color: ${(props) => props.background || '#cee9dd'};
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  opacity: ${(props) => (props.faded ? 0.5 : 1)};
  transition: all 0.2s ease-out;
  ${(props) =>
    props.selected
      ? css`
          padding-right: 2.5rem;
        `
      : ''}
`;
