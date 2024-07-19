import { useState, useEffect } from 'react'
import { SectionNowPlaying } from "./Home.style"
import { useAuth } from "../../hooks"
import { movie } from "../../interfaces/movie"
import { Link } from "react-router-dom"
import { fetchData } from "../../services"
import { 
  verificaFoto, 
  numeroAleatorio, 
  filterMoviesByGenre, 
  genreIdsToNames 
} from "../../utils"
import {
  Banner, 
  CaixaDePesquisa,
  ContainerCentralizado, 
  ContainerDivConteudoPrincipal,
  Menu,
  Carrossel, 
  MenuMobile, 
  CardNowPlaying, 
  MainHomeAndFavorites, 
  ImgStyled, 
  FooterStyled,  
  LoadSpinner,
  ModalMovie
} from "../../components"

function Home(): JSX.Element {
  const [movieTrendingData, setMovieTrendingData] = useState<movie[]>([])
  const [movieDiscoverData, setMovieDiscoverData] = useState<movie[]>([])
  const [allMovies, setAllMovies] = useState<movie[]>([])
  const [movieNowPlayingData, setMovieNowPlayingData] = useState<movie[]>([])
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false);
  const [search, setSearch] = useState('')
  const user: any = useAuth()

  const genreMovies: { [key: string]: any[] } = {}
  for(const genreId in genreIdsToNames) {
    genreMovies[genreIdsToNames[genreId]] = filterMoviesByGenre(parseInt(genreId), allMovies)
  }

  const filterMovieNowPlayingData = movieNowPlayingData.filter(({}, index: number) => index !== numeroAleatorio )
  const movieNowPlaying = filterMovieNowPlayingData.slice(0, 4)

  useEffect(() => {
    fetchData({ setMovieTrendingData,  setMovieDiscoverData, setAllMovies, setMovieNowPlayingData, setDataLoaded });
  }, [dataLoaded]);

  return (
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
              <Carrossel secao = 'Trending' data={movieTrendingData} />
              <Carrossel secao = 'Discover' data={movieDiscoverData} />
              <Carrossel secao = 'Action' data={genreMovies.action} />
              <Carrossel secao = 'Adeventure' data={genreMovies.adventure} />
              <Carrossel secao = 'Animation' data={genreMovies.animation} />
              <Carrossel secao = 'Comedy' data={genreMovies.comedy} />
              <Carrossel secao = 'Crime' data={genreMovies.crime} />
              <Carrossel secao = 'Drama' data={genreMovies.drama} />
              <Carrossel secao = 'Horror' data={genreMovies.horror} />
              <Carrossel secao = 'Science Fiction' data={genreMovies.scienceFiction} />
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
  )
}

export default Home