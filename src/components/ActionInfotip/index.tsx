import { FC, useEffect, useState } from 'react';
import Infotip from '../Infotip';
import { IActionInfotipProps } from './interfaces';

const ActionInfotip: FC<IActionInfotipProps> = ({
  children,
  disabled = false,
  hoverContent,
  clickContent,
  messageDuration = 2000,
  position = 'middle',
  direction = 'top',
  arrow = false,
  keepOpen = false
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [infotipActive, setInfotipActive] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);
  const [lock, setLock] = useState<boolean>(false);
  const [lockTimeout, setLocktimeout] = useState<ReturnType<typeof setTimeout>>();

  function mouseEnter() {
    setHovering(true);
    setInfotipActive(true);
  }

  function mouseLeave() {
    setHovering(false);
    if (!lock) {
      setClicked(false);
      setInfotipActive(false);
    }
  }

  useEffect(() => {
    if (!lock) {
      if (!hovering || !keepOpen) {
        setClicked(false);
        setInfotipActive(false);
      }
    }
  }, [lock]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => lockTimeout && clearTimeout(lockTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function click() {
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
      active={!disabled && infotipActive}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      position={position}
      direction={direction}
      onClick={click}
      arrow={arrow}
    >
      {children}
    </Infotip>
  );
};

export default ActionInfotip;
