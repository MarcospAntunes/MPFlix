import { getNowPlayingMovieData } from "../../services/api"
import { useEffect, useState } from "react"
import ModalBanner from "./ModalBanner"
import { numeroAleatorio } from "../../utils"
import { DivBanner } from "./Banner.style"



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
            <DivBanner>
                <div className="nowPlaying">
                    <h2>Now Playing in theaters</h2>
                    <img src={`https://image.tmdb.org/t/p/w300/${poster[numeroAleatorio]}`} alt="" />
                    <button onClick={() => setOpenModal(true)}>Trailer</button>
                </div>
                
                <ModalBanner
                    movieNowPlayingData = {movieNowPlayingData}
                    setOpenModal = {() => setOpenModal(!openModal)}
                    isOpen = {openModal}
                />
            </DivBanner>     
        </>           
    )
}

export default Banner