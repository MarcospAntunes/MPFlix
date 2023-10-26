import styled from "styled-components";

export const MenuStyled = styled.menu`
    position: fixed;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    height: 100%;
    padding: 15px 0px 0px 15px;
    margin-right: 15px;
    background-color: #363636;
    font-size: 18px;
    z-index: 1;
    list-style: none;

    .userPerfil {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
    }


    .userPerfil figcaption {
        margin-left: 10px;
    }

    .userPerfil figcaption span {
        font-size: 14px;
        color: #9b9b9b;
    }

    .userPhoto {
        width: 50px;
        height: 50px;
        border: 2px solid #bf4343;
        background-color: #9b9b9b;
        border-radius: 50%;
    }

    .userPerfil svg {
        margin: auto;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    nav {
        display: flex;
        flex-direction: column;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin-top: 15px;
        width: 100%;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        padding: 10px;
    }

    .icons {
        width: 32px;
        height: 32px;
        margin-right: 20px;
        vertical-align: middle;
        color: #9b9b9b;
    }

    .active {
        color: #bf4343;
        background-color: #303030;
    }

    .active .icons {
        color: #bf4343;
    }

    @media screen and (max-width: 500px) {
        & {
            display: none;
        }
    }
    
`