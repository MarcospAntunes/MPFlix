import styled from "styled-components"

export const MainHome = styled.main`
  margin-left: 400px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`
export const SectionNowPlaying = styled.section`
  width: calc(100vw - 250px);
  display: flex;
  justify-content: center;

  aside {
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    gap: 30px;
  }

  @media screen and (max-width: 500px) {

    flex-direction: row;
    
    margin-left: 1.2%;

    aside { 
    margin-left: 60px;
    flex-direction: column;
    gap: 5px;
  }
  }
`
export const ImgStyled = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  border: 2px solid #bf4343;
  background-color: #9b9b9b;
  border-radius: 50%;

`

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