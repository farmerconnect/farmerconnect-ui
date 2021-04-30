import styled from "styled-components";

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 130px);
  grid-gap: 16px;
`;
export const Cell = styled.div`
  border-radius: 8px;
  border: 1px solid lightgray;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  > span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: black;
  }
  > svg {
    width: 100%;
    flex: 1;
  }
`;
