import styled from 'styled-components';

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 1.9rem;
  margin-bottom: 1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  b {
    font-weight: 800;
  }

  p {
    margin: 0px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: #141414;
    }

    &:after {
      content: "";
      position: absolute;
      display: none;
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: #F7F6F4;
    border: 1px solid #141414;
    border-radius: 4px;

    &:after {
      content: "";
      position: absolute;
      display: none;
      top: 0px;
      left: 4px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
