import React, { useState, useRef, useEffect, useMemo } from 'react';
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
	minLength = 0,
	maxLength = 50,
	allowEmptyValue = true,
}: iEditableLabelProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState(secondaryLabel);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClickOutside = () => {
		setIsEditing(false);
		setInputValue(secondaryLabel);
	};

	const handleEditClick = () => {
		setInputValue(secondaryLabel || primaryLabel);
		setIsEditing(true);
	};

	const handleSave = () => {
		setIsEditing(false);
		onSave(inputValue);
	};

	useEffect(() => {
		if (isEditing) inputRef.current?.select();
	}, [isEditing]);

	const shouldDisableSave = useMemo(() => {
		if (allowEmptyValue && !inputValue.length) return false;
		if (!allowEmptyValue && !inputValue.length) return true;
		if (inputValue.length > maxLength) return true;
		if (!allowEmptyValue && inputValue.length < minLength) return true;
		if (allowEmptyValue && inputValue.length && inputValue.length < minLength) return true;
		return false;
	}, [inputValue, allowEmptyValue, maxLength, minLength]);

	return isEditing ? (
		<>
			<S.Overlay onClick={handleClickOutside} aria-hidden="true" data-testid="overlay" />
			<S.Container>
				<form onSubmit={handleSave}>
					<S.Input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				</form>
				<S.SaveButton variant="link" onClick={handleSave} disabled={shouldDisableSave}>
					{text.save}
				</S.SaveButton>
				<S.CancelButton onClick={handleClickOutside} data-testid="cancel-button">
					<CloseIcon />
				</S.CancelButton>
			</S.Container>
		</>
	) : (
		<S.Container>
			<S.StrongLabel>{secondaryLabel}</S.StrongLabel>
			{secondaryLabel ? <S.LightLabel>{primaryLabel}</S.LightLabel> : <S.StrongLabel>{primaryLabel}</S.StrongLabel>}
			{children}
			<S.EditButton variant="text" disabled={disabled} onClick={handleEditClick}>
				{text.edit}
				<EditIcon />
			</S.EditButton>
		</S.Container>
	);
};

export default EditableLabel;
