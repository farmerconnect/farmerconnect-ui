import { FC } from 'react';
import { IInfotipProps } from './interfaces';
import * as S from './styles';

const Infotip: FC<IInfotipProps> = ({ ...props }) => {
  return (
    <S.Wrapper onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick}>
      {props.children}

      {props.active && props.direction === 'top' && <S.TopTip {...props}>{props.content}</S.TopTip>}
      {props.active && props.direction === 'right' && <S.RightTip {...props}>{props.content}</S.RightTip>}
      {props.active && props.direction === 'bottom' && <S.BottomTip {...props}>{props.content}</S.BottomTip>}
      {props.active && props.direction === 'left' && <S.LeftTip {...props}>{props.content}</S.LeftTip>}
    </S.Wrapper>
  );
};
export default Infotip;
