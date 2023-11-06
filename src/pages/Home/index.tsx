import Banner from "../../components/Banner"
import CaixaDePesquisa from "../../components/CaixaDePesquisa"
import { ContainerDivConteudoPrincipal } from "../../components/Containers/ContainerDiv"
import Menu from "../../components/Menu"
import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import { getDiscoverMovieData, getTrendingMovieData, getAllMovies, getNowPlayingMovieData } from "../../services/api"
import Carrossel from "../../components/Carrossel"
import MenuMobile from "../../components/MenuMobile"
import defaultPhoto from '../../assets/user.png'
import filterMoviesByGenre, { genreIdsToNames } from "../../utils/filerMoviesByGenre"
import { SectionNowPlaying, FooterStyled, ImgStyled, MainHome } from "./styles"
import useAuth from "../../hooks/useAuth"
import CardNowPlaying from "../../components/CardNowPlaying"
import { numeroAleatorio } from "../../utils/numeroAleatorio"



function Home(): JSX.Element {
  const [movieTrendingData, setMovieTrendingData] = useState<any[]>([])
  const [movieDiscoverData, setMovieDiscoverData] = useState<any[]>([])
  const [allMovies, setAllMovies] = useState<any[]>([])
  const [movieNowPlayingData, setMovieNowPlayingData] = useState<any>([])
  useEffect(() => {
    getTrendingMovieData("movie", setMovieTrendingData)
    getDiscoverMovieData("movie", setMovieDiscoverData)
    getAllMovies("movie", setAllMovies)
    getNowPlayingMovieData("movie", setMovieNowPlayingData)
  }, [])

  const genreMovies: { [key: string]: any[] } = {}
  for(const genreId in genreIdsToNames) {
    genreMovies[genreIdsToNames[genreId]] = filterMoviesByGenre(parseInt(genreId), allMovies)
  }

  const filterMovieNowPlayingData = movieNowPlayingData.filter((element: any, index: number) => index !== numeroAleatorio )
  const movieNowPlaying = filterMovieNowPlayingData.slice(0, 4)

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const user: any = useAuth()

  function verificaFoto() {
    let photo: string
    if(user.user.photoUrl) {
        photo = user.user.photoUrl
    } else {
        photo = defaultPhoto
    }
    return photo
}

  return (
    <>
      <ContainerDivConteudoPrincipal>
        <ImgStyled src={verificaFoto()} alt="" onClick={() => setMenuIsVisible(true)} />
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <Menu />
        <MainHome>
          <CaixaDePesquisa />
          {movieTrendingData === null || movieDiscoverData === null || allMovies === null ? (
            <p>Loading...</p>
          ) : (
            <>
              <SectionNowPlaying>
                <Banner />
                <aside>
                  {movieNowPlaying.map((movie: any, index: number) => (
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
                  {movieTrendingData.map((movie: any, index) => (
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
                  {movieDiscoverData.map((movie: any, index) => (
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
                  {genreMovies.action.map((movie: any, index) => (
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
                  {genreMovies.adventure.map((movie: any, index) => (
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
                  {genreMovies.animation.map((movie: any, index) => (
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
                  {genreMovies.comedy.map((movie: any, index) => (
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
                  {genreMovies.crime.map((movie: any, index) => (
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
                  {genreMovies.drama.map((movie: any, index) => (
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
                  {genreMovies.horror.map((movie: any, index) => (
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
                  {genreMovies.scienceFiction.map((movie: any, index) => (
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
              </section>
            </>
          
          )}
        </MainHome>
        <FooterStyled>
          <h2>Developed by Marcos Antunes</h2>
          <h2>Design based on design made by <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
        </FooterStyled>
      </ContainerDivConteudoPrincipal>
      
    </>
  )
}

export default Home