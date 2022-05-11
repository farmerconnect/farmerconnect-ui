import { FC } from 'react';
import { IInfotipProps } from './interfaces';
import * as S from './styles';

const tipDirectionMap = {
  top: S.TopTip,
  right: S.RightTip,
  bottom: S.BottomTip,
  left: S.LeftTip,
};

const Infotip: FC<IInfotipProps> = ({
  active,
  color = '#F3F3F3',
  backgroundColor = '#192C28',
  arrow = true,
  direction,
  content,
  position = 'middle',
  children,
  ...props
}) => {
  const Tip = tipDirectionMap[direction];

  return (
    <S.Wrapper {...props}>
      {children}

      {active && (
        <Tip backgroundColor={backgroundColor} fontColor={color} arrow={arrow} position={position}>
          {content}
        </Tip>
      )}
    </S.Wrapper>
  );
};
export default Infotip;
