import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  place-content: center;
  grid-gap: 16px;
`;
export const Cell = styled.div`
  border-radius: 8px;
  border: 1px solid lightgray;

  display: grid;
  place-items: center;
  place-content: center;

  height: 100px;
  cursor: pointer;
  &:hover {
    border-color: gray;
  }
  > span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: black;
  }
  > svg {
    width: 48px;
    height: 48px;
    border: 1px dotted;
  }
`;
