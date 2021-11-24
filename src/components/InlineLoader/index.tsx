import * as Icon from '../Icons';
import { farmerConnectTheme } from '../Theme';
import { IInlineLoaderProps } from './interfaces';
import * as S from './styles';

const InlineLoader = ({ children, ...props }: IInlineLoaderProps) => (
  <S.Container {...props}>
    {props.error ? (
      <Icon.Error fill={farmerConnectTheme.colors.fc_red} />
    ) : (
      <Icon.Dots fill={farmerConnectTheme.colors.fc_green} animated />
    )}
    {children}
  </S.Container>
);

export default InlineLoader;
