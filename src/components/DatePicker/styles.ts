import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import colors from '../../styles/colors';
import CustomButton from '../CustomButton';
import Calendar from '../Icons/Calendar';
import CustomSelect from '../Select';
import SmallSelect from '../SmallSelect';
import Typography from '../Typography';
import { Variants } from './interfaces';

const variants: Record<Variants, FlattenSimpleInterpolation> = {
  default: css`
    --input-bg: ${colors.fc_beige};
    --input-focused-bg: ${colors.fc_beige};
    --input-box-shadow: 0.125rem 0.125rem 0 ${colors.fc_green};
    --input-placeholder-color: ${colors.fc_black_70};
    --input-min-height: 2.5rem;
    --input-border-color: transparent;
    --input-font-size: 0.875rem;
    --input-font-weight: 500;
    --input-icon-height: 1.5rem;
    --input-left-padding: 1rem;
    --input-border-color-error: transparent;
    --input-box-shadow-error: 0.125rem 0.125rem 0 ${colors.fc_red};
    --mask-divider-color: ${colors.fc_beige};
    --range-bg-color: ${colors.fc_black_10};
    --range-font-color: ${colors.fc_black_100};
  `,
  small: css`
    --input-bg: 'transparent';
    --input-focused-bg: ${colors.fc_white};
    --input-box-shadow: none;
    --input-placeholder-color: ${colors.fc_black_30};
    --input-min-height: 2rem;
    --input-border-color: ${colors.fc_black_100};
    --input-font-size: 0.6875rem;
    --input-font-weight: 700;
    --input-icon-height: 1.125rem;
    --input-left-padding: 0.5rem;
    --input-border-color-error: ${colors.fc_red};
    --input-box-shadow-error: none;
    --mask-divider-color: ${colors.fc_white};
    --range-bg-color: ${colors.fc_black_5};
    --range-font-color: ${colors.fc_black_100};
  `,
};

type ContainerProps = {
  variant: Variants;
};
export const Container = styled.div<ContainerProps>`
  position: relative;
  font-family: 'Red Hat Text', sans-serif;
  ${(props) => variants[props.variant]}
`;

type InputWrapperProps = {
  isError?: boolean;
  isOpen: boolean;
  placeTop: boolean;
};
export const InputWrapper = styled.div<InputWrapperProps>`
  ${(props: InputWrapperProps) => css`
    border-radius: 0.75rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: var(--input-bg);
    min-height: var(--input-min-height);
    padding-right: 2.5rem;
    padding-left: var(--input-left-padding);
    margin: 0;
    border-width: 1px;
    border-style: solid;
    border-color: var(--input-border-color);
    transition: box-shadow 0.1s ease-out;
    ${props.isOpen &&
    css`
      box-shadow: var(--input-box-shadow);
      background-color: var(--input-focused-bg);
    `}
    ${props.isError &&
    css`
      border-color: var(--input-border-color-error);
      box-shadow: var(--input-box-shadow-error);
    `}
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
> svg {
      color: ${colors.fc_black_100};
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      height: var(--input-icon-height);
      width: auto;
    }
  `}
`;

export const DateInput = styled.input`
  ${(props) => css`
    font-family: 'Red Hat Text', sans-serif;
    box-sizing: border-box;
    display: inline-flex;
    min-width: 0;
    margin: 0;
    padding: 0;
    flex: 1;
    font-size: var(--input-font-size);
    font-weight: var(--input-font-weight);
    outline: none;
    border: none;
    text-transform: uppercase;
    padding: 0.5rem 0;
    background-color: transparent;
    &::placeholder {
      color: var(--input-placeholder-color);
      text-transform: none;
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
    &.align-right {
      text-align: right;
    }
  `}
`;

export const DateInputDivider = styled(Typography).attrs({
  variant: 'small',
  fontStyle: 'highlight',
  tagName: 'span',
})`
  text-align: center;
  font-size: var(--input-font-size);
`;

type CalendarWrapperProps = {
  placeTop: boolean;
  isError?: boolean;
};
export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  ${(props) => css`
    border-radius: 0.75rem;
    border-width: 1px;
    border-style: solid;
    border-color: var(--input-border-color);
    box-shadow: var(--input-box-shadow);
    background-color: var(--input-focused-bg);
    margin: -1px 0;
    z-index: 100;
    ${props.isError &&
    css`
      border-color: var(--input-border-color-error);
      box-shadow: var(--input-box-shadow-error);
    `}
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
};
export const CalendarContainer = styled.div<CalendarContainerProps>`
  ${(props) => css`
    position: relative;
    padding: 1.5rem;
    &:after {
      content: '';
      position: absolute;
      height: 0.25rem;
      width: ${props.inputWidth}px;
      background-color: var(--mask-divider-color);
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

export const DefaultYearSelect = styled(CustomSelect)``;
export const SmallYearSelect = styled(SmallSelect)``;

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
      box-shadow: -1.125rem 0 0 0 var(--range-bg-color) inset;
    `}
    ${props.isEndDate &&
    css`
      box-shadow: 1.125rem 0 0 0 var(--range-bg-color) inset;
    `}
    ${props.isStartDate &&
    props.isEndDate &&
    css`
      box-shadow: none !important;
    `}
    ${props.isInRange &&
    css`
      background-color: var(--range-bg-color);
      color: var(--range-font-color);
    `}
      ${props.isInSelectingRange &&
    css`
      background-color: var(--range-bg-color);
      color: var(--range-font-color);
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
