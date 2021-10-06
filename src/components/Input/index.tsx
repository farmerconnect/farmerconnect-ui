import React from 'react';
import { IInput } from './interfaces';

import * as S from './styles';

const Input = ({
  className,
  helperText,
  error = false,
  success = false,
  disabled = false,
  unit = '',
  children,
  ...props
}: IInput) => {
  return (
    <S.Container className={className}>
      <S.Input {...props} error={error} success={success} disabled={disabled} unit={unit} />
      {success && !error && <S.Check data-testid="check-icon" unit={unit} />}
      {error && <S.Warning data-testid="warning-icon" unit={unit} />}
      {error && typeof error === 'string' && <S.HelperText error>{error}</S.HelperText>}
      {!error && helperText && <S.HelperText>{helperText}</S.HelperText>}
      {unit && <S.Unit>{unit}</S.Unit>}
      {children}
    </S.Container>
  );
};

export default Input;
