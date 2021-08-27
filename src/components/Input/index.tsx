import React from 'react';
import WarningIcon from '../Icons/Warning';
import CheckIcon from '../Icons/Check';
import { IInput } from './interfaces';

import * as S from './styles';

const Input = ({
  className,
  helperText,
  error = false,
  success = false,
  disabled = false,
  children,
  ...props
}: IInput) => {
  return (
    <S.Container className={className}>
      <S.Input {...props} error={error} success={success} disabled={disabled} />
      {success && !error && <CheckIcon data-testid="check-icon" />}
      {error && <WarningIcon data-testid="warning-icon" />}
      {error && typeof error === 'string' && <S.HelperText error>{error}</S.HelperText>}
      {!error && helperText && <S.HelperText>{helperText}</S.HelperText>}
      {children}
    </S.Container>
  );
};

export default Input;
