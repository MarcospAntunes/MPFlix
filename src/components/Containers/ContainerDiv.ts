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
        width: calc(100% - 93.3%)
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