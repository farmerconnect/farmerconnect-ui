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
import React, { ChangeEvent, useEffect, useRef, useState, FocusEvent } from 'react';
import { usePopper } from 'react-popper';
import CustomButton from '../CustomButton';
import Arrow from '../Icons/Arrow';
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
  helperText,
  ...divProps
}: IDatePickerProps) {
  const dummyValueRef = useRef<HTMLSpanElement>(null);
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
    // eslint-disable-next-line
    console.log(start, end);
  };
  const handleOpenCalendar = (e: FocusEvent<HTMLInputElement>, range: 'start' | 'end') => {
    e.target.select();
    if (end && start && end.getMonth() - start.getMonth() <= calendarCount - 1) {
      setDisplayedMonth(startOfMonth(start));
    } else if (end) {
      setDisplayedMonth(subMonths(startOfMonth(end), calendarCount - 1));
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
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    // eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    setDateText({
      start: start ? format(start, 'dd-MMM-yyyy') : '',
      end: end ? format(end, 'dd-MMM-yyyy') : '',
    });
    if (start && end && start.valueOf() > end.valueOf()) {
      onChange(end, start);
      return;
    }
  }, [start, end, onChange]);

  return (
    <S.Container ref={containerRef} {...divProps}>
      <S.InputWrapper
        ref={setReferenceElement}
        isOpen={isOpen}
        placeTop={popper.state?.placement === 'top-start'}
        variant={variant}
      >
        <S.DateInput
          variant={variant}
          placeholder="DD-MMM-YYYY"
          onFocus={(e) => handleOpenCalendar(e, 'start')}
          value={dateText.start}
          onChange={(e) => handleChangeInput(e, 'start')}
          onBlur={(e) => handleDateInputBlur(e, 'start')}
          size={11}
        />
        <S.DateInputDivider>to</S.DateInputDivider>
        <S.DateInput
          variant={variant}
          placeholder="DD-MMM-YYYY"
          onFocus={(e) => handleOpenCalendar(e, 'end')}
          value={dateText.end}
          onChange={(e) => handleChangeInput(e, 'end')}
          onBlur={(e) => handleDateInputBlur(e, 'end')}
          size={11}
        />
        <S.CalendarIcon />
        <S.DummyValue variant={variant} ref={dummyValueRef}>
          {dateText.start}
        </S.DummyValue>
      </S.InputWrapper>
      {isOpen && (
        <S.CalendarWrapper
          ref={setPopperElement}
          variant={variant}
          style={popper.styles.popper}
          {...popper.attributes.popper}
          placeTop={popper.state?.placement === 'top-start'}
        >
          <S.CalendarContainer
            inputWidth={referenceElement?.offsetWidth || 0}
            isOpen={isOpen}
            variant={variant}
            placeTop={popper.state?.placement === 'top-start'}
          >
            <S.Header>
              <S.YearSelect
                options={getYearOptions()}
                value={{ label: displayedMonth.getFullYear(), value: displayedMonth.getFullYear() }}
                onChange={handleChangeYear}
              />
              <S.ButtonGroup>
                <CustomButton variant="outline" small onClick={() => handleSelectPredefinedRange(30)}>
                  Last 30 days
                </CustomButton>
                <CustomButton variant="outline" small onClick={() => handleSelectPredefinedRange(90)}>
                  Last 90 days
                </CustomButton>
                <CustomButton variant="outline" small onClick={() => handleSelectPredefinedRange(365)}>
                  Last year
                </CustomButton>
              </S.ButtonGroup>
            </S.Header>
            <S.CalendarBody onMouseLeave={() => setHoveringDate(null)}>
              <S.MonthNavigationButton align="left" onClick={() => handleNavigateMonth(-1)} variant="outline">
                <Arrow direction="left" />
              </S.MonthNavigationButton>
              <S.MonthNavigationButton align="right" onClick={() => handleNavigateMonth(1)} variant="outline">
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

const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'];

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
  let validDate = formats.map((format) => parse(date, format, startOfDay(new Date()))).find((date) => isValid(date));
  return validDate || false;
};
