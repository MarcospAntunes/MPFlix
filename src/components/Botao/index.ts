import styled from "styled-components";

const Botao = styled.button`
    width: 100px;
    height: 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: none;
    color: black;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translate(3px, 3px);
        transition: 0.3s;
        background-color: rgb(130, 0, 0);
        color: white
    }
`

export { Botao }