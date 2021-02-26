import styled from 'styled-components';


export const Container = styled.div`
`;

export const ContainerCombo = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    .comboDivider {
        width: 1px;
        height: 100%;
        background: #B9B9B9;
        position: absolute;
        top: 0px;
        left: 50%;

        &.open {
            background: #00E394;
        }
    }
`;