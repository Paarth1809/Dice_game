import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  background-color: black;
  color: white;
  border-radius: 200px;
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  font-size: 16px;

  width: 220px;
  height: 44px;
  cursor: pointer;
  transition: 0.2s background ease-in-out;

  &:hover {
    background-color: white;
    border-color: 1px solid black;
    color: black;
    transition: 0.2s background ease-in-out;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border-color: 1px solid black;
  color: black;

  &:hover {
    background-color: Black;
    border-color: 1px solid transparent;
    color: White;
  }
`;
