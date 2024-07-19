import styled from "styled-components";

const ContainerDivConteudoPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100vw;
  height: 100%;

  & header {
    display: flex;
    flex-direction: column;
    min-width: 350px;
    height: 100vh;
  }

  @media screen and (max-width: 540px) {
    & header {
      display: none;
    }
  }
`;

const ContainerDivParaTituloDosVideos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100vw - 350px);

  margin-top: 60px;
  height: 10px;

  @media screen and (max-width: 540px) {
    margin-left: 20px;
    height: 50px;
    width: 100vw;
  }
`;

const ContainerCentralizado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 540px) {
    width: 100vw !important;
  }
`;

export {
  ContainerDivConteudoPrincipal,
  ContainerDivParaTituloDosVideos,
  ContainerCentralizado,
};
