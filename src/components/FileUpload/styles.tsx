import styled from 'styled-components';
import CustomButton from '../CustomButton';

export const Container = styled.div<any>`
  flex: 1;
  display: flex;
  gap: ${(props) => (props.slim ? '1rem' : '0.5rem')};
  flex-direction: ${(props) => (props.slim ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.slim ? '16px' : '42px')};
  border-width: 1px;
  border-radius: 12px;
  border-color: #00E394;
  border-style: dashed;
  background-color: ${(props) => (props.isDragging ? '#F3F3F3' : '#FFFFFF')};
  color: #5B5B5B;
  outline: none;
  transition: border .24s ease-in-out;
`;

export const Span = styled.span`
  font-size: 11px;
  line-height: 15px;
`;

export const LinkButton = styled(CustomButton)`
  font-size: 11px;
  line-height: 15px;
  color: #141414;

  &:hover:not(:disabled) {
    color: #192c28;
    text-decoration: none;
  }
`;

export const Helper = styled.div`
  font-size: 11px;
  line-height: 15px;
  color: #5B5B5B;
  padding: 0.25rem 1rem 0rem 1rem;
`;