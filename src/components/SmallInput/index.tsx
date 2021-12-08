import React from 'react';
import { ISmallInput } from './interfaces';
import * as S from './styles';

const InputText = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <S.Input ref={ref} {...props} />;
});

const SmallInput = (props: ISmallInput) => {
  const ref = React.useRef<HTMLInputElement>(null);
  return <InputText {...props} ref={ref} />
}

export default SmallInput;
