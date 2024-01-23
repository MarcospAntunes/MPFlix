import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    max-height: 600px;
    border-radius: 15px;
    background-color: ${({theme}) => theme.div};

    @media screen and (max-width: 540px) {
        max-width: 300px;
        max-height: 520px;
    }
`

export const FormStyled = styled.form`
    padding: 50px;
    margin: 100%;
    h1 {
        text-align: center;
        margin: 5px 0;
    }

    label {
        margin: 10px;
    }

    input[type='submit'] {
        max-width: 150px;
        background-color: ${({theme}) => theme.bgButton};
        border-radius: 15px;
        border: none;
        color: ${({theme}) => theme.buttonTextAlternative};
        cursor: pointer;
        transition: 0.3s;
        margin: 10px 20%;

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

    @media screen and (max-width: 540px) {
        h1 {
            font-size: 28px;
        }

        input[type='submit'] {
            max-width: 100px;
            margin: 10px 30%;
        }

        p, a {
            text-align: center;
            font-size: 14px;
        }
    }

`