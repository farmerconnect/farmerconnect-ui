import * as S from './styles';

const CustomButton: React.FC<S.ButtonProps> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default CustomButton;
