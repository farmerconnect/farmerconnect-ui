import React from 'react';
import { ITagProps, TagVariantEnum } from './interfaces';
import { Container } from './styles';

const Tag: React.FC<ITagProps> = ({ children, variant, customStyles, ...props }) => (
  <Container variant={variant} customStyles={customStyles} {...props}>
    {children}
  </Container>
);

Tag.defaultProps = {
  variant: TagVariantEnum.PRIMARY,
};

export default Tag;
