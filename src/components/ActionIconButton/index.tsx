import { FC, useEffect, useState } from 'react';
import Infotip from '../Infotip';
import { IActionIconButtonProps } from './interfaces';
import * as S from './styles';

const ActionIconButton: FC<IActionIconButtonProps> = ({
  children,
  hoverContent,
  clickContent,
  onClick,
  messageDuration = 2000,
  position = 'middle',
  direction = 'top',
  arrow = false,
  keepOpen = false
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [hovering, setHovering ] = useState<boolean>(false);
  const [lock, setLock] = useState<boolean>(false);
  const [lockTimeout, setLocktimeout] = useState<ReturnType<typeof setTimeout>>();

  function mouseEnter() {
    setHovering(true);
    setActive(true);
  }

  function mouseLeave() {
    setHovering(false);
    if (!lock) {
      setClicked(false);
      setActive(false);
    }
  }

  useEffect(() => {
    if (!lock) {
      if (!hovering || !keepOpen) {
        setClicked(false);
        setActive(false);
      }
    }
  }, [lock]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => lockTimeout && clearTimeout(lockTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function click() {
    onClick();
    setClicked(true);
    setLock(true);
    setLocktimeout(
      setTimeout(() => {
        setLock(false);
      }, messageDuration)
    );
  }

  return (
      <Infotip
        content={clicked ? clickContent : hoverContent}
        active={active}
        onMouseLeave={mouseLeave}
        onMouseEnter={mouseEnter}
        position={position}
        direction={direction}
        arrow={arrow}
      >
        <S.ActionIconButton
            variant="outline"
            onClick={click}
        >
          {children}
        </S.ActionIconButton>
      </Infotip>
  );
};

export default ActionIconButton;
