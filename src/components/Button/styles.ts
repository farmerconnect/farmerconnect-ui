import styled from 'styled-components';
import { Button, ButtonProps } from './interfaces';

export const buttonDefaultStyles: Button = {
    colors: {
        primary: '#00E394',
        secondary: '#FFFFFF'
    }
}

const Container = styled.button<ButtonProps>`
    background-color: ${(props) => props.backgroundColor || props.theme?.button?.colors?.primary || buttonDefaultStyles.colors.primary};
    border: 0px;
    border-radius: 12px;
    color: ${(props) => props.color || props.theme?.button?.colors?.secondary || buttonDefaultStyles.colors.secondary};
    font-weight: bold;
    max-width: 10rem;
    min-height: 2rem;
    min-width: 7rem;
    padding: 10px 15px 10px 15px;

    ${props => props.customStyles}
`;

export default Container;
