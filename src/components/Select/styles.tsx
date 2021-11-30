import styled from 'styled-components';
import { customScrollbar } from '../../mixins';
import { Select as SmallSelect } from '../SmallSelect/styles';
import { farmerConnectTheme } from '../Theme';
export { SelectWrapper, FooterContainer } from '../SmallSelect/styles';
export { HelperText } from '../Input/styles';

export const Select = styled(SmallSelect)`
  .select__control {
    background-color: ${farmerConnectTheme.colors.fc_beige};
    border-color: transparent;
    min-height: 2.5rem;
    max-height: 2.5rem;
    box-shadow: ${({ error }) => (error ? `0.125rem 0.125rem 0 ${farmerConnectTheme.colors.fc_red}` : 'none')};
    transition: box-shadow 0.1s ease-out;

    &--is-focused,
    &--menu-is-open {
      box-shadow: 0.125rem 0.125rem 0px
        ${({ error }) => (error ? farmerConnectTheme.colors.fc_red : farmerConnectTheme.colors.fc_green)};
    }

    &:hover,
    &--menu-is-open {
      border-color: transparent;
    }

    &--is-disabled {
      background-color: ${farmerConnectTheme.colors.fc_black_10};
    }
  }

  .select__single-value,
  .select__input,
  .select__placeholder {
    font-size: 0.875rem;
  }

  .select__placeholder {
    color: ${farmerConnectTheme.colors.fc_black_70};
  }

  .select__single-value {
    font-weight: 500;
  }

  .select__menu {
    border-color: transparent;
    background-color: ${farmerConnectTheme.colors.fc_beige};
    box-shadow: 0.125rem 0.125rem 0px
      ${({ error }) => (error ? farmerConnectTheme.colors.fc_red : farmerConnectTheme.colors.fc_green)};
  }

  .select__menu-list {
    border-color: transparent;
    ${customScrollbar()}
  }

  .select__indicators > svg {
    color: ${farmerConnectTheme.colors.fc_black_70};
    right: 1rem;
    top: calc(50% - 0.25rem);
  }
  .select__single-value-value {
    font-weight: 500;
  }

  .select__option {
    &:hover,
    &--is-focused {
      background-color: ${farmerConnectTheme.colors.fc_black_10};
    }
  }
`;
