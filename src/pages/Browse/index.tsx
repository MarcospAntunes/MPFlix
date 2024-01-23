import CaixaDePesquisa from "../../components/CaixaDePesquisa"
import ModalMovie from "../../components/Card/ModalMovie"
import { ContainerDivConteudoPrincipal } from "../../components/Containers/ContainerDiv"
import { MainHomeAndFavorites } from "../../components/Containers/containerMain"
import { FooterStyled } from "../../components/Footer"
import Menu from "../../components/Menu"
import MenuMobile from "../../components/MenuMobile"
import { ImgStyled } from "../../components/UserImg"
import useAuth from "../../hooks/useAuth"
import { getAllMovies } from "../../services/api"
import { useState, useEffect, useMemo } from 'react'
import { movie } from "../../interfaces/movie"
import Card from "../../components/Card"
import { ListMoviesBrowse } from "./styles"
import { verificaFoto } from "../../utils/userFunctions"

function Browse(): JSX.Element {
    const [allMovies, setAllMovies] = useState<any[]>([])
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const [search, setSearch] = useState('')

    const user: any = useAuth()

    getAllMovies("movie", setAllMovies)
    const moviesSearched = useMemo(() => {
        const lowerBusca = search.toLowerCase()
        
        return allMovies.filter((movie) => movie.title.toLowerCase().includes(lowerBusca))
    }, [allMovies, search]) 

    useEffect(() => {
        const pesquisa: HTMLInputElement | null = document.querySelector('#textBusca')
        pesquisa !== null ? pesquisa.focus() : '' 
    }, [])

    return (
        <>
        <ContainerDivConteudoPrincipal>
            <ImgStyled src={verificaFoto(user)} alt="usePhoto" onClick={() => setMenuIsVisible(true)} />
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <header>
                <Menu />
            </header>
            <MainHomeAndFavorites>
            <CaixaDePesquisa search={search} setSearch={setSearch} />
            <section>
                <ListMoviesBrowse>
                    {moviesSearched.map((movie: movie, index: number) => (
                        <Card 
                            key={`${movie.id}-${index}`}
                            id={movie.id}
                            genre_ids={movie.genre_ids}
                            poster={movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                            overview={movie.overview}
                            vote_average={movie.vote_average}
                        />
                    ))}
                </ListMoviesBrowse>
            </section>
            <ModalMovie />
        </MainHomeAndFavorites>
        <FooterStyled>
          <h2>Developed by Marcos Antunes</h2>
          <h2>Design based on design made by <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
        </FooterStyled>
      </ContainerDivConteudoPrincipal>
      
    </>
  )
}

export default Browse