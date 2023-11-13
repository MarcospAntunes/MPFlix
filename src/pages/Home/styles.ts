import styled from "styled-components"


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