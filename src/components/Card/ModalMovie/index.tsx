import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "./IframeVideo"
import { useEffect, useState } from "react"
import { getMovieGenreData } from "../../../services/api"
import { BackgroundModal, ModalStyled } from './styles'

interface ModalMovieProps {
    isOpen: boolean
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    id: number
    genre_ids: number[]
    title: string
    release_date: string
    overview: string
    vote_average: number
    
}

function ModalMovie({isOpen, setModalOpen, id, genre_ids, title, release_date, overview, vote_average}: ModalMovieProps): JSX.Element | null {
    const [movieGenreData, setMovieGenreData] = useState<any[]>([])
    useEffect(() => {
        getMovieGenreData("movie", setMovieGenreData)
    }, [])
    const genres = movieGenreData.map((genre) => genre_ids.find(id => genre.id == id))
    const genresId: any[] = genres.filter((list:any) => list !== undefined)
    const genre = movieGenreData.filter((genre: any) => genre.id === genresId.find((id) => id == genre.id))
    
    const genreName = genre.map((key) => key.name)
    if(isOpen) {
        return (
            <BackgroundModal>
                <ModalStyled>
                    <div className="ConteudoModal">
                        <AiOutlineCloseCircle className="closeModal" onClick={setModalOpen} />
                        <IframeVideo
                            id ={id!}
                        />
                        <div className="average">{vote_average!.toFixed(1)}</div>
                        
                        <div key={id} className="Overview">
                            <h1>{title}</h1>
                            <p>{overview}</p>
                            <br /><hr /><br />
                            <h2>Info on {title}</h2>
                            <p>Genres: {genreName.join(", ")}</p>
                            <p>Release date: {release_date.replace(new RegExp("-", "g"), "/")}</p>
                        </div>
                    </div>
                </ModalStyled>
            </BackgroundModal>
        )
    }

    return null
}


export default ModalMovie