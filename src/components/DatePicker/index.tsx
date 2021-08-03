import React, { useState, useEffect } from 'react';
import CustomButton from '../CustomButton';
import Calendar from '../Icons/Calendar';
import { IDatePickerProps } from './interfaces';
import * as S from './styles';

const DatePicker = ({ date = null, onChange }: IDatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => (date ? date : new Date()));
  const [showMonth, setShowMonth] = useState(() => (date ? date.getMonth() : new Date().getMonth()));
  const [showYear, setShowYear] = useState(() => (date ? date.getFullYear() : new Date().getFullYear()));

  const handleMonthChange = (option: { value: string }) => {
    setShowMonth(+option.value);
  };

  const handleYearChange = (option: { value: string }) => {
    setShowYear(+option.value);
  };

  const handleChange = (date: Date) => {
    const dateObj = new Date(date);
    setShowMonth(dateObj.getMonth());
    setShowYear(dateObj.getFullYear());
    setSelectedDate(dateObj);
  };

  const handleConfirm = () => {
    if (selectedDate) onChange?.(selectedDate);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedDate(date);
    // eslint-disable-next-line
  }, [isOpen]);

  const showDate = new Date(showYear, showMonth, 1);

  return (
    <S.Container>
      <S.DatePicker
        selectsRange={true}
        customInput={<S.DatePickerInput />}
        openToDate={showDate}
        onChange={handleChange}
        selected={selectedDate}
        open={isOpen}
        onInputClick={() => setIsOpen(true)}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        onClickOutside={() => setIsOpen(false)}
        readOnly
      >
        <h3>Select date</h3>
        <S.SelectWrapper>
          <S.DateSelect
            options={monthOptions}
            isSelected
            value={monthOptions[showMonth]}
            isMulti={false}
            onChange={handleMonthChange}
            closeMenuOnSelect
          />
          <S.DateSelect
            options={getYearOptions()}
            isSelected
            value={getYearOptions().find((year) => year.value === showYear)}
            isMulti={false}
            onChange={handleYearChange}
            closeMenuOnSelect
          />
        </S.SelectWrapper>
        <S.ButtonRow>
          <S.CancelButton variant="link" onClick={() => setIsOpen(false)}>
            Cancel
          </S.CancelButton>
          <CustomButton onClick={handleConfirm}>Set date</CustomButton>
        </S.ButtonRow>
      </S.DatePicker>
      <S.DateLabel isEmpty={Boolean(!date)}>
        {date
          ? new Intl.DateTimeFormat('en', {
              dateStyle: 'medium',
            }).format(date)
          : 'Select date...'}
      </S.DateLabel>
      <Calendar />
    </S.Container>
  );
};

const monthOptions = [
  { value: '0', label: 'January' },
  { value: '1', label: 'February' },
  { value: '2', label: 'March' },
  { value: '3', label: 'April' },
  { value: '4', label: 'May' },
  { value: '5', label: 'June' },
  { value: '6', label: 'July' },
  { value: '7', label: 'August' },
  { value: '8', label: 'September' },
  { value: '9', label: 'October' },
  { value: '10', label: 'November' },
  { value: '11', label: 'December' },
];

const getYearOptions = () => {
  const year = new Date().getUTCFullYear();
  const options = new Array(21)
    .fill(null)
    .map((pos, index) => ({ value: year - 10 + index, label: year - 10 + index }));
  return options;
};

export default DatePicker;
