import styled from 'styled-components';
import ReactDatepicker from 'react-datepicker';
import SmallSelect from '../SmallSelect';
import CustomButton from '../CustomButton';

export const Container = styled.div`
  position: relative;
  > svg {
    position: absolute;
    top: 50%;
    right: 0.625rem;
    color: #5b5b5b;
    transform: translateY(-50%);
  }
  .react-datepicker {
    width: 19rem;
    border-radius: 0.75rem;
    box-shadow: 0.125rem 0.125rem 0 #00e394;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    &__navigation {
      background-color: transparent;
      position: absolute;
      top: 0.5rem;
      display: none;
      &--previus {
        left: 0.5rem;
      }
      &--next {
        right: 0.5rem;
      }
    }
    > h3 {
      font-size: 1.0625rem;
      font-weight: 700;
      color: #141414;
      margin: 0 0 1.5rem 0;
    }
    &__triangle {
      display: none;
    }
    &__current-month {
      display: none;
    }
    &__header__dropdown {
      display: flex;
      gap: 0.5rem;
    }
    &__month-dropdown-container,
    &__year-dropdown-container {
      flex: 1;
      position: relative;
    }
    &__month-read-view,
    &__year-read-view {
      font-size: 0.6875rem;
      color: #141414;
      min-height: 2rem;
      padding: 0.5rem 1.75rem 0.5rem 0.75rem;
      box-sizing: border-box;
      border: 1px solid #5b5b5b;
      border-radius: 0.75rem;
      font-weight: 500;
    }
    &__month-dropdown,
    &__year-dropdown {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      font-size: 0.6875rem;
      color: #141414;
      min-height: 2rem;
      box-sizing: border-box;
      border: 1px solid #5b5b5b;
      border-radius: 0.75rem;
      font-weight: 500;
      background-color: #fff;
      z-index: 2;
      overflow: auto;
      max-height: 20rem;
      &::-webkit-scrollbar-track {
        border-radius: 0 0.75rem 0.75rem 0;
        /* border-bottom-right-radius: 0.75rem; */
        background-color: rgba(20, 20, 20, 0.1);
        padding: 1rem 0;
      }

      &::-webkit-scrollbar {
        width: 0.5rem;
        background-color: transparent;
        padding-top: 1rem;
        border-bottom-right-radius: 0.75rem;
        overflow: hidden;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 0 0.75rem 0.75rem 0;
        box-sizing: border-box;
        background-color: #b3b2b1;
        margin: 2px;
      }
    }
    &__month-option,
    &__year-option {
      padding: 0.5rem;
      color: #5b5b5b;
      cursor: pointer;
      transition: all 0.1 ease-out;
      border-bottom: 1px solid #e7e7e7;
      &:hover {
        background-color: #e7e7e7;
      }
    }
    &__month-option--selected_month,
    &__year-option--selected_year {
      color: #141414;
      font-weight: 700;
    }
    &__month-option--selected,
    &__year-option--selected {
      display: none;
    }
    &__month-container {
      order: 1;
    }
    &__day-names {
      display: flex;
      justify-content: space-between;
      height: 2rem;
    }
    &__day-name {
      color: #141414;
      text-align: center;
      font-size: 0.6875rem;
      flex: 1;
      line-height: 2rem;
      font-weight: 500;
    }
    &__month {
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
      text-align: center;
      font-size: 0.6875rem;
      color: #141414;
      line-height: 2rem;
      font-weight: 400;
      cursor: pointer;
      position: relative;
      &--outside-month {
        color: #b9b9b9;
      }
      &--selected {
        position: relative;
        font-weight: 700;
        color: #fff;
        &::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 1rem;
          height: 2rem;
          width: 2rem;
          background-color: #00e394;
          z-index: -1;
        }
      }
      &--in-range {
        background-color: #f3f3f3;
        border-radius: 1rem;
        border-radius: 0;
      }
      &--range-start {
        border-radius: 2rem 0 0 2rem;
        z-index: 1;
        color: #fff;
        font-weight: 700;
        &::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 1rem;
          height: 2rem;
          width: 2rem;
          background-color: #00e394;
          z-index: -1;
        }
      }
      &--range-end {
        border-radius: 0 2rem 2rem 0;
        z-index: 1;
        color: #fff;
        font-weight: 700;
        &::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 1rem;
          height: 2rem;
          width: 2rem;
          background-color: #06a56e;
          z-index: -1;
        }
      }
    }
  }
`;

export const DatePicker = styled(ReactDatepicker)``;

export const InputWrapper = styled.div`
  position: relative;
`;

export const DatePickerInput = styled.input`
  cursor: default;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #5b5b5b;
  border-radius: 0.75rem;
  outline: none;
  font-size: 0.6875rem;
  color: #141414;
  font-weight: 500;
  line-height: 1rem;
  padding: 0.5rem 1.75rem 0.5rem 0.75rem;
  height: 2rem;
  &:placeholder {
    color: #b9b9b9;
    font-weight: 400;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const DateSelect = styled(SmallSelect)`
  flex: 1;
  .select__control {
    border-color: #5b5b5b;
  }
`;

export const ButtonRow = styled.div`
  order: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const CancelButton = styled(CustomButton)`
  padding: 0.5rem 2rem;
  color: #141414;
  &:hover:not(:disabled) {
    color: #141414;
  }
`;

type DateLabelProps = {
  isEmpty?: boolean;
};
export const DateLabel = styled.span<DateLabelProps>`
  position: absolute;
  inset: 0 0 0 0;
  padding-left: 0.75rem;
  padding-right: 1.75rem;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isEmpty ? '#B9B9B9' : '#141414')};
  font-weight: ${(props) => (props.isEmpty ? 400 : 500)};
  font-size: 0.6875rem;
  pointer-events: none;
`;
