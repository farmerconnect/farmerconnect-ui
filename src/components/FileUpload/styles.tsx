import styled from 'styled-components';
import CustomButton from '../CustomButton';

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00E394';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  return '#00E394';
}

const getBackgroundColor = (props: any) => {
  if (props.isDragging) {
    return '#F3F3F3';
  }
  return '#FFFFFF';
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 1px;
  border-radius: 12px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: ${props => getBackgroundColor(props)};
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
  padding: 0.25rem 0rem 0rem 1rem;
`;