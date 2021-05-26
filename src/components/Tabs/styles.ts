import styled, { css } from "styled-components";

export const Container = styled.ul`
  list-style-type: none;
  display: flex;
  min-height: 3.1875rem;
  box-sizing: border-box;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(20, 20, 20, 0.3);
  margin: 0;
  padding: 0;
  align-items: flex-end;
`;

type TabItemProps = {
  selected: boolean;
  disabled: boolean;
};

export const TabItem = styled.li<TabItemProps>`
  position: relative;
  color: #141414;
  font-size: 0.875rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
  padding-bottom: 0.5rem;
  transition: font-weight 0.2s linear;
  font-weight: ${({ selected }) => (selected ? "700" : "normal")};
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: default;
        `
      : css`
          opacity: 1;
        `};
  .selected {
    position: absolute;
    bottom: -1px;
    height: 1px;
    left: 0;
    right: 0;
    background-color: #141414;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
