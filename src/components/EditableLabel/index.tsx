import React, { useState, useRef, useEffect, useMemo, FormEventHandler } from 'react';
import EditIcon from '../Icons/Edit';
import CloseIcon from '../Icons/Close';
import { iEditableLabelProps } from './interfaces';
import * as S from './styles';

const defaultText = {
  save: 'Save',
  edit: 'Edit',
};

const EditableLabel = ({
  children,
  onSave = () => {},
  secondaryLabel = '',
  primaryLabel = '',
  disabled = false,
  text = defaultText,
  allowEmptyValue = true,
  validate = (s: string) => false,
}: iEditableLabelProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(secondaryLabel);
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLFormElement>(null);

  const handleClickOutside = () => {
    setIsEditing(false);
    setInputValue(secondaryLabel);
  };

  const handleEditClick = () => {
    setInputValue(secondaryLabel || primaryLabel);
    setTouched(false);
    setIsEditing(true);
  };

  const handleSave: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (allowEmptyValue && !inputValue) {
      setIsEditing(false);
      setTouched(false);
      return;
    }
    if (!error) {
      onSave(inputValue.trim());
      setTouched(false);
      setIsEditing(false);
    } else {
      setTouched(true);
    }
  };

  useEffect(() => {
    if (isEditing) (inputRef!.current!.firstChild!.firstChild! as HTMLInputElement).select();
  }, [isEditing]);

  const error = useMemo(() => validate(inputValue.trim()), [inputValue, validate]);

  return isEditing ? (
    <>
      <S.Overlay onClick={handleClickOutside} aria-hidden="true" data-testid="overlay" />
      <S.Container>
        <form onSubmit={handleSave} ref={inputRef} id="editable-label-form">
          <S.Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            data-cy={`input-edit-label-${primaryLabel}`}
            error={allowEmptyValue && !inputValue ? false : touched && !!error}
          />
        </form>
        {allowEmptyValue && !inputValue ? null : !!error && touched ? (
          <S.ErrorMessage role="alert">{error}</S.ErrorMessage>
        ) : null}
        {(allowEmptyValue && !inputValue) || !(!!error && touched) ? (
          <S.SaveButton
            variant="link"
            type="submit"
            form="editable-label-form"
            data-cy={`button-save-label-${primaryLabel}`}
          >
            {text.save}
          </S.SaveButton>
        ) : null}
        <S.CancelButton onClick={handleClickOutside} data-testid="cancel-button">
          <CloseIcon />
        </S.CancelButton>
      </S.Container>
    </>
  ) : (
    <S.Container>
      <S.StrongLabel>{secondaryLabel}</S.StrongLabel>
      {secondaryLabel ? <S.LightLabel>({primaryLabel})</S.LightLabel> : <S.StrongLabel>{primaryLabel}</S.StrongLabel>}
      {children}
      <S.EditButton
        variant="text"
        disabled={disabled}
        onClick={handleEditClick}
        data-cy={`button-edit-label-${primaryLabel}`}
      >
        {text.edit}
        <EditIcon />
      </S.EditButton>
    </S.Container>
  );
};

export default EditableLabel;
