import styled from 'styled-components';
import { farmerConnectTheme } from '../Theme';
import { IProgressBar, IProgressBarContainer } from './interfaces';

const defaultTrackHeight = 4;
const defaultTrackColor = farmerConnectTheme.colors.fc_black_5;
const defaultBackgroundColor = farmerConnectTheme.colors.fc_green;

export const Container = styled.div<IProgressBarContainer>`
  height: ${({ height }) => (!!height ? height : defaultTrackHeight)}px;
  width: 100%;
  background-color: ${({ trackColor }) => (!!trackColor ? farmerConnectTheme.colors[trackColor] : defaultTrackColor)};
  border-radius: 7px;
`;

export const Filler = styled.div<IProgressBar>`
  height: 100%;
  width: ${props => props.completed}%;
  background-color: ${({ backgroundColor }) => (!!backgroundColor ? farmerConnectTheme.colors[backgroundColor] : defaultBackgroundColor)};;
  border-radius: inherit;
`;