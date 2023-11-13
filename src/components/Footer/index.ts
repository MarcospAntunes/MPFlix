import styled from "styled-components";

export const FooterStyled = styled.footer`
  position: fixed !important;
  width: calc(100vw - 350px);
  margin-left: 350px;
  bottom: 0;
  text-align: center;
  background-color: ${({theme}) => theme.bgTransparent};
  backdrop-filter: blur(5px);

  a {
    text-decoration: none;
    color: #5e5eca;
  }

  @media screen and (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
    font-size: 12px;
  }
`