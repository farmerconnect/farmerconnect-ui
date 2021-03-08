import styled from "styled-components";

export const TextInputContainer = styled.div`
  background-color: #f7f6f4;
  border-radius: 1rem;
  height: 2.5rem;
  max-width: 18rem;
  position: relative;

  &.focus {
    filter: drop-shadow(2px 2px 0px #00e394);
  }

  &.error {
    filter: drop-shadow(2px 2px 0px #fb2e4c);
  }

  .checkInput {
    position: absolute;
    top: 10px;
    right: 12px;
  }
`;

export const TextInputField = styled.input.attrs({
  type: "text",
})`
  background-color: transparent;
  font-size: 1rem;
  font-weight: 700;
  height: 2.5rem;
  min-width: 80%;
  padding-left: 1rem;
  padding-right: 2.8rem;
  outline: none;
  border: none;
`;