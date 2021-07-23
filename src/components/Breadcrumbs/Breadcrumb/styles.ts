import styled from 'styled-components';
import CustomButton from '../../CustomButton';

const fontFamily = `font-family: 'Red Hat Text', sans-serif;`;
export const Text = styled.span`
  ${fontFamily}
  color: #141414;
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
    padding: 0.625rem 0rem 0.625rem 0.5rem
  }

  ${Text} {
    padding: 0.625rem 0.5rem 0.625rem 0.5rem
  }
`;