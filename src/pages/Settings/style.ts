import styled from "styled-components";

export const SettingsContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 97vw;
    height: 97vh;
    margin: 10px auto;
    padding: 10px;
    background-color: #363636;
    border-radius: 15px;

    .configMenu {
        width: 30%;
        height: 100%;
        list-style: none;
        border-right: 1px solid #303030;
    }

    .configMenu > svg {
        width: 44px;
        height: 44px;
        margin-bottom: 20px;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }

    .configMenu > svg:hover {
        color: #bf4343;
        transition: 0.3s;
    }

    .configMenu > li {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        margin-top: 15px;
        width: 98%;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        background-color: #303030;
        padding: 10px;
        cursor: pointer;
    }

    .configMenu > li > svg {
        color: #bf4343;
    }

    .configWindow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 30%);
        height: 100%;
    }

    @media screen and (max-width: 500px) {
        justify-content: start;
        align-items: start;
        height: 100%;

        .configMenu {
            height: 100vh;
        }
        
        .configWindow {
            align-items: start;
        }
    }

`   