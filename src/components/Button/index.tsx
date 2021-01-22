import React from 'react';
import { IButtonProps } from './interfaces';
import Container from './styles';

const Button: React.FC<IButtonProps> = ({
    backgroundColor,
    color,
    customStyles,
    children,
    ...props
}) => <Container backgroundColor={backgroundColor} color={color} customStyles={customStyles} {...props}>{children}</Container>;

export default Button;
