import React from 'react';
import colors from '../../styles/colors';
import { IInput } from './interfaces';

import * as S from './styles';

const Input = React.forwardRef<HTMLInputElement, IInput>(({
  className,
  helperText,
  error = false,
  success = false,
  disabled = false,
  unit = '',
  children,
  ...props
}: IInput, ref) => {
  return (
    <S.Container className={className}>
      <S.Input {...props} error={error} success={success} disabled={disabled} unit={unit} ref={ref} />
      {success && !error && <S.Check data-testid="check-icon" unit={unit} fill={colors.fc_green} />}
      {error && <S.Warning data-testid="warning-icon" unit={unit} fill={colors.fc_red} />}
      {error && typeof error === 'string' && <S.HelperText error>{error}</S.HelperText>}
      {!error && helperText && <S.HelperText>{helperText}</S.HelperText>}
      {unit && <S.Unit>{unit}</S.Unit>}
      {children}
    </S.Container>
  );
});

export default Input;
