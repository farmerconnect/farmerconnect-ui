import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import CustomButton from '../CustomButton';
import CustomSelect from '../Select';
import Typography from '../Typography';
import Calendar from '../Icons/Calendar';

type InputWrapperProps = {
  isError?: boolean;
  isOpen: boolean;
  placeTop: boolean;
  variant: 'small' | 'default';
};

type DummyValueProps = {
  variant: 'default' | 'small';
};
export const DummyValue = styled.span<DummyValueProps>`
  ${({ variant }) => css`
    position: absolute;
    height: 1px;
    color: transparent;
    pointer-events: none;
    visibility: hidden;
    font-size: ${variant === 'small' ? '0.6875rem' : '0.875rem'};
    font-weight: 700;
  `}
`;

const InputWrapperVariants = {
  small: {
    background: colors.fc_white,
    minHeight: '2rem',
    borderColor: colors.fc_black_100,
    errorBorderColor: colors.fc_red,
    errorBoxShadow: 'none',
    isOpenBoxShadow: 'none',
  },
  default: {
    background: colors.fc_beige,
    minHeight: '2.5rem',
    borderColor: 'transparent',
    errorBorderColor: 'transparent',
    errorBoxShadow: '0.125rem 0.125rem 0 ' + colors.fc_red,
    isOpenBoxShadow: '0.125rem 0.125rem 0 ' + colors.fc_green,
  },
};

export const InputWrapper = styled.div<InputWrapperProps>`
  ${(props: InputWrapperProps) => css`
    border-radius: 0.75rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: ${InputWrapperVariants[props.variant].background};
    min-height: ${InputWrapperVariants[props.variant].minHeight};
    padding-right: 2rem;
    margin: 0;
    border-width: 1px;
    border-style: solid;
    border-color: ${InputWrapperVariants[props.variant].borderColor};
    transition: box-shadow 0.1s ease-out;
    ${props.isError &&
    css`
      border-color: ${InputWrapperVariants[props.variant].errorBorderColor};
      box-shadow: ${InputWrapperVariants[props.variant].errorBoxShadow};
    `};
    ${props.isOpen &&
    !props.placeTop &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-color: transparent;
    `}
    ${props.isOpen &&
    props.placeTop &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top-color: transparent;
    `}
    ${props.isOpen &&
    css`
      box-shadow: ${InputWrapperVariants[props.variant].isOpenBoxShadow};
    `}
> svg {
      color: ${colors.fc_black_100};
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      height: ${props.variant === 'default' ? '1.5rem' : '1.125rem'};
      width: auto;
    }
  `}
`;

type DateInputProps = {
  variant: 'small' | 'default';
};

const DateInputVariants = {
  small: {
    width: '5rem',
    fontSize: '0.6875rem',
    fontWeight: '700',
    minHeight: '2rem',
    padding: '0 0.5rem',
  },
  default: {
    width: '7rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    minHeight: '2.5rem',
    padding: '0 1rem',
  },
};
export const DateInput = styled.input<DateInputProps>`
  ${(props) => css`
    box-sizing: border-box;
    display: inline-flex;
    margin: 0;
    padding: 0;
    font-size: ${DateInputVariants[props.variant].fontSize};
    font-weight: ${DateInputVariants[props.variant].fontWeight};
    outline: none;
    border: none;
    text-transform: uppercase;
    padding: ${DateInputVariants[props.variant].padding};
    background-color: transparent;
    &::placeholder {
      color: ${colors.fc_black_30};
      font-weight: 400;
    }
    &:focus {
      font-weight: 700;
    }
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      background-color: black;
    }
  `}
`;

export const DateInputDivider = styled(Typography).attrs({
  variant: 'small',
  fontStyle: 'highlight',
  tagName: 'span',
})`
  margin-right: 0.5rem;
`;

