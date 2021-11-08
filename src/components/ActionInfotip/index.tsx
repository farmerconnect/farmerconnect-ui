import { FC, useEffect, useState } from 'react';
import Infotip from '../Infotip';
import { IActionInfotipProps } from './interfaces';

const ActionInfotip: FC<IActionInfotipProps> = ({
  children,
  hoverContent,
  clickContent,
  messageDuration = 2000,
  position = 'middle',
  direction = 'top',
  arrow = false,
  keepOpen = false
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);
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
      onClick={click}
      arrow={arrow}
    >
      {children}
    </Infotip>
  );
};

export default ActionInfotip;
