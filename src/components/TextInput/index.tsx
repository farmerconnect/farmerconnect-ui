import React, { useEffect, useState } from 'react';
import { ITextInputProps } from './interfaces';
import { TextInputContainer, TextInputField, ErrorMessage, ContainerInput } from './styles';
import IconCheck from '../Icons/Check';
import IconWarning from '../Icons/Warning';

const TextInput: React.FC<ITextInputProps> = ({
  id,
  classes,
  placeHolder,
  value,
  name,
  onChange,
  validate,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [validInput, setValidInput] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputValue(value);
  };
  const handleOnFocus = () => {
    setFocusInput(true);
  };
  const handleOnBlur = () => {
    setFocusInput(false);
    if (validate) {
      validate(inputValue, setValidInput, onChange, setErrorMessage, name);
    } else {
      validateInput(inputValue);
    }
  };
  const validateInput = (value: string) => {
    if (value?.length > 3 && value?.length <= 100) {
      setValidInput(true);
      onChange(value, true);
    } else {
      setValidInput(false);
      onChange(value, false);
      if (value?.length <= 3) {
        setErrorMessage(`${name} must be over 3 characters`);
        return;
      }
      setErrorMessage(`${name} must be under 100 characters`);
    }
  };

  useEffect(() => {
    setInputValue(value);
    if (validate) {
      validate(value, setValidInput, onChange, setErrorMessage, name);
    } else {
      validateInput(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <ContainerInput>
      <TextInputContainer
        className={`${focusInput ? 'focus' : ''} ${
          !validInput && inputValue?.length > 0 && !focusInput ? 'error' : ''
        }`}
      >
        <TextInputField
          onChange={(e) => handleInputChange(e)}
          onFocus={() => handleOnFocus()}
          onBlur={() => handleOnBlur()}
          placeholder={`${placeHolder ? placeHolder : ''}`}
          className={`${classes ? classes : ''}`}
          id={`${id ? id : ''}`}
          value={inputValue}
          {...props}
        ></TextInputField>
        {validInput && !focusInput && <IconCheck className="checkInput" />}
        {!validInput && inputValue?.length > 0 && !focusInput && <IconWarning className="checkInput" />}
      </TextInputContainer>
      {!validInput && inputValue?.length > 0 && !focusInput && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ContainerInput>
  );
};

export default TextInput;