type CalendarWrapperProps = {
  placeTop: boolean;
  variant: 'default' | 'small';
};
const CalendarWrapperVariants = {
  small: {
    borderColor: colors.fc_black_100,
    background: colors.fc_white,
    boxShadow: 'none',
  },
  default: {
    borderColor: 'transparent',
    background: colors.fc_beige,
    boxShadow: '0.125rem 0.125rem 0 ' + colors.fc_green,
  },
};
export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  ${(props) => css`
    border-radius: 0.75rem;
    border-width: 1px;
    border-style: solid;
    border-color: ${CalendarWrapperVariants[props.variant].borderColor};
    background-color: ${CalendarWrapperVariants[props.variant].background};
    box-shadow: ${CalendarWrapperVariants[props.variant].boxShadow};
    margin: -1px 0;
    ${props.placeTop
      ? css`
          border-bottom-left-radius: 0;
        `
      : css`
          border-top-left-radius: 0;
        `}
  `}
`;

type CalendarContainerProps = {
  inputWidth: number;
  isOpen: boolean;
  placeTop: boolean;
  variant: 'default' | 'small';
};
export const CalendarContainer = styled.div<CalendarContainerProps>`
  ${(props) => css`
    position: relative;
    padding: 1.5rem;
    &:after {
      content: '';
      position: absolute;
      height: 0.25rem;
      width: ${props.inputWidth - 2}px;
      background-color: ${props.variant === 'small' ? colors.fc_white : colors.fc_beige};
      ${props.isOpen &&
      props.placeTop &&
      css`
        bottom: -4px;
      `};
      ${props.isOpen &&
      !props.placeTop &&
      css`
        top: -4px;
      `};
      left: 0;
    }
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  > div:first-child {
    width: 8.25rem;
  }
`;

export const YearSelect = styled(CustomSelect)``;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CalendarBody = styled.div`
  position: relative;
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const SingleCalendar = styled.div`
  height: 18rem;
  display: grid;
  grid-template-columns: repeat(7, 2.5rem);
  grid-auto-rows: 2.25rem;
  align-items: center;
  justify-content: center;
`;

export const MonthName = styled(Typography).attrs({
  fontStyle: 'highlight',
})`
  text-align: center;
  grid-column: 1/8;
  pointer-events: none;
`;

export const Container = styled.div`
  position: relative;
`;

type DayProps = {
  isSelected: boolean;
  isInRange: boolean;
  isInSelectingRange: boolean;
  isHovering: boolean;
  isStartDate: boolean;
  isEndDate: boolean;
};
export const Day = styled.button<DayProps>`
  ${(props) => css`
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Red Hat Text', sans-serif;
    font-size: 0.6875rem;
    color: ${colors.fc_black_100};
    height: 2rem;
    width: 2.5rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: all 0.1s ease-out;
    > span {
      height: 2rem;
      width: 2rem;
      flex-shrink: 0;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.1s ease-out;
    }
    ${props.isStartDate &&
    css`
      box-shadow: -1.125rem 0 0 0 ${colors.fc_black_5} inset;
    `}
    ${props.isEndDate &&
    css`
      box-shadow: 1.125rem 0 0 0 ${colors.fc_black_5} inset;
    `}
    ${props.isStartDate &&
    props.isEndDate &&
    css`
      box-shadow: none !important;
    `}
    ${props.isInRange &&
    css`
      background-color: ${colors.fc_black_5};
    `}
    ${props.isInSelectingRange &&
    css`
      background-color: ${colors.fc_black_5};
    `}
    ${props.isHovering &&
    css`
      > span {
        background-color: ${colors.fc_light_green};
      }
    `}
    ${props.isSelected &&
    css`
      > span {
        background-color: ${colors.fc_green};
        font-weight: 700;
        color: ${colors.fc_white};
      }
    `}
    ${props.isHovering &&
    props.isSelected &&
    css`
      > span {
        background-color: ${colors.fc_hover_green};
      }
    `}
  `}
`;

type MonthNavigationButtonProps = {
  align: 'left' | 'right';
};
export const MonthNavigationButton = styled(CustomButton)<MonthNavigationButtonProps>`
  border: none;
  position: absolute;
  top: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0;
  min-width: auto;
  min-height: auto;
  ${(props) =>
    props.align === 'left' &&
    css`
      left: 0;
    `}
  ${(props) =>
    props.align === 'right' &&
    css`
      right: 0;
    `}
`;

export const CalendarIcon = styled(Calendar)``;

export const WeekdayName = styled(Typography).attrs({
  tagName: 'span',
  fontStyle: 'semibold',
  variant: 'small',
})`
  text-align: center;
  pointer-events: none;
`;
