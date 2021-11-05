import styled, { css } from "styled-components";
import { ListWrapper as SingleSelectListWrapper } from "../SingleSelect/styles";
import { customScrollbar } from "../../mixins/ScrollBar";

import { isOpenType } from ".";

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
  ${(props) => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.32;
    padding: 0.625rem 1rem;
    color: ${props.disabled ? "#B9B9B9" : "#141414"};
    background-color: ${props.disabled ? "#EAEAEA" : "#F7F6F4"};
    transition: all 0.05s ease-out;
    border-radius: ${props.isOpen
      ? props.isOpen === "left"
        ? "0.75rem 0 0 0"
        : "0.75rem 0 0 0.75rem"
      : "0.75rem 0 0 0.75rem"};
    color: #5b5b5b;
    cursor: ${props.disabled ? "default" : "pointer"};
    box-shadow: ${props.isOpen ? "0.125rem 0.125rem 0 0 #00E394" : "none"};
    border-right: ${props.isOpen === "left"
      ? "2px solid #00E394"
      : "1px solid #b9b9b9"};
    > svg {
      fill: ${props.disabled ? "#B9B9B9" : "#5B5B5B"};
      transform: ${props.isOpen ? "rotate(180deg)" : "none"};
    }
    & + ${Heading} {
      border-radius: ${props.isOpen
        ? props.isOpen === "right"
          ? "0 0.75rem 0 0"
          : "0 0.75rem 0.75rem 0"
        : "0 0.75rem 0.75rem 0"};
      border-right: none;
      box-shadow: ${props.isOpen === "right"
        ? "0.125rem 0.125rem 0 0 #00E394"
        : "none"};
    }
  `}
`;

type ContentProps = {
  isOpen: isOpenType;
};

export const Content = styled.div<ContentProps>`
  position: absolute;
  background-color: #f7f6f4;
  border-radius: ${(props) =>
      props.isOpen === "right" ? "0.75rem 0" : "0 0.75rem"}
    0.75rem 0.75rem;
  z-index: 5;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isOpen ? "20rem" : "0")};
  overflow: hidden;
  box-shadow: 0.125rem 0.125rem 0 0 #00e394;
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

  ${customScrollbar({ trackBackgroundColor: '#e7e7e7' })}

  > li {
    list-style: none;
    margin: 0;
    padding: 0.3125rem 1rem;
    cursor: pointer;
  }
  li + li {
    border-top: 1px solid #e7e7e7;
  }
`;
