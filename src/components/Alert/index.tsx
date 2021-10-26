import React from 'react';
import * as Icon from '../Icons';
import { IAlertProps } from './interfaces';
import * as S from './styles';

const icon = {
  danger: <Icon.Warning className="alert-icon" />,
  info: <Icon.Information className="alert-icon" />,
  warning: <Icon.Alert className="alert-icon" />,
};

export default function Alert(props: IAlertProps) {
  return (
    <S.Container variant={props.variant} role="alert" {...props}>
      {props.variant ? icon[props.variant] : icon.warning}
      {props.children}
    </S.Container>
  );
}
