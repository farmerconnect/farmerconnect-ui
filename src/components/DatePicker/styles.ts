import styled from 'styled-components';
import { CalendarContainer } from 'react-datepicker';
import CustomButton from '../CustomButton';
import { farmerConnectTheme } from '../Theme';
import { Input as DefaultInput } from '../Input/styles';
export { HelperText } from '../Input/styles';

export const DatePickerWrapper = styled.div`
  position: relative;

  .react-datepicker-popper {
    z-index: 50;
  }

  > svg {
    color: ${farmerConnectTheme.colors.fc_black_70};
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

type DatePickerInputProps = {
  error?: boolean;
};

export const DatePickerSmallInput = styled.input<DatePickerInputProps>`
  font-family: 'Red Hat Text', sans-serif;
  cursor: default;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ error }) => (error ? farmerConnectTheme.colors.fc_red : farmerConnectTheme.colors.fc_black_70)};
  border-radius: 0.75rem;
  outline: none;
  font-size: 0.6875rem;
  color: ${farmerConnectTheme.colors.fc_black_100};
  font-weight: 700;
  line-height: 1rem;
  padding: 0.5rem 1.75rem 0.5rem 0.75rem;
  height: 2rem;
  text-transform: uppercase;
  background-color: transparent;

  &::placeholder {
    color: ${farmerConnectTheme.colors.fc_black_30};
    font-weight: 400;
    text-transform: none;
  }
`;

export const DatePickerDefaultInput = styled(DefaultInput)<DatePickerInputProps>`
  text-transform: uppercase;
  &::placeholder {
    text-transform: none;
  }
`;

export const Calendar = styled(CalendarContainer)<{ monthsShown: number }>`
  box-sizing: border-box;
  border-radius: 0.75rem;
  box-shadow: 0 0 0 1px ${farmerConnectTheme.colors.fc_black_100};
  position: relative;
  padding: 5rem 1rem 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(${(props) => props.monthsShown}, 1fr);
  gap: 0 2rem;
  background-color: ${farmerConnectTheme.colors.fc_white};

  .react-datepicker {
    &__triangle {
      display: none;
    }

    &__day-names {
      display: flex;
      justify-content: space-between;
      height: 2rem;
    }

    &__day-name {
      color: ${farmerConnectTheme.colors.fc_grey};
      text-align: center;
      font-size: 0.6875rem;
      flex: 1;
      line-height: 2rem;
      font-weight: 500;
    }

    &__month {
      width: 16rem;
    }

    &__week {
      display: flex;
      justify-content: space-between;
      height: 2rem;

      & + .react-datepicker__week {
        margin-top: 0.25rem;
      }
    }

    &__day {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.6875rem;
      color: ${farmerConnectTheme.colors.fc_black_100};
      font-weight: 400;
      cursor: pointer;
      position: relative;

      &:hover {
        > div {
          background-color: ${farmerConnectTheme.colors.fc_light_green};
        }
      }

      &--outside-month {
        color: ${farmerConnectTheme.colors.fc_black_30};
      }

      &--selected {
        position: relative;
        font-weight: 700;
        color: ${farmerConnectTheme.colors.fc_white};

        > div {
          background-color: ${farmerConnectTheme.colors.fc_green};
        }
      }

      &--in-range {
        background: ${farmerConnectTheme.colors.fc_black_5};
      }

      &--in-selecting-range {
        background: ${farmerConnectTheme.colors.fc_black_5};
      }

      &--range-start {
        border-radius: 2rem 0 0 2rem;
        color: ${farmerConnectTheme.colors.fc_white};
        font-weight: 700;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          inset: 0 50% 0 0;
          background-color: ${farmerConnectTheme.colors.fc_white};
        }

        > div {
          background-color: ${farmerConnectTheme.colors.fc_green};
          z-index: 1;
        }
      }

      &--range-end {
        border-radius: 0 2rem 2rem 0;
        color: ${farmerConnectTheme.colors.fc_white};
        font-weight: 700;

        &::before {
          content: '';
          position: absolute;
          inset: 0 0 0 50%;
          background-color: ${farmerConnectTheme.colors.fc_white};
        }

        > div {
          background-color: ${farmerConnectTheme.colors.fc_green};
          z-index: 1;
        }
      }

      &--range-start.react-datepicker__day--range-end {
        background-color: ${farmerConnectTheme.colors.fc_white};

        &::before {
          display: none;
        }
      }

      &--selecting-range-start,
      &--selecting-range-end {
        border-radius: 2rem 0 0 2rem;
        background-color: ${farmerConnectTheme.colors.fc_black_5};
        color: ${farmerConnectTheme.colors.fc_white};
        font-weight: 700;

        &::before {
          content: '';
          position: absolute;
          inset: 0 50% 0 0;
          background-color: ${farmerConnectTheme.colors.fc_white};
        }

        > div {
          background-color: ${farmerConnectTheme.colors.fc_green};
          z-index: 1;
        }
      }

      &--in-selecting-range:hover {
        &::before {
          content: '';
          position: absolute;
          inset: 0 0 0 50%;
          background-color: ${farmerConnectTheme.colors.fc_white};
        }

        > div {
          background-color: ${farmerConnectTheme.colors.fc_light_green};
          z-index: 1;
        }
      }

      &--excluded {
        color: ${farmerConnectTheme.colors.fc_black_30};
        background-color: ${farmerConnectTheme.colors.fc_white};

        &::after {
          content: '';
          position: absolute;
          height: 1.125rem;
          width: 0.125rem;
          background-color: ${farmerConnectTheme.colors.fc_black_30};
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
  }
`;

export const Day = styled.div`
  height: 2rem;
  width: 2rem;
  text-align: center;
  line-height: 2rem;
  margin: 0;
  border-radius: 1rem;
`;

export const BottomRow = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  flex: 1;
  padding: 0 0.5rem;
`;

export const CancelButton = styled(CustomButton)``;

export const Header = styled.div`
  position: relative;

  > h4 {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${farmerConnectTheme.colors.fc_black_100};
    margin: 0 0 1rem 0;
    text-align: center;
  }

  > div {
    display: flex;
    gap: 0.5rem;

    .select__control {
      flex: 1;
    }
  }
`;

type ArrowButtonProps = {
  right?: boolean;
};

export const ArrowButton = styled(CustomButton)<ArrowButtonProps>`
  position: absolute;
  inset: ${({ right }) => (right ? '-0.25rem 0 auto auto' : '-0.25rem auto auto 0')};
  color: ${farmerConnectTheme.colors.fc_black_70};
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
`;

export const ChangeYearButton = styled.div`
  position: absolute;
  left: calc(50% - 4.5rem);
  top: 1.5rem;
  background-color: #f3f3f3;
  border-radius: 0.75rem;
  width: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    border: none;
    outline: none;
    height: 2rem;
    width: 2rem;
    background-color: transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: color 0.1s ease-out;
    padding: 0;
    color: #b9b9b9;
    &:hover {
      color: #5b5b5b;
    }
  }
  > span {
    font-size: 0.875rem;
    color: #141414;
    font-weight: 700;
    cursor: default;
  }
`;
