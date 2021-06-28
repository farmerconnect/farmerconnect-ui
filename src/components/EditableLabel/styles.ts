import styled, { keyframes } from 'styled-components';
import CustomButton from '../CustomButton';

const animateInput = keyframes`
0% {
	width: 0;
	opacity: 0;
}
100% {
	width: 100%;
	opacity: 1;
}
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 2rem;
  > form {
    padding: 0;
    margin: 0 1rem 0 0;
    max-width: 12rem;
    animation: ${animateInput} 0.2s ease-out;
  }
`;

export const LightLabel = styled.span`
  font-weight: 400;
  font-size: 0.6875rem;
  color: #b9b9b9;
  text-transform: uppercase;
`;
export const StrongLabel = styled.span`
  font-weight: 700;
  font-size: 0.6875rem;
  color: #141414;
  text-transform: uppercase;
`;

export const EditButton = styled(CustomButton)`
  margin-left: 1rem;
  padding: 0;
  font-size: 0.6875rem;
  gap: 0.125rem;
  > svg {
    width: 1rem;
  }
`;

export const SaveButton = styled(CustomButton)`
  font-size: 0.6875rem;
  margin-right: 1.5rem;
  padding: 0;
`;

export const CancelButton = styled.button`
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0.5625rem;
  border-radius: 0.75rem;
  border: 1px solid #141414;
  font-size: 0.6875rem;
  font-weight: 700;
  outline: none;
  background-color: transparent;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
