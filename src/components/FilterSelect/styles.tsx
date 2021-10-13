import styled, { css } from 'styled-components';

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
  ${(props) => css`
    flex: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    ${fontFamily}
    font-size: 0.875rem;
    line-height: 1.32;
    padding: 0.625rem 1rem;
    color: ${props.disabled ? '#B9B9B9' : '#5B5B5B'};
    background-color: ${props.disabled ? '#E7E7E7' : '#F7F6F4'};
    transition: all 0.05s ease-out;
    border-radius: ${props.isOpen ? '0.75rem 0.75rem 0rem 0rem' : '0.75rem'};
    color: #5b5b5b;
    cursor: ${props.disabled ? 'default' : 'pointer'};
    box-shadow: ${props.isOpen ? '0.125rem 0.125rem 0 0 #00E394' : 'none'};
    > svg {
      fill: ${props.disabled ? '#B9B9B9' : '#5B5B5B'};
      transform: ${props.isOpen ? 'rotate(180deg)' : 'none'};
    }
    input {
      background-color: ${props.disabled ? '#E7E7E7' : '#F7F6F4'};
      color: ${props.disabled ? '#B9B9B9' : '#5B5B5B'};
      font-size: 14px;
      margin: 0;
      border: none;
      width: 100%;
      ${fontFamily}
      font-size: 14px;
      font-weight: 700;
      cursor: ${props.disabled ? 'default' : 'auto'};
    }

    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
    }

    input::placeholder {
      font-weight: 400;
      color: ${props.disabled ? '#B9B9B9' : '#5B5B5B'};
    }
  `}
`;

type ContentProps = {
  isOpen: Boolean;
};

export const Content = styled.div<ContentProps>`
  position: absolute;
  background-color: #f7f6f4;
  border-radius: ${(props) => (props.isOpen ? '0rem 0rem 0.75rem 0.75rem' : '0.75rem')};
  z-index: 5;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${(props) => (props.isOpen ? '20rem' : '0')};
  overflow: hidden;
  box-shadow: 0.125rem 0.125rem 0 0 #00e394;
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
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #e7e7e7;
  }

  &::-webkit-scrollbar-thumb {
    background: #b9b9b9;
    border-radius: 6px;
  }
  > li {
    list-style: none;
    margin: 0;
    padding: 0.3125rem 1rem;
    cursor: pointer;
    &:hover {
      background-color: #e7e7e7;
    }
  }
  li + li {
    border-top: 1px solid #e7e7e7;
  }
`;

type ItemProps = {
  isSelected: boolean;
};

export const Item = styled.li<ItemProps>`
  background-color: ${(props) => (props.isSelected ? '#E7E7E7' : '#f7f6f4')};
`;
