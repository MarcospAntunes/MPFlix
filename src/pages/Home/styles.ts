import styled from "styled-components"

export const MainHome = styled.main`
  margin-left: 280px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`
export const DivBanner = styled.div`
  width: calc(100vw - 250px);
  display: flex; 
  justify-content: center;

  @media screen and (max-width: 500px) {
    
    margin-left: 0.68%;
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
  width: calc(100vw - 250px);
  margin-left: 250px;
  bottom: 0;
  text-align: center;
  background-color: #3030304b;
  backdrop-filter: blur(5px);

  a {
    text-decoration: none;
    color: #5e5eca;
  }

  @media screen and (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`