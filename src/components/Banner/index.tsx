import styled from "styled-components"
import { getNowPlayingMovieData } from "../../services/api"
import { useEffect, useState } from "react"
import ModalBanner from "./ModalBanner"
import { numeroAleatorio } from "../../utils/numeroAleatorio"

const SectionNowPlayingStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 50%;
    margin: 0 10px;
    width: 30vw;
    height: 50vh;
    background-color: #9b9b9b;
    border-radius: 15px;

    .nowPlaying {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .nowPlaying h2 {
        position: absolute;
        padding: 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #303030;
        
    }
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    button {
        position: absolute;
        width: 150px;
        height: 50px;
        border: none;
       
        border-radius: 10px;
        color: white;
        background-color: #d63837;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            transform: translate(3px, 3px);
            transition: 0.3s;
        }
    }
`

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