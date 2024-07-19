import styled from "styled-components";

export const ButtonCarrossel = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 8px;
  margin-right: 20px;
  color: #bf4343;
  background-color: ${({ theme }) => theme.bgButton};
  cursor: pointer;
`;

export const ButtonCarrosselOff = styled.button`
  display: none;
`;
