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

    & span {
        margin-right: 15px;
        font-size: 18px;
    }
`