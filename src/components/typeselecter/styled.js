import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.div`
  border: ${({ isActive }) => (isActive ? "2px solid #000" : "1px solid #ccc")};
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 100px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#f0f0f0" : "#fff")};
`;