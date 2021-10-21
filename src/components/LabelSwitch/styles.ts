import styled, { css } from 'styled-components';

type LabelItemProps = {
  selected: boolean;
  disabled: boolean;
};

export const Container = styled.ul`
  list-style-type: none;
  display: inline-flex;
  min-height: 2rem;
  box-sizing: border-box;
  gap: 1rem;
  margin: 0;
  padding: 0.25rem 1rem;
  align-items: center;
  background: #f7f6f4;
  border-radius: 1.1875rem;
`;

export const LabelItem = styled.li<LabelItemProps>`
  height: 24px;
  position: relative;
  color: #141414;
  text-shadow: ${({ selected }) => (selected ? '0 0 0.0625rem #141414' : 'none')};
  font-size: 0.6875rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: font-weight 0.2s linear;
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
    top: 0px;
    left: -0.75rem;
    right: -0.75rem;
    bottom: 0px;
    background-color: #cee9dd;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 0;
    border-radius: 12px;
  }
`;

export const LabelText = styled.span`
  z-index: 1;
  position: relative;
`;
