import Banner from "../../components/Banner"
import CaixaDePesquisa from "../../components/CaixaDePesquisa"
import { ContainerDivConteudoPrincipal, ContainerDivParaTituloDosVideos } from "../../components/Containers/ContainerDiv"
import Header from "../../components/Header"
import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import styled from "styled-components"
import BotaoCarrossel from "../../components/BotaoCarrossel"
import { getDiscoverMovieData, getTrendingMovieData } from "../../services/api"

const UlStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 15px;
  width: 100%;
  height: 100%;
  margin: 20px 0;
  text-align: center;
  list-style: none;

`


function Home() {
  const [movieTrendingData, setMovieTrendingData] = useState<any>([])
  const [movieDiscoverData, setMovieDiscoverData] = useState<any>([])

  useEffect(() => {
    getTrendingMovieData("movie", setMovieTrendingData)
    getDiscoverMovieData("movie", setMovieDiscoverData)
  }, [])

  return (
    <>
      <ContainerDivConteudoPrincipal>
          <Header />
        <main>
          <CaixaDePesquisa />

          <Banner />

          <section>
            <ContainerDivParaTituloDosVideos>
              <h1 style={{marginTop:"10px"}}>Trending</h1>
              <div><BotaoCarrossel /></div>
            </ContainerDivParaTituloDosVideos>
            
            <UlStyled>
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
            </UlStyled>

            <ContainerDivParaTituloDosVideos>
              <h1 style={{marginTop:"10px"}}>Discover</h1>
              
              <div><BotaoCarrossel /></div>
            </ContainerDivParaTituloDosVideos>
            
            <UlStyled>
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
            </UlStyled>
          </section> {/* Seção dos filmes */}
        </main>
      </ContainerDivConteudoPrincipal>
      <footer>
          <h2>Desenvolvidor por Marcos Antunes</h2>
          <h2>Design feito por <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
        </footer> 
    </>
  )
}

export default Home