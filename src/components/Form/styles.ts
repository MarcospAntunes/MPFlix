import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 500px;
    border-radius: 15px;
    background-color: #363636;

    input[type='submit'] {
        width: 150px;
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
        border: none;
        color: black;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transition: 0.3s;
            background-color: rgb(130, 0, 0);
            color: white
        }
    }

    p {
        margin: 20px 0;
    }

    a {
        text-decoration: none;
        color: #407299;
    }

`