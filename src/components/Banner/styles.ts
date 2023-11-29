import styled from "styled-components";

export const DivBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 50%;
    margin: 0 10px;
    width: 30vw;
    height: 54vh;
    background-color: #9b9b9b;
    border-radius: 15px;

    .nowPlaying {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .nowPlaying h2 {
        position: absolute;
        padding: 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: ${({theme}) => theme.body};
        
    }
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    button {
        position: absolute;
        width: 150px;
        height: 50px;
        top: 50vh;
        border: none;
        border-radius: 10px;
        color: white;
        background-color: #d63837;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            transform: translate(3px, 3px);
            transition: 0.3s;
        }
    }

    @media screen and (max-width: 500px) {
        
        width: 85px;
        height: 300px;

        img {
            width: 200px;
            height: 300px;
        }
        .nowPlaying {
            position: relative;
        }

        .nowPlaying h2 {
            font-size: 14px;
            width: 170px;
        }

        .nowPlaying button {
            top: 230px;
        }
    }


    @media screen and (max-width: 1024px) {
        & img {
            width: auto !important;
        }
    }

    @media screen and (width: 1024px) and (height: 600px) {
        & img {
            width: 100% !important;
        }
    }
`