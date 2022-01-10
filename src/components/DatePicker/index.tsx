import { useCallback } from 'react';
import React, { useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import CalendarIcon from '../Icons/Calendar';
import Toggle from '../Toggle';
import Arrow from '../Icons/Arrow';
import { IDatePickerProps } from './interfaces';
import * as S from './styles';

const Day = (day: number) => <S.Day>{day}</S.Day>;

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
  variant = 'default',
  helperText = '',
  monthsShown = 2,
  portalId,
  text = { day: 'Day', clearDates: 'Clear dates', dateRange: 'Date range', placeholder: 'Select date...' },
  ...props
}: IDatePickerProps) => {
  const [enableRange, setEnableRange] = useState(!!selectsRange);
  const _monthsShown = Math.max(monthsShown, 1);

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

  const Header = useCallback(
    (props: {
      monthDate: Date;
      customHeaderCount: number;
      decreaseMonth(): void;
      increaseMonth(): void;
      increaseYear(): void;
      decreaseYear(): void;
    }) => {
      return (
        <>
          <S.Header>
            {props.customHeaderCount === 0 && (
              <S.ArrowButton variant="text" onClick={props.decreaseMonth}>
                <Arrow direction="left" />
              </S.ArrowButton>
            )}
            {props.customHeaderCount === _monthsShown - 1 && (
              <S.ArrowButton variant="text" right onClick={props.increaseMonth}>
                <Arrow direction="right" />
              </S.ArrowButton>
            )}
            <h4>
              {props.monthDate.toLocaleString('en', { month: 'long' })} {props.monthDate.getFullYear()}
            </h4>
          </S.Header>
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
        </>
      );
    },
    [_monthsShown]
  );

  const Calendar = useCallback((props) => <S.Calendar monthsShown={_monthsShown} {...props} />, [_monthsShown]);

  return (
    <S.DatePickerWrapper className={className} {...props}>
      <ReactDatePicker
        customInput={
          variant === 'small' ? (
            <S.DatePickerSmallInput error={!!error} />
          ) : (
            <S.DatePickerDefaultInput error={!!error} />
          )
        }
        calendarClassName={selectsRange === undefined ? 'show-switch' : ''}
        calendarContainer={Calendar}
        renderDayContents={Day}
        selectsRange={enableRange}
        monthsShown={_monthsShown}
        renderCustomHeader={Header}
        placeholderText={text.placeholder}
        dateFormat="MMM-dd-yyyy"
        onChange={handleSelectRange}
        selected={enableRange ? null : start}
        startDate={enableRange ? start : null}
        endDate={enableRange ? end : null}
        excludeDates={excludeDates}
        focusSelectedMonth={true}
        portalId={portalId}
        fixedHeight
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
      <CalendarIcon height={24} />
      {error && typeof error === 'string' && <S.HelperText error>{error}</S.HelperText>}
      {helperText && !error && <S.HelperText>{helperText}</S.HelperText>}
    </S.DatePickerWrapper>
  );
};

export default DatePicker;
