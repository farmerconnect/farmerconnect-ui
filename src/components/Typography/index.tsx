import { StyledComponent } from 'styled-components';
import { ITypographyProps } from './interfaces';
import * as S from './styles';

const DEFAULT_VARIANT: Exclude<ITypographyProps['variant'], undefined> = 'body';

const Typography: React.FC<ITypographyProps> = ({ tagName, ...props }: ITypographyProps) => {
  const Variant = S[props.variant ?? DEFAULT_VARIANT] as StyledComponent<
    Exclude<ITypographyProps['tagName'], undefined>,
    any,
    ITypographyProps,
    never
  >;

  return (
    <Variant {...props} as={tagName}>
      {props.children}
    </Variant>
  );
};

export default Typography;
export type { ITypographyProps } from './interfaces';
