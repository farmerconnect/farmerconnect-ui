import React from 'react';
import { ButtonProps } from './interfaces';
import Container from './styles';

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    color,
    customStyles,
    children
}) => <Container backgroundColor={backgroundColor} color={color} customStyles={customStyles}>{children}</Container>;

export default Button;
