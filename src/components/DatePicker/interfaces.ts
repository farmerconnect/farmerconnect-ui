export const datePickerVariants = ['default', 'small'] as const;
type DatePickerVariant = typeof datePickerVariants[number];

export interface IDatePickerProps {
  start?: Date | null;
  end?: Date | null;
  onChange?: (start: Date | null, end: Date | null) => void;
  selectsRange?: boolean;
  excludeDates?: Date[];
  onToggleRange?: (selectsRange: boolean) => void;
  hideRangeToggle?: boolean;
  error?: boolean | string;
  helperText?: string;
  variant?: DatePickerVariant;
  className?: string;
  monthsShown?: number;
  portalId?: string;
  text?: {
    placeholder?: string;
    day?: string;
    dateRange?: string;
    clearDates?: string;
  };
}
