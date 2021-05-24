import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid rgba(20, 20, 20, 0.1);
  padding: 0.5rem 0 0.5rem 1.1rem;
  margin: 0;
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
  color: #141414;

  &.disabled {
    color: rgba(20, 20, 20, 0.3);

    .checkmark {
      border: 1px solid rgba(20, 20, 20, 0.3);
    }
  }

  b {
    font-weight: 700;
    font-size: 0.875rem;
  }

  p {
    margin: 0px;
    font-size: 0.6875rem;
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
      content: '';
      position: absolute;
      display: none;
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    position: absolute;
    top: 0.3rem;
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: #f7f6f4;
    border: 1px solid #141414;
    border-radius: 4px;

    &:after {
      content: '';
      position: absolute;
      display: none;
      top: 0px;
      left: 3px;
      width: 4px;
      height: 9px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
