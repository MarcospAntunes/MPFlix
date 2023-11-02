import styled from "styled-components";

export const GeneralMenuStyled = styled.menu`
    width: 50%;
    list-style: none;
    
    & > li {
        border-bottom: 1px solid #303030;
        width: 100%;
        margin: 20px 0;
        padding: 10px;
        text-align: center;
    }

    & > li > h2{
        text-align: left;
        margin-bottom: 15px;
    }

    .radioButtons {
        display: flex;
        gap: 50px;
    }

    input[type='radio'] {
        display: none;
    }

    .radio-container label {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 20px;
        cursor: pointer;
    }

    .custom-radio {
        border: 1px solid #fff;
        width: 22px;
        height: 21px;
        display: grid;
        place-content: center;
        border-radius: 50%;
    }

    .custom-radio,
    span {
        transition: 0.3s ease;
        color: #fff;
    }

    .custom-radio span {
        content: '';
        width: 18px;
        height: 15px;
        background: #fff;
        border-radius: 50%;
    }

    input[type='radio']:checked + .custom-radio {
        border-color: white;
    }

    input[type='radio']:checked + .custom-radio span {
        background: #bf4343;
    }
`