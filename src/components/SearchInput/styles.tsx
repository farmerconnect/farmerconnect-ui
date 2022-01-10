import styled from 'styled-components';
import { farmerConnectTheme } from '../Theme';

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const SearchInputWrapper = styled.div`
  color: ${farmerConnectTheme.colors.fc_black_70};
  display: flex;
  position: relative;
  min-width: 10rem;

  > input {
    border: 1px solid ${farmerConnectTheme.colors.fc_black_70};
    width: 100%;
    box-sizing: border-box;
    border-radius: 0.75rem;
    font-size: 0.6875rem;
    background: transparent;
    padding: 0.5rem 1.75rem 0.5rem 0.75rem;
    outline: none;
    color: ${farmerConnectTheme.colors.fc_black_100};
    font-weight: 500;
    font-family: 'Red Hat Text', sans-serif;
    font-style: normal;

    &::placeholder {
      color: ${farmerConnectTheme.colors.fc_black_30};
      font-weight: normal;
    }

    &:focus {
      border: 1px solid ${farmerConnectTheme.colors.fc_black_100};
      font-weight: bold;
    }
  }

  > svg {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
  }

  > button {
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    right: 0.25rem;
    background: transparent;
    border: none;
    outline: none;
    padding: 0rem;
    cursor: pointer;
    transform: translateY(-50%);

    > svg {
      transform: scale(0.6);
    }
  }
`;
