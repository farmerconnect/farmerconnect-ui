import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid rgba(20, 20, 20, 0.1);
  padding: 0 0 0.4rem 1.1rem;
  margin: 0px 0px 1rem 0;
`;

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 1.9rem;
  margin-bottom: 0rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &.disabled {
    color: rgba(20,20,20,.3);

    .checkmark {
      border: 1px solid rgba(20,20,20,.3);
    }
  }

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
