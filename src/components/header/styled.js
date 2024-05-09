import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 25px;
  width: calc(100%-20px);
  align-items:center;
  height:80px;
  padding: 5px 50px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1)
`;

export const SpanButton = styled.div`
  cursor: pointer;
  border-radius: 20px;
  padding: 10px 25px;
  width:50px;
  text-align:center;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 5px;
  background-color: black;
  color: white;
  box-shadow: 0 5px 5px rgba(0,0,0,0.1);
  &:hover {
    background-color: #c9c9c9;
  }
`;
