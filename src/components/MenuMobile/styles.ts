import styled, { css } from "styled-components"

interface MenuMobileStyledProps {
    isvisible: string | undefined
}

export const MenuMobileStyled = styled.menu<MenuMobileStyledProps>`
    position: fixed;
    width: 250px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    list-style: none;
    z-index: 5;
    display: flex;
    flex-direction: column;
    padding: 15px 0px 0px 15px;
    background-color: #363636;
    font-size: 18px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    transform: translateX(-50px);
    ${({ isvisible }: any)  => isvisible && css`
        opacity: 1;
        pointer-events: auto;
        transition: 0.3s;
        transform: translateX(0px);
    `}

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
    
`