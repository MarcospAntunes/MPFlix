import Banner from "../../components/Banner"
import CaixaDePesquisa from "../../components/CaixaDePesquisa"
import { ContainerDivConteudoPrincipal } from "../../components/Containers/ContainerDiv"
import Menu from "../../components/Menu"
import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import styled from "styled-components"
import { getDiscoverMovieData, getTrendingMovieData } from "../../services/api"
import Carrossel from "../../components/Carrossel"
import MenuMobile from "../../components/MenuMobile"
import teste from '../../assets/react.svg'

const MainHome = styled.main`
  margin-left: 280px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`
const DivBanner = styled.div`
  width: calc(100vw - 250px);
  display: flex; 
  justify-content: center;

  @media screen and (max-width: 500px) {
    
    margin-left: 3%;
  }
`
const ImgStyled = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  border: 2px solid #bf4343;
  background-color: #9b9b9b;
  border-radius: 50%;

`

const FooterStyled = styled.footer`
  position: fixed !important;
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

  @media screen and (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`

function Home(): JSX.Element {
  const [movieTrendingData, setMovieTrendingData] = useState<any[]>([])
  const [movieDiscoverData, setMovieDiscoverData] = useState<any[]>([])
  useEffect(() => {
    getTrendingMovieData("movie", setMovieTrendingData)
    getDiscoverMovieData("movie", setMovieDiscoverData)
  }, [])

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <ContainerDivConteudoPrincipal>
        <ImgStyled src={teste} alt="" onClick={() => setMenuIsVisible(true)} />
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <Menu />
        <MainHome>
          <CaixaDePesquisa />
          <DivBanner>
            <Banner />
          </DivBanner>
          <section>
            <Carrossel secao = 'Trending'>
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
            <Carrossel secao = 'Discover'>
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
        </MainHome>
        <FooterStyled>
          <h2>Desenvolvidor por Marcos Antunes</h2>
          <h2>Design feito por <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
        </FooterStyled>
      </ContainerDivConteudoPrincipal>
      
    </>
  )
}

export default Home