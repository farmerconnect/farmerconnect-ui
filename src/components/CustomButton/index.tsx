import React from 'react';
import * as S from './styles';

const RawText: React.FC<{ text: string; iconOnly?: boolean }> = ({ text, iconOnly }) =>
  !iconOnly ? <span className="fc-button__raw-text">{text}</span> : null;

const CustomButton: React.FC<S.ButtonProps> = ({ children, variant, ...props }) => {
  const { iconOnly } = props;

  const safeChildren = React.Children.toArray(children);

  if (variant === 'cancel') {
    // eslint-disable-next-line no-console
    console.warn('CustomButton variant=cancel is deprecated, please use variant=link instead.');
    variant = 'link';
  }

  return (
    <S.Button {...props} variant={variant}>
      {safeChildren.map((child, i) => {
        if (typeof child === 'string') return <RawText key={`${typeof child}-${i}`} text={child} iconOnly={iconOnly} />;
        if (variant === 'link') {
          // eslint-disable-next-line no-console
          console.warn('CustomButton variant=link does not support children nodes that are not text.');
          return null;
        }
        return <React.Fragment key={`${typeof child}-${i}`}>{child}</React.Fragment>;
      })}
    </S.Button>
  );
};

export default CustomButton;
