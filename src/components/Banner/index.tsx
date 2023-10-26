import { getNowPlayingMovieData } from "../../services/api"
import { useEffect, useState } from "react"
import ModalBanner from "./ModalBanner"
import { numeroAleatorio } from "../../utils/numeroAleatorio"
import { SectionNowPlayingStyled } from "./styles"



function Banner(): JSX.Element {
    const [movieNowPlayingData, setMovieNowPlayingData] = useState<any>([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
    getNowPlayingMovieData("movie", setMovieNowPlayingData)
     }, [])

     const poster = movieNowPlayingData.map((poster: any) => {
        return poster.poster_path
     })

    return(
        <>
            {/* Banner que irá gerar um filme com a maior tendência a cada refresh da página */}
            <SectionNowPlayingStyled>
                <div className="nowPlaying">
                    <h2>Now Playing in theaters</h2>
                    <img src={`https://image.tmdb.org/t/p/w300/${poster[numeroAleatorio]}`} alt="" />
                </div>
                <button style={{margin: '20px'}} onClick={() => setOpenModal(true)}>Trailer</button>
                <ModalBanner
                 movieNowPlayingData = {movieNowPlayingData}
                setOpenModal = {() => setOpenModal(!openModal)}
                isOpen = {openModal}
                /> 
            </SectionNowPlayingStyled>
            
               
        </>           
    )
}

export default Banner