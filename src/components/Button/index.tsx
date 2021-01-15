import React from 'react';
import { IButtonProps } from './interfaces';
import Container from './styles';

const Button: React.FC<IButtonProps> = ({
    backgroundColor,
    color,
    customStyles,
    onClick,
    children
}) => <Container backgroundColor={backgroundColor} color={color} onClick={onClick} customStyles={customStyles}>{children}</Container>;

export default Button;
