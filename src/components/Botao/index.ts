import styled from "styled-components";

const Botao = styled.button`
  width: 100px;
  height: 40px;
  margin: 10px;
  background-color: ${({theme}) => theme.bgButton};
  border-radius: 10px;
  border: none;
  color: ${({theme}) => theme.buttonTextAlternative};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
      transition: 0.3s;
      background-color: rgb(130, 0, 0);
      color: white
  }
`

export { Botao }