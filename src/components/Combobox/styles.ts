import styled from 'styled-components';
import { IButton, IComboboxProps } from './interfaces';

export const buttonDefaultStyles: IButton = {
    colors: {
        primary: '#00E394',
        secondary: '#FFFFFF',
        tertiary: '#00AF72'
    }
}

export const Container = styled.div<IComboboxProps>`

`;

export const ContainerCombo = styled.div`
    display: flex;
    flex-direction: row;
`;