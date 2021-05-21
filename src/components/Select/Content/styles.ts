import styled from 'styled-components';

interface ISearchProps {
  searchStatus: boolean;
}

export const Container = styled.div`
  background-color: #f7f6f4;
  border: 0px;
  filter: drop-shadow(2px 2px 0px #00e394);
  border-radius: 0px 0px 12px 12px;
  color: #6d6d6d;
  font-weight: normal;
  max-width: 100%;
  min-height: 20rem;
  outline: none;
  padding: 1rem 0rem 0rem;
`;

export const ContainerSearch = styled.div`
  width: 49.6%;
  margin: 0px 0px 2rem 1rem;
  position: relative;
  border: 1px solid rgba(20, 20, 20, 0.3);
  border-radius: 12px;

  &.active {
    border: 1px solid rgba(20, 20, 20, 0.7);
  }
`;

export const Search = styled.input`
  width: 100%;
  height: 2rem;
  border: transparent;
  padding: 0rem 2.775rem 0rem 1.075rem;
  background: transparent;
  outline: none;
  color: #141414;
  font-size: 0.6875rem;

  &:active,
  &:focus {
    border: transparent;
  }
`;

export const ButtonSearch = styled.button<ISearchProps>`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 32px;
  height: 23px;
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  display: ${(props) => (props.searchStatus ? 'none' : 'block')};

  svg {
    path {
      fill: rgba(0, 0, 0, 0.54);
    }
  }
`;

export const ButtonCancelSearch = styled.button<ISearchProps>`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 32px;
  height: 14px;
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);
  display: ${(props) => (props.searchStatus ? 'block' : 'none')};

  svg {
    path {
      fill: rgba(0, 0, 0, 0.54);
    }
  }
`;

export const ContainerContent = styled.div`
  min-height: 11rem;
  max-height: 19.9rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(20, 20, 20, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: #b3b2b1;
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
  border: 1px solid #00e394;
  border-radius: 12px;
  padding: 0.7rem 1rem;
  font-size: 0.875rem;
  color: #00e394;
  font-weight: bold;
  cursor: pointer;
  margin-right: 17px;
  outline: none;
  font-family: 'Red Hat Text', sans-serif;

  &:disabled {
    color: rgba(20, 20, 20, 0.3);
    border: 1px solid rgba(20, 20, 20, 0.3);
    cursor: default;
  }
`;

export const ButtonConfirm = styled.button`
  background: #00e394;
  border: 1px solid #00e394;
  border-radius: 12px;
  padding: 0.7rem 1rem;
  font-size: 0.875rem;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-right: 20px;
  outline: none;
  font-family: 'Red Hat Text', sans-serif;

  &:disabled {
    color: #f1f1ef;
    background: rgba(20, 20, 20, 0.3);
    border: 1px solid rgba(20, 20, 20, 0.1);
    cursor: default;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 0.875rem;
  color: #141414;
  font-weight: 400;
  text-align: center;
`;
