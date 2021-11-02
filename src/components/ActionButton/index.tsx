import { FC, ReactNode, useState } from 'react';
import Infotip from '../Infotip';
import { IInfotipProps } from '../Infotip/interfaces';
import { IButtonProps } from '../Button/interfaces';
import { IconWrapper } from './styles';

export interface IActionButtonProps {
  onClick: () => boolean;
  messageDuration: number;
  hoverContent: ReactNode;
  clickContent: ReactNode;
  buttonStyles?: IButtonProps;
  infotipProps?: Partial<IInfotipProps>;
  id?: string;
}

const ActionButton: FC<IActionButtonProps> = ({
  children,
  hoverContent,
  clickContent,
  onClick,
  messageDuration,
  buttonStyles,
  infotipProps,
  ...props
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  function mouseLeave() {
    if (clicked) {
      setTimer(
        setTimeout(() => {
          setActive(false);
          setClicked(false);
        }, messageDuration)
      );
    } else {
      setActive(false);
    }
  }

  function mouseEnter() {
    setActive(true);
    if (clicked) {
      timer && clearTimeout(timer);
    }
  }

  function click() {
    onClick() && setClicked(true);
  }

  return (
    <div {...props}>
      <Infotip
        position={'middle'}
        direction={'top'}
        {...infotipProps}
        content={clicked ? clickContent : hoverContent}
        active={active}
        onMouseLeave={mouseLeave}
        onMouseEnter={mouseEnter}
      >
      <IconWrapper
        onClick={click}
        variant="outline"
        {...buttonStyles}
      >
        {children}
        </IconWrapper>
      </Infotip>
    </div>
  );
};

export default ActionButton;
