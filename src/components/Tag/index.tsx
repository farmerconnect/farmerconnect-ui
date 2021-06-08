import { ITagProps } from './interfaces';
import { Container } from './styles';

const Tag = ({ children, variant, customStyles, ...props }: ITagProps) => (
  <Container variant={variant} customStyles={customStyles} {...props}>
    {children}
  </Container>
);

Tag.defaultProps = {
  variant: 'primary',
};

export default Tag;
