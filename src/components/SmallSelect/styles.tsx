import styled, { keyframes } from 'styled-components';
import ReactSelect, { Props } from 'react-select';
import { customScrollbar } from '../../mixins/ScrollBar';
import { farmerConnectTheme } from '../Theme';

const animateCheckbox = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

type SelectProps = {
  error: string | boolean;
} & Props;

export const Select = styled(ReactSelect)<SelectProps>`
  .select__control {
    min-height: 2rem;
    max-height: 2rem;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: 0.75rem;
    border-color: ${(props) =>
      !!props.error ? farmerConnectTheme.colors.fc_red : farmerConnectTheme.colors.fc_black_70};
    transition: none;
    background-color: transparent;

    &:hover {
      border-color: ${farmerConnectTheme.colors.fc_black_70};
    }

    .select__value-container.select__value-container--is-multi.select__value-container--has-value {
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 1.8rem;
      margin-bottom: 0rem;
    }

    &--menu-is-open {
      max-height: 45rem;
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
      border-color: ${farmerConnectTheme.colors.fc_black_100};
    }

    &--menu-is-open .select__indicators svg {
      transform: rotate(180deg);
    }
  }

  .select__value-container {
    padding: 0 0.5rem 0 0.3rem;
  }

  .select__indicators {
    color: ${farmerConnectTheme.colors.fc_black_70};
    position: relative;
    align-items: unset;

    > svg {
      position: absolute;
      top: calc(50% - 0.125rem);
      right: 0.75rem;
    }
  }

  .select__dropdown-indicator {
    color: ${farmerConnectTheme.colors.fc_black_70};
    padding: 0;

    &:hover {
      color: ${farmerConnectTheme.colors.fc_black_100};
    }
  }

  .select__menu {
    margin: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    border: 1px solid ${farmerConnectTheme.colors.fc_black_70};
    border-top: none;
    border-radius: 0 0 0.75rem 0.75rem;
    padding: 0 0 0.25rem 0;
    overflow: hidden;
  }

  .select__menu-list {
    box-shadow: none;
    padding: 0;
    border: none;

    ${customScrollbar({
      trackBackgroundColor: farmerConnectTheme.colors.fc_black_10,
      thumbBackgroundColor: farmerConnectTheme.colors.fc_black_30,
    })}

    &::-webkit-scrollbar {
      border-bottom-right-radius: 0.75rem;
    }
    &::-webkit-scrollbar-track {
      box-shadow: 0 0.25rem 0 0 ${farmerConnectTheme.colors.fc_black_10};
    }
  }
  .select__placeholder {
    font-size: 0.6875rem;
    color: ${farmerConnectTheme.colors.fc_black_30};
    margin-left: 0.4375rem;
  }

  .select__single-value,
  .select__input {
    font-size: 0.6875rem;
    margin-left: 0.4375rem;
    color: ${farmerConnectTheme.colors.fc_black_100};

    > input {
      font-weight: 700;
    }
  }

  .select__single-value-value {
    font-weight: 500;
  }

  .select__option {
    font-size: 0.875rem;
    color: ${farmerConnectTheme.colors.fc_black_70};
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
      background-color: ${farmerConnectTheme.colors.fc_black_5};
    }

    &--is-selected {
      font-weight: 700;
      color: ${farmerConnectTheme.colors.fc_black_100};
      background-color: unset;
    }

    & + .select__option {
      border-top: 1px solid ${farmerConnectTheme.colors.fc_black_10};
    }
  }

  .select__multi-value {
    background-color: ${farmerConnectTheme.colors.fc_light_green};
    border-radius: 0.25rem;
    margin: 0.125rem;
    padding: 0 0.5rem;
    align-items: center;
    height: 1.5rem;

    &__label {
      padding: 0;
      font-size: 0.6875rem;
      color: ${farmerConnectTheme.colors.fc_black_100};
    }

    &__remove {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-left: 0.5rem;
      color: ${farmerConnectTheme.colors.fc_black_70};
      cursor: pointer;

      &::after {
        content: '???';
        font-size: 0.75rem;
        line-height: 0.75rem;
      }

      &:hover {
        background-color: transparent;
        color: ${farmerConnectTheme.colors.fc_black_100};
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

export const FooterContainer = styled.div`
  padding: 0.5rem 1rem 0.75rem 1rem;
  color: #5b5b5b;
  position: relative;
  margin-bottom: -0.5rem;
`;
