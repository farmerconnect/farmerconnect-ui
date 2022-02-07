import {
  addDays,
  addMonths,
  format,
  getDay,
  getDaysInMonth,
  isEqual,
  isValid,
  parse,
  startOfDay,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';
import React, { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import CustomButton from '../CustomButton';
import Arrow from '../Icons/Arrow';
import { HelperText } from '../Input/styles';
import { IDatePickerProps } from './interfaces';
import * as S from './styles';

export default function DatePicker({
  start = null,
  end = null,
  monthsShown: calendarCount = 2,
  onChange = () => {},
  variant = 'default',
  selectsRange = true,
  error = false,
  onBlur = () => {},
  helperText,
  weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'],
  buttonText = ['Last 30 days', 'Last 90 days', 'Last year'],
  dividerText = 'to',
  placeholder = ['DD-MMM-YYYY', 'DD-MMM-YYYY'],
  ...divProps
}: IDatePickerProps) {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const popper = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    strategy: 'fixed',
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelecting, setIsSelecting] = useState<'start' | 'end'>('start');
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);
  const [dateText, setDateText] = useState({ start: '', end: '' });
  const [displayedMonth, setDisplayedMonth] = useState(startOfMonth(new Date()));

  const handleSelectDay = (day: Date) => {
    if (!selectsRange) {
      onChange(day, day);
      setIsSelecting('start');
      setIsOpen(false);
      return;
    }
    if (isSelecting === 'start') {
      onChange(day, null);
      setIsSelecting('end');
    } else if (isSelecting === 'end') {
      if (!start) {
        onChange(day, null);
        setIsSelecting('end');
      } else if (start && start.valueOf() > day.valueOf()) {
        onChange(day, null);
      } else {
        onChange(start, day);
        setIsSelecting('start');
        setIsOpen(false);
      }
    }
  };

  const handleOpenCalendar = (e: FocusEvent<HTMLInputElement>, range: 'start' | 'end') => {
    e.target.select();
    if (end && start && end.getMonth() - start.getMonth() <= calendarCount - 1) {
      setDisplayedMonth(startOfMonth(start));
    } else if (end) {
      setDisplayedMonth(subMonths(startOfMonth(end), calendarCount - 1));
    } else if (start) {
      setDisplayedMonth(startOfMonth(start));
    } else {
      setDisplayedMonth(startOfMonth(new Date()));
    }
    setIsOpen(true);
    setIsSelecting(range);
  };

  const handleClickOutside: EventListener = (e) => {
    if ((e.target as HTMLDivElement).classList.contains('select__option')) return;
    if (!containerRef?.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleChangeYear = (value: { value: number; label: number }) => {
    setDisplayedMonth(new Date(value.value, 0, 1));
  };

  const handleSelectPredefinedRange = (days: number) => {
    const today = startOfDay(new Date());
    onChange(subDays(today, days), today);
    setIsOpen(false);
    setIsSelecting('start');
  };

  const handleNavigateMonth = (navigate: number) => {
    setDisplayedMonth((prev) => addMonths(prev, navigate));
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>, date: 'start' | 'end') => {
    setDateText((prev) => ({ ...prev, [date]: e.target.value }));
  };

  const handleDateInputBlur = (e: ChangeEvent<HTMLInputElement>, date: 'start' | 'end') => {
    const tentativeDate = parseDate(e.target.value);
    if (tentativeDate) {
      if (date === 'start') {
        onChange(tentativeDate, end);
      } else {
        onChange(start, tentativeDate);
      }
    }
  };

  useEffect(() => {
    if (!isOpen) onBlur();
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    // eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    if (!selectsRange) onChange(start, start);
    // eslint-disable-next-line
  }, [selectsRange]);

  useEffect(() => {
    setDateText({
      start: start ? format(start, 'dd-MMM-yyyy') : '',
      end: end ? format(end, 'dd-MMM-yyyy') : '',
    });
    if (start && end && start.valueOf() > end.valueOf()) {
      // eslint-disable-next-linnne
      onChange(end, start);
      return;
    }
    // eslint-disable-next-line
  }, [start, end]);

  return (
    <S.Container ref={containerRef} variant={variant} {...divProps}>
      <S.InputWrapper
        ref={setReferenceElement}
        isOpen={isOpen}
        isError={!!error}
        placeTop={popper.state?.placement === 'top-start'}
      >
        <S.DateInput
          placeholder={Array.isArray(placeholder) ? placeholder[0] : placeholder}
          onFocus={(e) => handleOpenCalendar(e, 'start')}
          value={dateText.start}
          onChange={(e) => handleChangeInput(e, 'start')}
          onBlur={(e) => handleDateInputBlur(e, 'start')}
          aria-label="start date"
          id="date-input-start"
          size={12}
        />
        {selectsRange && (
          <>
            <S.DateInputDivider>{dividerText}</S.DateInputDivider>
            <S.DateInput
              placeholder={Array.isArray(placeholder) ? placeholder[1] : ''}
              onFocus={(e) => handleOpenCalendar(e, 'end')}
              value={dateText.end}
              onChange={(e) => handleChangeInput(e, 'end')}
              onBlur={(e) => handleDateInputBlur(e, 'end')}
              id="date-input-end"
              aria-label="end date"
              size={12}
              className="align-right"
            />
          </>
        )}
        <S.CalendarIcon />
        {error && typeof error === 'string' && <HelperText error>{error}</HelperText>}
        {!error && helperText && <HelperText>{helperText}</HelperText>}
      </S.InputWrapper>
      {isOpen && (
        <S.CalendarWrapper
          ref={setPopperElement}
          style={popper.styles.popper}
          {...popper.attributes.popper}
          placeTop={popper.state?.placement === 'top-start'}
          isError={!!error}
        >
          <S.CalendarContainer
            inputWidth={referenceElement?.clientWidth || 0}
            isOpen={isOpen}
            placeTop={popper.state?.placement === 'top-start'}
          >
            <S.Header>
              <S.SmallYearSelect
                options={getYearOptions()}
                value={{ label: displayedMonth.getFullYear(), value: displayedMonth.getFullYear() }}
                onChange={handleChangeYear}
                id="year-select"
              />
              <S.ButtonGroup>
                <CustomButton
                  variant="outline"
                  small
                  onClick={() => handleSelectPredefinedRange(30)}
                  id="button-last-30"
                >
                  {buttonText[0]}
                </CustomButton>
                <CustomButton
                  variant="outline"
                  small
                  onClick={() => handleSelectPredefinedRange(90)}
                  id="button-last-90"
                >
                  {buttonText[1]}
                </CustomButton>
                <CustomButton
                  variant="outline"
                  small
                  onClick={() => handleSelectPredefinedRange(365)}
                  id="button-last-year"
                >
                  {buttonText[2]}
                </CustomButton>
              </S.ButtonGroup>
            </S.Header>
            <S.CalendarBody onMouseLeave={() => setHoveringDate(null)}>
              <S.MonthNavigationButton
                align="left"
                onClick={() => handleNavigateMonth(-1)}
                variant="outline"
                aria-label="go to previous month"
              >
                <Arrow direction="left" />
              </S.MonthNavigationButton>
              <S.MonthNavigationButton
                align="right"
                onClick={() => handleNavigateMonth(1)}
                variant="outline"
                aria-label="go to next month"
              >
                <Arrow direction="right" />
              </S.MonthNavigationButton>
              {new Array(calendarCount).fill(null).map((_, index) => (
                <S.SingleCalendar key={'calendar-' + index}>
                  <S.MonthName>{format(addMonths(displayedMonth, index), 'MMMM')}</S.MonthName>
                  {weekDays.map((day) => (
                    <S.WeekdayName key={index + '-' + day}>{day}</S.WeekdayName>
                  ))}
                  {getDays(addMonths(displayedMonth, index)).map((day) => (
                    <S.Day
                      key={day.toString()}
                      aria-label={`Choose ${format(day, 'EEEE, MMMM do, yyyy')}`}
                      style={{
                        gridColumnStart: day.getDate() === 1 ? getDay(addMonths(displayedMonth, index)) || 7 : 'auto',
                      }}
                      onClick={() => handleSelectDay(day)}
                      isSelected={isDateSelected(day, start, end)}
                      isInRange={!!(start && end && day.valueOf() > start.valueOf() && day.valueOf() < end.valueOf())}
                      isStartDate={!!(start && start.valueOf() === day.valueOf())}
                      isEndDate={
                        !!(start && !end && hoveringDate && hoveringDate.valueOf() === day.valueOf()) ||
                        !!(start && end && end.valueOf() === day.valueOf())
                      }
                      isInSelectingRange={
                        !!(
                          start &&
                          !end &&
                          hoveringDate &&
                          day.valueOf() > start.valueOf() &&
                          day.valueOf() < hoveringDate.valueOf()
                        )
                      }
                      isHovering={!!(hoveringDate && isEqual(day, hoveringDate))}
                      onMouseEnter={() => setHoveringDate(day)}
                    >
                      <span>{day.getDate()}</span>
                    </S.Day>
                  ))}
                </S.SingleCalendar>
              ))}
            </S.CalendarBody>
          </S.CalendarContainer>
        </S.CalendarWrapper>
      )}
    </S.Container>
  );
}

const getDays = (date: Date) => new Array(getDaysInMonth(date)).fill(null).map((_, index) => addDays(date, index));

const getYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const numberOfOptions = currentYear - 2010 + 6;
  return new Array(numberOfOptions).fill(null).map((_, index) => ({ value: 2010 + index, label: 2010 + index }));
};

const isDateSelected = (date: Date, start: Date | null, end: Date | null) => {
  if (start && isEqual(date, start)) return true;
  if (end && isEqual(date, end)) return true;
  return false;
};

const parseDate = (date: string) => {
  const formats = ['dd-MMM-yyyy', 'yyyy-MM-dd', 'dd-MM-yyyy', 'MM-dd-yyyy'];
  let validDate = formats
    .map((format) => parse(date.replaceAll('/', '-'), format, startOfDay(new Date())))
    .find((date) => isValid(date));
  return validDate || false;
};
