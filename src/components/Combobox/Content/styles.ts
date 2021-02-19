import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F7F6F4;
    border: 0px;
    filter: drop-shadow(1px 1px 0px #00E394);
    border-radius: 0px 0px 12px 12px;
    color: #6D6D6D;
    font-weight: normal;
    max-width: 100%;
    min-height: 2.5rem;
    max-height: 331px;
    outline: none;
    padding: 1rem 0rem 1rem;
`;

export const ContainerSearch = styled.div`
    width: 46%;
    margin: 0px 0px 2rem 1rem;
    position: relative;
`;

export const Search = styled.input`
    width: 100%;
    height: 2rem;
    border: 1px solid rgba(20, 20, 20, 0.3);
    border-radius: 12px;
    padding: 0.3rem 0.875rem;
    background: #F7F6F4;
    outline: none;
    color: #141414;

    &:active,
    &:focus {
        border: 1px solid rgba(20, 20, 20, 0.7);
    }
`;

export const ButtonSearch = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 32px;
    height: 23px;
    position: absolute;
    top: 12px;
    right: 0px;

    svg {
        path {
            fill: rgba(0, 0, 0, 0.54);
        }
    }
`;

export const ButtonCancelSearch = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 32px;
    height: 14px;
    position: absolute;
    top: 15px;
    right: 0px;
    display: none;

    svg {
        path {
            fill: rgba(0, 0, 0, 0.54);
        }
    }
`;

export const ContainerContent = styled.div`
    height: 12.9rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(20, 20, 20, 0.1);
    }

    &::-webkit-scrollbar-thumb {
        background: #B3B2B1;
        border-radius: 6px;
    }
`;

export const ContainerButtons = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ButtonClear = styled.button`
    background: transparent;
    border: 1px solid #00E394;
    border-radius: 12px;
    padding: 10px 16px;
    font-size: .875rem;
    color: #00E394;
    font-weight: bold;
    cursor: pointer;
    margin-right: 17px;
    outline: none;

    &:disabled {
        color: rgba(20, 20, 20, 0.3);
        border: 1px solid rgba(20, 20, 20, 0.3);
        cursor: default;
    }
`;

export const ButtonConfirm = styled.button`
    background: #00E394;
    border: none;
    border-radius: 12px;
    padding: 10px 16px;
    font-size: .875rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-right: 20px;
    outline: none;

    &:disabled {
        color: #F1F1EF;
        background: rgba(20, 20, 20, 0.3);
        cursor: default;
    }
`;