import styled, { keyframes } from 'styled-components';
import ReactSelect from 'react-select';
import { SmallSelectProps } from '.';
import { customScrollbar } from '../../mixins/ScrollBar';

const animateCheckbox = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Select = styled(ReactSelect)<SmallSelectProps>`
  .select__control {
    min-height: 2rem;
    max-height: 2rem;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: 0.75rem;
    border-color: #5b5b5b;
    transition: none;
    background-color: transparent;
    &:hover {
      border-color: #5b5b5b;
    }

    .select__value-container.select__value-container--is-multi.select__value-container--has-value {
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 1.8rem;
      margin-bottom: 0rem;
    }

    &--menu-is-open {
      max-height: 25rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      padding-bottom: 1px;

      .select__value-container.select__value-container--is-multi.select__value-container--has-value {
        flex-wrap: wrap;
        overflow: hidden;
        max-height: 20rem;
      }
    }
    &--is-focused {
      box-shadow: none;
      border-color: #141414;
    }
    &--menu-is-open .select__indicators svg {
      transform: rotate(180deg);
    }
  }
  .select__value-container {
    padding: 0 0.5rem 0 0.3rem;
  }
  .select__indicators {
    position: relative;
    align-items: unset;

    > svg {
      position: absolute;
      top: 0.8125rem;
      right: 0.625rem;
    }
  }
  .select__dropdown-indicator {
    color: #5b5b5b;
    padding: 0;
    &:hover {
      color: #141414;
    }
  }
  .select__menu {
    margin: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    border: 1px solid #5b5b5b;
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

    ${customScrollbar({ trackBackgroundColor: '#e7e7e7', thumbBackgroundColor: '#b3b2b1' })}

    &::-webkit-scrollbar {
      border-bottom-right-radius: 0.75rem;
    }
    &::-webkit-scrollbar-track {
      box-shadow: 0 0.25rem 0 0 #e7e7e7;
    }
  }
  .select__placeholder {
    font-size: 0.6875rem;
    color: #b9b9b9;
    margin-left: 0.4375rem;
  }
  .select__single-value,
  .select__input {
    font-size: 0.6875rem;
    margin-left: 0.4375rem;
    color: #141414;
    > input {
      font-weight: 700;
    }
  }
  .select__single-value-value {
    font-weight: 500;
  }
  .select__option {
    font-size: 0.875rem;
    color: #5b5b5b;
    padding: 0.5rem 1rem;
    font-weight: 400;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    > svg:first-child {
      flex-shrink: 0;
    }
    > .checked {
      animation: ${animateCheckbox} 0.2s;
    }
    &:hover,
    &--is-focused {
      background-color: #f3f3f3;
    }
    &--is-selected {
      font-weight: 500;
      color: #141414;
      background-color: unset;
    }
    & + .select__option {
      border-top: 1px solid #e7e7e7;
    }
  }
  .select__multi-value {
    background-color: #cee9dd;
    border-radius: 0.25rem;
    margin: 0.125rem;
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

export const SelectWrapper = styled.div`
  position: relative;
`;
