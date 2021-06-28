import styled from 'styled-components';

export const Slider = styled.div`
  box-sizing: border-box;
  height: 1rem;
  width: 2rem;
  border-radius: 0.5rem;
  background-color: #b9b9b9;
  position: relative;
  transition: background-color 0.2s ease-out;
  > div {
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 100%;
    background-color: white;
    transition: all 0.2s ease-out;
  }
`;

export const Label = styled.label`
	box-sizing: border-box;
	color: #141414;
	font-size: 0.875rem;
	display: inline-flex;
	align-items: center;
	margin-left: 2rem;
	column-gap: 0.5rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	position: relative;
	cursor: pointer;

	input {
		cursor: pointer;
		opacity: 0;
		margin: 0;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	input:checked + ${Slider} {
		background-color: #00e394;
      & > div {
        left: 1.125rem;
      }
    }
	}

  input:disabled + ${Slider} {
    opacity: 0.5;
  }
`;
