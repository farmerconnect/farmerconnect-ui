import React, { useState, useRef, useEffect } from 'react';
import EditIcon from '../Icons/Edit';
import CloseIcon from '../Icons/Close';
import { IEditColumnNameProps } from './interfaces';
import * as S from './styles';

const defaultText = {
	save: 'Save',
	edit: 'Edit',
};

const EditColumnName = ({
	children,
	onSave = () => {},
	columnFriendlyName = '',
	columnName = '',
	disabled = false,
	text = defaultText,
}: IEditColumnNameProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState(columnFriendlyName);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClickOutside = () => {
		setIsEditing(false);
		setInputValue(columnFriendlyName);
	};

	const handleEditClick = () => {
		setInputValue(columnFriendlyName || columnName);
		setIsEditing(true);
		// setTimeout(() => {
		// 	inputRef.current?.select();
		// }, 100);
	};

	const handleSave = () => {
		if (inputValue.length < 3) return;
		setIsEditing(false);
		onSave(inputValue);
	};

	useEffect(() => {
		if (isEditing) inputRef.current?.select();
	}, [isEditing]);

	return isEditing ? (
		<>
			<S.Overlay onClick={handleClickOutside} aria-hidden="true" data-testid="overlay" />
			<S.Container>
				<form onSubmit={handleSave}>
					<S.Input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				</form>
				<S.SaveButton variant="link" disabled={inputValue.length < 3} onClick={handleSave}>
					{text.save}
				</S.SaveButton>
				<S.CancelButton onClick={handleClickOutside} data-testid="cancel-button">
					<CloseIcon />
				</S.CancelButton>
			</S.Container>
		</>
	) : (
		<S.Container>
			<S.FriendlyName>{columnFriendlyName}</S.FriendlyName>
			<S.Name>{columnName}</S.Name>
			{children}
			<S.EditButton variant="text" disabled={disabled} onClick={handleEditClick}>
				{text.edit}
				<EditIcon />
			</S.EditButton>
		</S.Container>
	);
};

export default EditColumnName;
