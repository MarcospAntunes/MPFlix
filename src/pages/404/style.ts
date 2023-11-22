import styled from "styled-components";

export const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};

    h1, p {
        text-align: center;
    }

    p {
        margin-top: 10px;
        width: 500px;
    }
`