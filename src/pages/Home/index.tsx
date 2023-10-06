import axios from "axios"
import Banner from "../../components/Banner"
import CaixaDePesquisa from "../../components/CaixaDePesquisa"
import { ContainerDivConteudoPrincipal, ContainerDivParaTituloDosVideos } from "../../components/Containers/ContainerDiv"
import Header from "../../components/Header"
import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import styled from "styled-components"
import BotaoCarrossel from "../../components/BotaoCarrossel"

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


const api_key = "4fdd778d99f4d99cdcd4b7b84dafb119"

function Home() {
  const [movieData, setMovieData] = useState<any>([])

  useEffect(() => {
    getTrendingMovieData("movie")
  }, [])

  async function getTrendingMovieData(type: string) {

    try {
        let response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api_key}&media_type=movie`)
        console.log(response.data.results)
        setMovieData(response.data.results)
    } catch(error) {
        console.log(error)
    }
    
}


  return (
    <>
      <ContainerDivConteudoPrincipal>
        <Header />
        <main>
          <CaixaDePesquisa />
          <Banner /> {/* Seção do banner */}
          <section>
            <ContainerDivParaTituloDosVideos>
              <h1 style={{marginTop:"10px"}}>Trending</h1>
              
              <div><BotaoCarrossel /></div>
            </ContainerDivParaTituloDosVideos>
            
            <UlStyled>
              
              {movieData.map((movie: any) => (
                <Card
                key={movie.id}
                  id = {movie.id}
                  genre_ids = {movie.genre_ids}
                  poster = {movie.poster_path}
                  title = {movie.title}
                  release_date = {movie.release_date}
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