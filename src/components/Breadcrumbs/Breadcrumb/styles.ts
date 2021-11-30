import styled from 'styled-components';
import CustomButton from '../../CustomButton';
import { farmerConnectTheme } from '../../Theme';

const fontFamily = `font-family: 'Red Hat Text', sans-serif;`;

export const Text = styled.span`
  ${fontFamily}
  color: ${farmerConnectTheme.colors.fc_black_100};
  font-size: 0.875rem;
  font-weight: 400;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  ${CustomButton} {
    gap: 0.25rem;
    padding: 0.625rem 0;
  }

  ${Text} {
    padding: 0.625rem 0;
  }
`;
