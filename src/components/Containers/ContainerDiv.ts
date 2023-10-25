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
    width: calc(100vw - 7%);
    margin-top: 60px;
    height: 10px;
    @media screen and (max-width: 500px) {
        margin-left: 20px;
        height: 50px;
    }
    
`

export { 
    ContainerDivConteudoPrincipal, 
    ContainerDivParaTituloDosVideos 
}