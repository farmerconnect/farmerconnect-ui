import styled from 'styled-components';
import { ICombo } from '../interfaces';

export const Container = styled.div<ICombo>`
    background-color: ${(props) => props.disabled ? '#B3B2B1' : '#F7F6F4'};
    border: 0px;
    border-radius: ${(props) => props.open ? '0px 12px 0px 0px' : '0px 12px 12px 0px' };
    color: ${(props) => props.disabled ? '#141414' : '#6D6D6D'};
    cursor: pointer;
    font-weight: normal;
    min-height: 2.5rem;
    outline: none;
    padding: 0rem 1.1rem;
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    
    &.first {
        border-radius: ${(props) => props.open ? '12px 0px 0px 0px' : '12px 0px 0px 12px' };
    }
`;

export const Icon = styled.div`
    svg {
        fill: #6D6D6D;
    }
`;

