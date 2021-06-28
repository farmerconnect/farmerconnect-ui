import React from 'react';
import WarningIcon from '../Icons/Warning';
import CheckIcon from '../Icons/Check';
import { ITextArea } from './interfaces';

import * as S from './styles';

const TextArea = ({ className, error = false, success = false, ...props }: ITextArea) => {
	return (
		<S.Container className={className}>
			<S.TextArea {...props} error={error} success={success} />
			{success && !error && <CheckIcon data-testid="check-icon" />}
			{error && <WarningIcon data-testid="warning-icon" />}
			{error && typeof error === 'string' && <S.ErrorMessage>{error}</S.ErrorMessage>}
		</S.Container>
	);
};

export default TextArea;
