import Banner from "../../components/Banner"
import CaixaDePesquisa from "../../components/CaixaDePesquisa"
import { ContainerCentralizado, ContainerDivConteudoPrincipal } from "../../components/Containers/ContainerDiv"
import Menu from "../../components/Menu"
import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import Carrossel from "../../components/Carrossel"
import MenuMobile from "../../components/MenuMobile"
import filterMoviesByGenre, { genreIdsToNames } from "../../utils/filterMoviesByGenre"
import { SectionNowPlaying } from "./styles"
import useAuth from "../../hooks/useAuth"
import CardNowPlaying from "../../components/CardNowPlaying"
import { numeroAleatorio } from "../../utils/numeroAleatorio"
import ModalMovie from "../../components/Card/ModalMovie"
import { MainHomeAndFavorites } from "../../components/Containers/containerMain"
import { ImgStyled } from "../../components/UserImg"
import { FooterStyled } from "../../components/Footer"
import { movie } from "../../interfaces/movie"
import LoadSpinner from "../../components/LoadSpinner"
import { Link } from "react-router-dom"
import { verificaFoto } from "../../utils/userFunctions"
import { fetchData } from "../../services/fetchData"

function Home(): JSX.Element {
  const [movieTrendingData, setMovieTrendingData] = useState<any[]>([])
  const [movieDiscoverData, setMovieDiscoverData] = useState<any[]>([])
  const [allMovies, setAllMovies] = useState<any[]>([])
  const [movieNowPlayingData, setMovieNowPlayingData] = useState<any[]>([])
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false);
  const [search, setSearch] = useState('')
  const user: any = useAuth()

  const genreMovies: { [key: string]: any[] } = {}
  for(const genreId in genreIdsToNames) {
    genreMovies[genreIdsToNames[genreId]] = filterMoviesByGenre(parseInt(genreId), allMovies)
  }

  const filterMovieNowPlayingData = movieNowPlayingData.filter((index: number) => index !== numeroAleatorio )
  const movieNowPlaying = filterMovieNowPlayingData.slice(0, 4)

  useEffect(() => {
    fetchData({ setMovieTrendingData,  setMovieDiscoverData, setAllMovies, setMovieNowPlayingData, setDataLoaded });
  }, [dataLoaded]);

  return (
    <>
      <ContainerDivConteudoPrincipal>
        <ImgStyled src={verificaFoto(user)} alt="usePhoto" onClick={() => setMenuIsVisible(true)} />
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <header>
          <Menu />
        </header>
        
        <MainHomeAndFavorites>
          <Link to={'/browse'}><CaixaDePesquisa search={search} setSearch={setSearch} /></Link>
          {!dataLoaded ? (
            <ContainerCentralizado style={{width: "calc(100vw - 350px)"}}>
              <LoadSpinner />
            </ContainerCentralizado>
          ) : (
            <>
              <SectionNowPlaying>
                <Banner />
                <aside>
                  {movieNowPlaying.map((movie: movie, index: number) => (
                    <CardNowPlaying
                      key={`${movie.id}-${index}`}
                      id={movie.id} 
                      poster_path={movie.poster_path}
                      title={movie.title}
                      vote_average={movie.vote_average}
                      release_date={movie.release_date}
                    />
                  ))}
                </aside>
              </SectionNowPlaying>

              <section> {/* Seção dos filmes */}
                <Carrossel secao = 'Trending'>
                  {movieTrendingData.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                  {movieDiscoverData.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Action'>
                  {genreMovies.action.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Adeventure'>
                  {genreMovies.adventure.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Animation'>
                  {genreMovies.animation.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Comedy'>
                  {genreMovies.comedy.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Crime'>
                  {genreMovies.crime.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Drama'>
                  {genreMovies.drama.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Horror'>
                  {genreMovies.horror.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <Carrossel secao = 'Science Fiction'>
                  {genreMovies.scienceFiction.map((movie: movie, index) => (
                    <Card
                      key={`${movie.id}-${index}`}
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
                <ModalMovie />
              </section>
            </>
          )}
        </MainHomeAndFavorites>
        <FooterStyled>
          <h2>Developed by Marcos Antunes</h2>
          <h2>Design based on design made by <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
        </FooterStyled>
      </ContainerDivConteudoPrincipal>   
    </>
  )
}

export default Home