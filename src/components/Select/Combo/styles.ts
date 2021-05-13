import styled from 'styled-components';
import { ICombo } from '../interfaces';

export const Container = styled.div<ICombo>`
    background-color: ${(props) => props.disabled ? '#e8e8e8' : '#f7f6f4'};
    border: 0px;
    border-radius: ${(props) => props.open ? '12px 12px 0px 0px' : '12px' };
    color: ${(props) => props.disabled ? '#b9b9b9' : '#6D6D6D'};
    font-weight: normal;
    min-height: 2.5rem;
    outline: none;
    padding: 0rem 1.1rem;
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    filter: ${(props) => props.open ? 'drop-shadow(2px 2px 0px #00e394)' : 'drop-shadow(0px 0px 0px transparent)'};
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
`;

export const Icon = styled.div`
    svg {
        fill: #6D6D6D;
    }

    &.open {
        svg {
            transform: rotate(180deg);
        }
    }
`;

