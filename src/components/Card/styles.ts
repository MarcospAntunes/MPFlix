import styled from "styled-components";

export const ImgStyled = styled.img`
    border-radius: 10px;
    width: 200px;
    height: 250px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        transform: translate(3px, 3px);
        transition: .3s;
    }

    @media screen and (max-width: 540px) {
        width: 150px !important; 
        height: 200px !important;
    }

    @media screen and (max-width: 820px) {
        width: 200px;
        height: 250px;
    }
`