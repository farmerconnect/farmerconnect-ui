import { FC } from 'react';
import { IInfotipProps } from './interfaces';
import * as S from './styles';

const Infotip: FC<IInfotipProps> = ({
  active,
  color = '#F3F3F3', 
  backgroundColor = '#192C28',
  arrow = true,
  direction,
  content,
  position = 'middle',
  children,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onClick = () => {},
  ...props 
}) => {
  return (
    <S.Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      {children}
      
      {active && direction === 'top' && (
        <S.TopTip backgroundColor={backgroundColor} color={color} arrow={arrow} position={position}>
          {content}
        </S.TopTip>
      )}
      {active && direction === 'right' && (
        <S.RightTip backgroundColor={backgroundColor} color={color} arrow={arrow} position={position}>
          {content}
        </S.RightTip>
      )}
      {active && direction === 'bottom' && (
        <S.BottomTip backgroundColor={backgroundColor} color={color} arrow={arrow} position={position}>
          {content}
        </S.BottomTip>
      )}
      {active && direction === 'left' && (
        <S.LeftTip backgroundColor={backgroundColor} color={color} arrow={arrow} position={position}>
          {content}
        </S.LeftTip>
      )}
    </S.Wrapper>
  );
};
export default Infotip;
