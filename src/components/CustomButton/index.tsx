import React from 'react';
import * as S from './styles';

const RawText: React.FC<{ text: string; iconOnly?: boolean }> = ({ text, iconOnly }) =>
  !iconOnly ? <span className="fc-button__raw-text">{text}</span> : null;

const CustomButton: React.FC<S.ButtonProps> = ({ children, ...props }) => {
  const { variant, iconOnly } = props;

  const childrenClone = (() => {
    if (typeof children === 'string') return <RawText text={children} iconOnly={iconOnly} />;

    if (Array.isArray(children)) {
      return children.map((child, i) =>
        typeof child === 'string' ? (
          <RawText key={`${typeof child}-${i}`} text={child} iconOnly={iconOnly} />
        ) : (
          <React.Fragment key={`${typeof child}-${i}`}>{child}</React.Fragment>
        )
      );
    }

    return children;
  })();

  // eslint-disable-next-line no-console
  if (variant === 'cancel') console.warn('CustomButton variant=cancel is deprecated, please use variant=link instead.');

  return <S.Button {...props}>{childrenClone}</S.Button>;
};

export default CustomButton;
