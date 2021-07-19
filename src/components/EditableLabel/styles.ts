import styled, { css, keyframes } from 'styled-components';
import CustomButton from '../CustomButton';
import DefaultInput from '../Input';

const animateInput = keyframes`
0% {
	opacity: 0;
}
100% {
	opacity: 1;
}
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 2rem;
  padding-right: 0.875rem;
  > form {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    animation: ${animateInput} 0.5s ease-out;
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
  margin: 0 1.5rem 0 1rem;
  padding: 0;
`;

export const ErrorMessage = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  margin: 0 1rem 0 0.75rem;
  padding: 0;
  color: #fb2e4c;
  min-width: 10rem;
  text-transform: none;
  white-space: normal;
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

export const Input = styled(DefaultInput)`
  width: 12rem;
  box-sizing: border-box;
  > svg {
    height: 1.0625rem;
    width: 1.0625rem;
    right: 0.6825rem;
  }
  > input {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid #141414;
    font-size: 0.6875rem;
    font-weight: 700;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    ${(props) =>
      props.error
        ? css`
            border-color: #fb2e4c;
            padding-right: 2.25rem;
          `
        : ''}
    &:focus {
      box-shadow: none;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
