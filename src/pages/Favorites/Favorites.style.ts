import styled from "styled-components";

export const FavoriteSection = styled.section`
  width: calc(100vw - 350px);
  h2 {
    text-align: center;
    margin-top: 50vh;
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const FavoriteListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    justify-content: center;
    margin-top: 80px;
  }
`;
