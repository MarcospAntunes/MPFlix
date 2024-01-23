import styled from "styled-components";

const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const MainHomeAndFavorites = styled.main`

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`

export { ContainerMain }