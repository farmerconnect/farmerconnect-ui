import styled, { css, keyframes } from 'styled-components';
import ReactSelect from 'react-select';

const animateCheckbox = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Select = styled(ReactSelect)<ReactSelect>`
  .select__control {
    min-height: 2rem;
    max-height: 2rem;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: 0.75rem;
    border-color: rgba(20, 20, 20, 0.7);
    transition: none;
    background-color: transparent;
    &:hover {
      border-color: rgba(20, 20, 20, 1);
    }
    &--menu-is-open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      padding-bottom: 1px;
      .select__dropdown-indicator {
        transform: rotate(180deg);
      }
    }
    &--is-focused {
      box-shadow: none;
      border-color: rgba(20, 20, 20, 1);
    }
  }
  .select__value-container {
    padding: 0 0.5rem;
  }
  .select__indicators {
    padding: 0 0.75rem 0 0;
  }
  .select__dropdown-indicator {
    color: rgba(20, 20, 20, 0.7);
    padding: 0;
    &:hover {
      color: rgba(20, 20, 20, 1);
    }
  }
  .select__menu {
    margin: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    border: 1px solid rgba(20, 20, 20, 0.7);
    border-top: none;
    border-radius: 0 0 0.75rem 0.75rem;
    padding: 0 0 0.25rem 0;
    overflow: hidden;
  }
  .select__menu-list {
    box-shadow: none;
    padding: 0;
    max-height: 8.25rem;
    border: none;
    &::-webkit-scrollbar-track {
      border-radius: 0;
      /* border-bottom-right-radius: 0.75rem; */
      background-color: rgba(20, 20, 20, 0.1);
      box-shadow: 0 0.25rem 0 0 rgba(20, 20, 20, 0.1);
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: transparent;
      border-radius: 0;
      border-bottom-right-radius: 0.75rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      border: 2px solid rgb(231, 231, 231);
      box-sizing: border-box;
      background-color: #b3b2b1;
      margin: 2px;
    }
  }
  .select__placeholder {
    font-size: 0.6875rem;
    color: rgba(20, 20, 20, 0.3);
  }
  .select__single-value,
  .select__input {
    font-size: 0.6875rem;
    color: rgba(20, 20, 20, 1);
    font-weight: 500;
    > input {
      font-weight: 500;
    }
  }
  .select__option {
    font-size: 0.875rem;
    color: rgba(20, 20, 20, 0.7);
    padding: 0.5rem 1rem;
    font-weight: 400;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    > .checked {
      animation: ${animateCheckbox} 0.2s;
    }
    &:hover,
    &--is-focused {
      background-color: #f3f3f3;
    }
    &--is-selected {
      font-weight: 500;
      color: rgba(20, 20, 20, 1);
      background-color: unset;
    }
    & + .select__option {
      border-top: 1px solid rgba(20, 20, 20, 0.1);
    }
  }
  .select__multi-value {
    background-color: #cee9dd;
    border-radius: 0.25rem;
    margin: 0 0.125rem;
    padding: 0 0.5rem;
    align-items: center;
    height: 1.5rem;
    &__label {
      padding: 0;
      font-size: 0.6875rem;
      color: #141414;
    }
    &__remove {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-left: 0.5rem;
      color: #6d6d6d;
      cursor: pointer;
      &::after {
        content: '✖';
        font-size: 0.75rem;
        line-height: 0.75rem;
      }
      &:hover {
        background-color: transparent;
        color: #141414;
      }
      > svg {
        display: none;
      }
    }
  }
`;
