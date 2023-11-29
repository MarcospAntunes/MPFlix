import styled from "styled-components";

export const ContainerCardNowPlaying = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 130px;
        height: 130px;
        border-radius: 15px;
    }

    .conteudo {
        display: flex;
        gap: 10px;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${({theme}) => theme.div};
        }
    }

    .conteudo h3 {
        width: 130px;
    }

    .VotoEData {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 200px;
        margin-top: 20px;
    }

    .voto {
        border: 2px solid #bf4343;
        background-color: ${({theme}) => theme.div};
        border-radius: 50%;
        padding: 5px;
    }

    .dataLancamento {
        color: #9b9b9b;
        font-size: 15px;
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }

`
    