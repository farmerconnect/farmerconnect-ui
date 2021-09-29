import styled from 'styled-components';
import { IColorSwatch } from '.';
import { farmerConnectTheme } from '../Theme';

export const Container = styled.div<IColorSwatch>`
  background-color: ${(props) => props.color};
  width: 150px;
  height: 150px;
  border: 1px solid black;
`;

export const SwatchLabel = styled.p`
  color: ${farmerConnectTheme.colors.fc_white};
  background-color: ${farmerConnectTheme.colors.fc_black_100};
  padding: 0.1rem;
  width: max-content;
`;

export const ClickToCopy = styled(SwatchLabel)`
  &:hover {
    cursor: pointer;
    background-color: ${farmerConnectTheme.colors.fc_dark_green};
  }
`;
