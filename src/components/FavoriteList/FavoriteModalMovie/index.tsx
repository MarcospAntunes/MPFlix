import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "./IframeVideo"
import { useEffect, useState } from "react"
import { getMovieGenreData } from "../../../services/api"
import { BackgroundModal, ModalStyled } from './styles'
import { useFavorite } from '../../../hooks/useFavorite'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useCardData } from '../../../hooks/useCard'
import { movie } from '../../../interfaces/movie'

function FavoriteModalMovie(): JSX.Element | null {
    const { clickedCardData, setOpenModal, modalOpen }: any = useCardData();

    const closeModal = () => {
        setOpenModal(false)
    }

    

    

    const [movieGenreData, setMovieGenreData] = useState<any[]>([])
    useEffect(() => {
        getMovieGenreData("movie", setMovieGenreData)
    }, [])

    const { favorite, addFavorite } = useFavorite()

    if(modalOpen && clickedCardData) {
        const { id, genre_ids, title, release_date, overview, vote_average, poster }: any = clickedCardData;

        const genres = movieGenreData.map((genre) => genre_ids.find((id: number) => genre.id == id))
        const genresId: any[] = genres.filter((list:any) => list !== undefined)
        const genre = movieGenreData.filter((genre: movie) => genre.id === genresId.find((id) => id == genre.id))
        
        const genreName = genre.map((key) => key.name)
        const isFavorite = favorite.some((fav: movie) => fav.id === id)

        return (
            <BackgroundModal>
                <ModalStyled >
                    <div className="ConteudoModal">
                        <AiOutlineCloseCircle className="closeModal" onClick={closeModal} />
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

                            <div className="favoriteContainer">
                                {isFavorite ?
                                    <MdFavorite
                                        className="favorite favorited"
                                        onClick={() => addFavorite({ id, genre_ids, title, release_date, overview, vote_average, poster })}
                                    />
                                :
                                    <MdFavoriteBorder
                                        className="favorite"
                                        onClick={() => addFavorite({ id, genre_ids, title, release_date, overview, vote_average, poster })}
                                    />}
                            </div>
                        </div>
                        
                    </div>
                </ModalStyled>
            </BackgroundModal>
        )
    }

    return null
}


export default FavoriteModalMovie