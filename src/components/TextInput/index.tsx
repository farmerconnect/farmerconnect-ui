import React, { useState } from "react";
import { ITextInputProps } from "./interfaces";
import { TextInputContainer, TextInputField } from "./styles";
import IconCheck from "../Icons/Check";
import IconWarning from "../Icons/Warning";

const TextInput: React.FC<ITextInputProps> = ({
  id,
  classes,
  placeHolder,
  value,
  onChange
}) => {

  const [inputValue, setInputValue] = useState<string>("");
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [validInput, setValidInput] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputValue(value);
  };
  const handleOnFocus = () => {
    setFocusInput(true);
  };
  const handleOnBlur = () => {
    setFocusInput(false);
    validateInput(inputValue);
  };
  const validateInput = (value: string) => {
    if (value.length > 3 && value.length <= 100) {
      setValidInput(true);
      onChange(value, true);
    } else {
      setValidInput(false);
      onChange(value, false);
    }
  };


  return (
    <TextInputContainer
      className={`${focusInput ? "focus" : ""} ${
      !validInput && inputValue.length > 0 && !focusInput
      ? "error"
      : ""
      }`}
    >
      <TextInputField
        onChange={(e) => handleInputChange(e)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        placeholder={`${placeHolder ? placeHolder : ""}`}
        className={`${classes ? classes : ""}`}
        id={`${id ? id : ""}`}
        value={value}
        data-cy="report-name-input"
      ></TextInputField>
      {
        validInput && !focusInput && <IconCheck className='checkInput' />
      }
      {
        !validInput && inputValue.length > 0 && !focusInput && <IconWarning className='checkInput' />
      }
    </TextInputContainer>
  );
};

export default TextInput;