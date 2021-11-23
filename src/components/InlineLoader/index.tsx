import React from 'react';
import * as Icon from '../Icons';
import { IInlineLoaderProps } from './interfaces';
import * as S from './styles';

const InlineLoader = ({ children, ...props }: IInlineLoaderProps) => {
  return (
    <S.Container {...props}>
      {props.error ? <Icon.Error fill="#FB2E4C" /> : <Icon.Dots fill="#00E394" animated />}
      {children}
    </S.Container>
  );
};

export default InlineLoader;
