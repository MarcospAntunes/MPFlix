import styled from "styled-components"


export const SectionNowPlaying = styled.section`
  width: calc(100vw - 350px);
  display: flex;
  justify-content: center;

  aside {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    gap: 30px;
  }

  @media screen and (max-width: 280px) {
    margin-left: 1.75%;
  }

  @media screen and (min-width: 281px) and (max-width: 500px) {
    flex-direction: row;
    margin-left: 2%;
  }
`