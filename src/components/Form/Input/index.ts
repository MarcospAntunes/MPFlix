import styled from "styled-components";

const InputStyled = styled.input`
    border-radius: 15px;
    border: none;
    margin: 10px 0;
    padding: 10px;
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: 0.3s;
    width: 250px;

    &:hover {
        border: 1px solid red;
        transition: 0.3s;
    }

    &:focus {
        border: 1px solid red;
        outline: none;
        transform: translate(3px, 3px);
        transition: 0.3s;
    }

`


export { InputStyled }