import styled from 'styled-components';
import { IComboTheme } from './interfaces';

export const comboBoxDefaultStyles: IComboTheme = {
    colors: {
        primary: 'rgba(112, 163, 140, 0.2)',
        secondary: '#141414',
        tertiary: 'rgba(20, 20, 20, 0.3)'
    }
  }


export const Container = styled.div`
`;

export const ContainerCombo = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    .comboDivider {
        width: 1px;
        height: auto;
        background: #B9B9B9;

        &.open {
            background: #00E394;
        }
    }
`;