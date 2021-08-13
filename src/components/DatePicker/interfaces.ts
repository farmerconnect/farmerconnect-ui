export interface IDatePickerProps {
  start?: Date | null;
  end?: Date | null;
  onChange?: (start: Date | null, end: Date | null) => void;
  selectsRange?: boolean;
  excludeDates?: Date[];
  onToggleRange?: (selectsRange: boolean) => void;
  hideRangeToggle?: boolean;
  error?: boolean;
  className?: string;
  text?: {
    placeholder?: string;
    day?: string;
    dateRange?: string;
    clearDates?: string;
  };
}
