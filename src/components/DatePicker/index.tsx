import React, { useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import Calendar from '../Icons/Calendar';
import Toggle from '../Toggle';
import { IDatePickerProps } from './interfaces';
import * as S from './styles';

const Day = (day: number) => <S.Day>{day}</S.Day>;

const Header = (props: {
  monthDate: Date;
  customHeaderCount: number;
  decreaseMonth(): void;
  increaseMonth(): void;
  increaseYear(): void;
  decreaseYear(): void;
}) => {
  return (
    <S.Header>
      {props.customHeaderCount === 0 && (
        <S.ArrowButton variant="text" onClick={props.decreaseMonth}>
          <Arrow direction="left" />
        </S.ArrowButton>
      )}
      {props.customHeaderCount === 1 && (
        <S.ArrowButton variant="text" right onClick={props.increaseMonth}>
          <Arrow direction="right" />
        </S.ArrowButton>
      )}
      <h4>
        {props.monthDate.toLocaleString('en', { month: 'long' })} {props.monthDate.getFullYear()}
      </h4>
      {props.customHeaderCount === 0 && (
        <S.ChangeYearButton>
          <button onClick={props.decreaseYear}>
            <Arrow direction="left" />
          </button>
          <span>{props.monthDate.getFullYear()}</span>
          <button onClick={props.increaseYear}>
            <Arrow direction="right" />
          </button>
        </S.ChangeYearButton>
      )}
    </S.Header>
  );
};

const DatePicker = ({
  start = null,
  end = null,
  selectsRange = true,
  onChange,
  excludeDates = [],
  onToggleRange,
  hideRangeToggle = false,
  error = false,
  className,
  text = { day: 'Day', clearDates: 'Clear dates', dateRange: 'Date range', placeholder: 'Select date...' },
  ...props
}: IDatePickerProps) => {
  const [enableRange, setEnableRange] = useState(!!selectsRange);

  const handleClearDates = () => {
    onChange?.(null, null);
  };

  const handleSelectRange: ReactDatePickerProps['onChange'] = (date) => {
    if (Array.isArray(date)) {
      const [start, end] = date;
      onChange?.(start, end);
    } else {
      onChange?.(date, date);
    }
  };

  const handleToggleRange = () => {
    onToggleRange?.(!enableRange);
    setEnableRange(!enableRange);
  };

  useEffect(() => {
    setEnableRange(!!selectsRange);
  }, [selectsRange]);

  return (
    <S.DatePickerWrapper className={className} {...props}>
      <ReactDatePicker
        customInput={<S.DatePickerInput error={error} />}
        calendarClassName={selectsRange === undefined ? 'show-switch' : ''}
        calendarContainer={S.Calendar}
        renderDayContents={Day}
        selectsRange={enableRange}
        monthsShown={2}
        renderCustomHeader={Header}
        placeholderText={text.placeholder}
        dateFormat="MMM-dd-yyyy"
        onChange={handleSelectRange}
        selected={enableRange ? null : start}
        startDate={enableRange ? start : null}
        endDate={enableRange ? end : null}
        excludeDates={excludeDates}
        focusSelectedMonth={true}
      >
        <S.BottomRow>
          <S.CancelButton variant="link" onClick={handleClearDates}>
            {text.clearDates}
          </S.CancelButton>
          {!hideRangeToggle && (
            <Toggle checked={enableRange} onChange={handleToggleRange}>
              {text.dateRange}
            </Toggle>
          )}
        </S.BottomRow>
      </ReactDatePicker>
      <Calendar />
    </S.DatePickerWrapper>
  );
};

const Arrow = ({ direction = 'left' }: { direction: 'left' | 'right' }) => (
  <svg
    fill="none"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
    height="8"
    viewBox="0 0 8 5"
    style={{ transform: `rotate(${direction === 'left' ? '-90deg' : '90deg'})` }}
  >
    <path
      d="M0.474162 4.19563C0.734162 4.45562 1.15416 4.45563 1.41416 4.19563L4.00083 1.60896L6.5875 4.19563C6.8475 4.45563 7.2675 4.45563 7.5275 4.19563C7.7875 3.93563 7.7875 3.51563 7.5275 3.25563L4.4675 0.195625C4.2075 -0.0643749 3.7875 -0.0643749 3.5275 0.195625L0.467495 3.25563C0.214162 3.50896 0.214162 3.93563 0.474162 4.19563Z"
      fill="currentColor"
    />
  </svg>
);

export default DatePicker;
