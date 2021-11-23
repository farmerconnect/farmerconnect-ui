import * as S from './styles';

const RawText: React.FC<{ text: string }> = ({ text }) => <span className="fc-button__raw-text">{text}</span>;

const CustomButton: React.FC<S.ButtonProps> = ({ children, ...props }) => {
  const { variant } = props;

  const childrenClone = (() => {
    if (Array.isArray(children))
      return children.map((child) => (typeof child === 'string' ? <RawText text={child} /> : child));

    if (typeof children === 'string') return <RawText text={children} />;

    return children;
  })();

  // eslint-disable-next-line no-console
  if (variant === 'cancel') console.warn('CustomButton variant=cancel is deprecated, please use variant=link instead.');

  return <S.Button {...props}>{childrenClone}</S.Button>;
};

export default CustomButton;
