import styled from "styled-components";

const ContainerDivConteudoPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100%;
    
`

const ContainerDivParaTituloDosVideos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 97.2%);
    
    margin-top: 60px;
    height: 10px;

    @media screen and (max-width: 500px) {
        margin-left: 20px;
        height: 50px;
    }

    @media screen and (min-width: 1265px) {
        width: calc(100% - 93%);
    } 

    @media screen and (width: 1280px) and (height: 800px) {
        width: calc(100% - 96%);
    }
    
    @media screen and (width: 1664px) and (height: 1011px) {
        width: calc(100% - 94%) !important;
    }

    @media screen and (width: 1424px) and (height: 861px) {
        width: calc(100% - 95%) !important;
    }
    
`

const ContainerCentralizado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 500px) {
        width: 100vw !important;
    }

`

export { 
    ContainerDivConteudoPrincipal, 
    ContainerDivParaTituloDosVideos,
    ContainerCentralizado 
}