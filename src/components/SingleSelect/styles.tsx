import styled, { css } from 'styled-components';
import Checkbox, { CheckboxProps } from '../Checkbox';
import SmallSelect from '../SmallSelect';
import { customScrollbar } from '../../mixins/ScrollBar';
import { farmerConnectTheme } from '../Theme';

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
`;

type HeadingProps = {
  isOpen: boolean;
  disabled: boolean;
};

export const Heading = styled.div<HeadingProps>`
  ${(props) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.32;
    color: ${props.disabled ? farmerConnectTheme.colors.fc_black_30 : farmerConnectTheme.colors.fc_black_100};
    padding: 0.5rem 0.75rem 0.5rem 1rem;
    background-color: ${props.disabled ? farmerConnectTheme.colors.fc_black_10 : farmerConnectTheme.colors.fc_beige};
    transition: all 0.05s ease-out;
    border-radius: ${props.isOpen ? '0.75rem 0.75rem 0 0' : '0.75rem'};
    color: ${farmerConnectTheme.colors.fc_black_70};
    cursor: ${props.disabled ? 'default' : 'pointer'};
    box-shadow: ${props.isOpen ? `0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green}` : 'none'};

    > svg {
      fill: ${props.disabled ? farmerConnectTheme.colors.fc_black_30 : farmerConnectTheme.colors.fc_black_70};
      transform: ${props.isOpen ? 'rotate(180deg)' : 'none'};
    }
  `}
`;

type ContentProps = {
  isOpen: boolean;
};

export const Content = styled.div<ContentProps>`
  position: absolute;
  background-color: ${farmerConnectTheme.colors.fc_beige};
  border-radius: 0 0 0.75rem 0.75rem;
  z-index: 5;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isOpen ? '20rem' : '0')};
  overflow: hidden;
  box-shadow: 0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green};
  transition: all 0.05s ease-out;
`;

export const FilterInputWrapper = styled.div`
  padding: 1.25rem 1.25rem 1.25rem 1rem;
  display: flex;
  gap: 0.5rem;

  > .input-wrapper {
    color: ${farmerConnectTheme.colors.fc_black_70};
    position: relative;
    flex: 1 1;
    min-width: 17rem;
    max-width: 50%;
    margin-right: 0.25rem;

    > input {
      border: 1px solid ${farmerConnectTheme.colors.fc_black_30};
      width: 100%;
      box-sizing: border-box;
      border-radius: 0.75rem;
      font-size: 0.6875rem;
      background: transparent;
      padding: 0.5rem 4rem 0.5rem 0.75rem;
      line-height: 1.3;
      outline: none;
      color: ${farmerConnectTheme.colors.fc_black_100};
      font-weight: 700;
      font-family: 'Red Hat Text', sans-serif;
      &::placeholder {
        color: ${farmerConnectTheme.colors.fc_black_70};
        font-weight: 400;
      }
    }

    > svg {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
    }

    > button {
      position: absolute;
      display: flex;
      align-items: center;
      top: 50%;
      right: 0.25rem;
      background: transparent;
      border: none;
      outline: none;
      padding: 0.5rem;
      cursor: pointer;
      transform: translateY(-50%);

      > svg {
        transform: scale(0.6);
      }
    }
  }
`;

export const ListWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  ${customScrollbar({ trackBackgroundColor: farmerConnectTheme.colors.fc_black_10 })}

  > label {
    margin-left: 0;
    gap: 0.5rem;
    padding: 0.3125rem 0.75rem;
    align-items: flex-start;

    > svg {
      padding-top: 0.125rem;
    }
  }

  label + label {
    border-top: 1px solid ${farmerConnectTheme.colors.fc_black_10};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  justify-content: flex-end;
  gap: 1rem;
`;

export const EmptyMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${farmerConnectTheme.colors.fc_black_100};
  font-size: 0.875rem;
`;

export const CustomCheckbox = styled(Checkbox)<CheckboxProps>`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const FilterBox = styled.div`
  flex: 1;
  max-width: none;
`;

export const FilterSelect = styled(SmallSelect)`
  flex: 1;
  max-width: none;

  .select__control,
  .select__control:hover {
    border-color: ${farmerConnectTheme.colors.fc_black_30};
    max-height: 2rem;

    .select__value-container {
      flex-wrap: nowrap;
    }

    &--is-focused {
      border-color: ${farmerConnectTheme.colors.fc_black_30};
    }
  }

  .select__placeholder {
    color: ${farmerConnectTheme.colors.fc_black_70};
  }

  .select__menu {
    background-color: ${farmerConnectTheme.colors.fc_beige};
    border-color: ${farmerConnectTheme.colors.fc_black_30};
  }
`;
