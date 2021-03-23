import styled from "styled-components";

export const ContainerInput = styled.div`
  height: 4.0625rem;
`;

export const TextInputContainer = styled.div`
  background-color: #f7f6f4;
  border-radius: 1rem;
  height: 2.5rem;
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
  font-size: 0.875rem;
  font-weight: 500;
  height: 2.5rem;
  width: 100%;
  padding: 0rem 2.8rem 0rem 1rem;
  outline: none;
  border: none;
  color: #141414;
  font-family: 'Red Hat Text', sans-serif;

  &::placeholder {
    font-weight: 400;
    color: #6D6D6D;
  }

  &:active, &:focus {
    font-weight: 700;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 0.6875rem;
  color: #FB2E4C;
  padding: 0rem 0rem 0rem 0.9rem;
`;