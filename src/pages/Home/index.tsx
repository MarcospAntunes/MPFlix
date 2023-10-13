import Banner from "../../components/Banner"
import CaixaDePesquisa from "../../components/CaixaDePesquisa"
import { ContainerDivConteudoPrincipal } from "../../components/Containers/ContainerDiv"
import Header from "../../components/Header"
import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import styled from "styled-components"
import { getDiscoverMovieData, getTrendingMovieData } from "../../services/api"
import Carrossel from "../../components/Carrossel"


const FooterStyled = styled.footer`
    position: fixed;
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

`

function Home(): JSX.Element {
  const [movieTrendingData, setMovieTrendingData] = useState<any[]>([])
  const [movieDiscoverData, setMovieDiscoverData] = useState<any[]>([])

  useEffect(() => {
    getTrendingMovieData("movie", setMovieTrendingData)
    getDiscoverMovieData("movie", setMovieDiscoverData)
  }, [])

  return (
    <>
      <ContainerDivConteudoPrincipal>
          <Header />
        <main style={{marginLeft: '280px'}}>
          <CaixaDePesquisa />
          <div style={{width: 'calc(100vw - 250px)', display: 'flex', justifyContent: 'center'}}>
            <Banner />
          </div>
          <section>
            <Carrossel>
              {movieTrendingData.map((movie: any) => (
                <Card
                  key={movie.id}
                  id = {movie.id}
                  genre_ids = {movie.genre_ids}
                  poster = {movie.poster_path}
                  title = {movie.title}
                  release_date = {movie.release_date}
                  overview = {movie.overview}
                  vote_average = {movie.vote_average}
                /> 
              ))}
            </Carrossel>

            <Carrossel>
              {movieDiscoverData.map((movie: any) => (
                <Card
                  key={movie.id}
                  id = {movie.id}
                  genre_ids = {movie.genre_ids}
                  poster = {movie.poster_path}
                  title = {movie.title}
                  release_date = {movie.release_date}
                  overview = {movie.overview}
                  vote_average = {movie.vote_average}
                /> 
              ))}
            </Carrossel>
          </section> {/* Seção dos filmes */}
        </main>
        <FooterStyled style={{bottom: '0', position: 'fixed'}}>
          <h2>Desenvolvidor por Marcos Antunes</h2>
          <h2>Design feito por <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
        </FooterStyled>
      </ContainerDivConteudoPrincipal>
      
    </>
  )
}

export default Home