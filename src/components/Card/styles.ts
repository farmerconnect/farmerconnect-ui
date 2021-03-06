import styled from 'styled-components';
import Button from '../CustomButton';
import { farmerConnectTheme } from '../Theme';

export const Heading = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

export const CollapseButtonContainer = styled.div`
  display: flex;
  padding-top: 16px;
`;

export const CardControls = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
`;

type ContainerProps = {
  isOpen: boolean;
  type: 'Default' | 'Main';
};
export const Container = styled.div<ContainerProps>`
  position: relative;
  background-color: ${farmerConnectTheme.colors.fc_black_5};
  border-radius: 0.75rem;
  padding: ${(props) => (props.type === 'Main' ? '2rem' : '1.5rem')};
  > ${Heading} {
    font-size: ${(props) => (props.type === 'Main' ? '2.125rem' : '1.063rem')};
    margin-bottom: ${(props) => (props.type === 'Main' ? '1.5rem' : '1rem')};
  }
  > ${CollapseButtonContainer} {
    margin-bottom: ${(props) => (props.type === 'Main' ? '-1rem;' : '-0.5rem')};
  }
`;

export const SeeMoreButton = styled(Button)`
  gap: 0.25rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;
