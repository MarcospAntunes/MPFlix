import styled from "styled-components";

export const DivBusca = styled.div`
    width: 300px;
    height: 40px;
    background-color: ${({theme}) => theme.div};
    border-radius: 50px;
    margin: 10px 10px 10px 0px;

    input {
        float: right;
        background-color: transparent;
        padding-right: 5px;
        font-style: italic;
        border: none;
        height: 100%;
        width: 260px;
        border-radius: 50px;
        color: ${({theme}) => theme.text};

        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
    }

    svg {
        width: 20px;
        height: 20px;
        margin: 10px;
        color: ${({theme}) => theme.buttonMenuText};
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        width: 250px;
        height: 40px;
        background-color: #363636;
        border-radius: 50px;
        margin: 20px 10px 10px 80px;

        input {
            float: right;
            background-color: transparent;
            padding-right: 5px;
            font-style: italic;
            border: none;
            height: 100%;
            width: 200px;
            border-radius: 50px;
            color: white;

            &:focus {
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
            }
        }

        svg {
            width: 20px;
            height: 20px;
            margin: 10px;
            cursor: pointer;
        }
  }
`