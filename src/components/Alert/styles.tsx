import styled from 'styled-components';
import colors from '../../styles/colors';
import { IAlertProps } from './interfaces';

const colorVariant = {
  warning: {
    background: colors.fc_light_yellow,
    foreground: colors.fc_dark_yellow,
  },
  info: {
    background: colors.fc_light_blue,
    foreground: colors.fc_dark_blue,
  },
  danger: {
    background: colors.fc_light_red,
    foreground: colors.fc_hover_red,
  },
} as const;

export const Container = styled.div<IAlertProps>`
  margin: 0;
  position: relative;
  display: inline-block;
  border-radius: 0.75rem;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  background-color: ${({ variant }) =>
    variant && colorVariant[variant] ? colorVariant[variant].background : colorVariant.warning.background};
  > svg.alert-icon {
    max-height: 1rem;
    width: 1rem;
    color: ${({ variant }) =>
      variant && colorVariant[variant] ? colorVariant[variant].foreground : colorVariant.warning.foreground};
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
