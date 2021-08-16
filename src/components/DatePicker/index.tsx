import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Arrow } from '../Icons';
import Calendar from '../Icons/Calendar';
import { IDatePickerProps } from './interfaces';
import * as S from './styles';

const Day = (day: number) => <S.Day>{day}</S.Day>;

const Header = (props: {
  monthDate: Date;
  customHeaderCount: number;
  decreaseMonth(): void;
  increaseMonth(): void;
}) => {
  return (
    <S.Header>
      {props.customHeaderCount === 0 && (
        <S.ArrowButton variant="text" onClick={props.decreaseMonth}>
          <Arrow />
        </S.ArrowButton>
      )}
      {props.customHeaderCount === 1 && (
        <S.ArrowButton variant="text" right onClick={props.increaseMonth}>
          <Arrow />
        </S.ArrowButton>
      )}
      <h4>{props.monthDate.toLocaleString('en', { month: 'long' })}</h4>
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

  const handleSelectRange = (date: [Date | null, Date | null] | Date | null) => {
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
        onChange={enableRange ? handleSelectRange : undefined}
        onSelect={enableRange ? undefined : handleSelectRange}
        selected={enableRange ? null : start}
        startDate={enableRange ? start : null}
        endDate={enableRange ? end : null}
        excludeDates={excludeDates}
        focusSelectedMonth={true}
      >
        {!hideRangeToggle && (
          <S.DateSwitchContainer>
            <S.DateSwitch onClick={handleToggleRange}>
              <div className={enableRange ? 'selects-range' : ''} />
              <span className={enableRange ? '' : 'selected'}>{text.day}</span>
              <span className={enableRange ? 'selected' : ''}>{text.dateRange}</span>
            </S.DateSwitch>
          </S.DateSwitchContainer>
        )}
        {enableRange && (
          <S.BottomRow>
            <S.CancelButton variant="link" onClick={handleClearDates}>
              {text.clearDates}
            </S.CancelButton>
          </S.BottomRow>
        )}
      </ReactDatePicker>
      <Calendar />
    </S.DatePickerWrapper>
  );
};

export default DatePicker;
