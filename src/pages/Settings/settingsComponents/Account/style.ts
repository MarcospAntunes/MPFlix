import styled from "styled-components";

export const AccountMenuStyled = styled.menu`
    list-style: none;
    
    & > li {
        border-bottom: 1px solid ${({theme}) => theme.body};
        width: 100%;
        margin: 20px 0;
        padding: 10px;
        
    }

    & span {
        margin: 10px;
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
        margin-bottom: 30px;
        align-items: center;

        #userPhoto {
            width: 150px;
            height: 100px;
            margin: 10px;
            margin-left: calc(50% - 330px);
        }
        button {
            width: 150px;
            font-size: 14px;
        }

        p {
           margin: auto;
        }

        #ContainerButton {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
            margin-left: calc(50% - 100px);
            font-size: 14px;
            text-align: center;
        }

        input[type="file"] {
            display: none;
        }

        #labelArchive {
            height: 40px;
            margin: 10px;
            
            background-color: ${({theme}) => theme.bgButton};
            border-radius: 10px;
            border: none;
            color: ${({theme}) => theme.buttonTextAlternative};
            cursor: pointer;
            transition: 0.3s;
            padding: 10px;

            &:hover {
            transition: 0.3s;
            background-color: rgb(130, 0, 0);
            color: white
            }
        }
    }

    .editButton {
        width: 34px;
        height: 34px;
        margin-left: 5px;
        color: ${({theme}) => theme.bgButton};
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
        background-color: ${({theme}) => theme.bgButton};
        border-radius: 10px;
        border: none;
        color: ${({theme}) => theme.buttonTextAlternative};
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transition: 0.3s;
            background-color: rgb(130, 0, 0);
            color: ${({theme}) => theme.buttonText};
        }
    }

    & .edit {
        margin-left: calc(50% - 100px);
    }

    & #attention {
        margin-top: 15px;
        color: #bf4343;
    }

    @media screen and (max-width: 500px) {
        width: 90%;

        & > li > * { 
            margin-left: 0;
            text-align: center;
            font-size: 14px;
        }

        input {
            margin: 0 !important;
        }
        
        h2 {
            text-align: center !important;
            font-size: 16px;
        }
        .containerPhotoUser {
            width: 100%;
            margin-bottom: 30px;
            align-items: center;

            #userPhoto {
                width: 100px;
                height: 50px;
                margin: 0 0 10px 0px;
            }
            button {
                width: 110px;
                margin-left: 0px;
                font-size: 13px;
            }

            p {
                margin: 0px;
            }
            

            #ContainerButton {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0;
                width: 400px;
                margin-left: 20px;
            }

            #labelArchive {
                width: 110px;
                margin-left: 0;
                font-size: 13px;
            }
        }

        .containerInput {
            flex-direction: column-reverse;
            gap: 10px;        
        }

        .containerInput input {
            width: 200px;
        }

        .edit {
            margin-left: calc(70% - 90px) !important;
        }
        #attention {
            margin: 10px 0 0 0;
            font-size: 12px;
        }
    }

`