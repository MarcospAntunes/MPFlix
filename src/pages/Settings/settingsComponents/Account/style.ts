import styled from "styled-components";

export const AccountMenuStyled = styled.menu`
    width: 50%;
    list-style: none;
    
    & > li {
        border-bottom: 1px solid #303030;
        width: 100%;
        margin: 20px 0;
        padding: 10px;
        
    }

    & span {
        margin: 10px;
    }

    & > li > * {
        margin-left: 50px;
    }

    & > li > h2{
        text-align: left;
        margin-bottom: 15px;
        margin-left: 0;
        text-indent: 0;
    }

    .containerInput {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .containerPhotoUser {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;

        #userPhoto {
            width: 150px;
            height: 100px;
            margin: 10px;
            margin-left: calc(50% - 400px);
        }
        button {
            margin-left: calc(50% - 400px);
            width: 150px;
        }

        p {
            margin-left: calc(50% - 400px);
        }
    }

    .editButton {
        width: 34px;
        height: 34px;
        margin-left: 5px;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }

    .editButton:hover {
        color: #bf4343;
        transition: 0.3s;
    }

    & input[type="submit"] {
        width: 100px;
        height: 40px;
        margin: 10px;
        margin-left: calc(50% - 100px);
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
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

    & input[type="file"] {
        display: none;
        
    }

    & #labelArchive {
        height: 40px;
        margin: 10px;
        margin-left: calc(50% - 400px);
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        border: none;
        color: black;
        cursor: pointer;
        transition: 0.3s;
        padding: 10px;

        &:hover {
        transition: 0.3s;
        background-color: rgb(130, 0, 0);
        color: white
    }
    }

    & button {
        margin-left: calc(50% - 100px);
    }

    & #attention {
        margin-top: 15px;
        color: #bf4343;
    }



`