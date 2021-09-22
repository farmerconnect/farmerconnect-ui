import styled from 'styled-components';
import SmallSelect from '../SmallSelect';

export const Select = styled(SmallSelect)`
  .select__control {
    background-color: #f7f6f4;
    border-color: transparent;
    min-height: 2.5rem;
    max-height: 2.5rem;
    box-shadow: ${(props) => (props.error ? '0.125rem 0.125rem 0 #fb2e4c' : 'none')};
    transition: box-shadow 0.1s ease-out;
    &--menu-is-open,
    &--is-focused {
      box-shadow: 0.125rem 0.125rem 0px ${(props) => (props.error ? '#fb2e4c' : '#00e394')};
    }
    &--menu-is-open,
    &:hover {
      border-color: transparent;
    }
    &--is-disabled {
      background-color: #e7e7e7;
    }
  }
  .select__single-value,
  .select__input,
  .select__placeholder {
    font-size: 0.875rem;
  }
  .select__placeholder {
    color: #5b5b5b;
  }
  .select__single-value {
    font-weight: 500;
  }
  .select__menu {
    border-color: transparent;
    background-color: #f7f6f4;
    box-shadow: 0.125rem 0.125rem 0px ${(props) => (props.error ? '#fb2e4c' : '#00e394')};
  }
  .select__menu-list {
    border-color: transparent;
    &::-webkit-scrollbar-track {
      background-color: #f7f6f4;
      box-shadow: 0 0.25rem 0 0 #f7f6f4;
    }
    &::-webkit-scrollbar-thumb {
      border: 2px solid #f7f6f4;
      background-color: #b9b9b9;
    }
  }
  .select__indicators > svg {
    top: 1.0625rem;
    right: 1.0625rem;
  }
`;
