import { ImgStyled } from "./styles"
import { useCardData } from "../../hooks/useCard"

interface CardProps {
    id: number
    genre_ids: number[]
    poster: string
    title: string
    release_date: string
    overview: string
    vote_average: number
}

function FavoriteList({id, genre_ids, poster, title, release_date, overview, vote_average}: CardProps): JSX.Element {
    const { setOpenModal, setClickedCard }: any = useCardData()

    const handleCardClick = () => {
        setClickedCard({id, genre_ids, poster, title, release_date, overview, vote_average})
        setOpenModal(true)
    }

    return(
        <>
            <li className="itens" style={{height: '100%'}}>
            <ImgStyled src={`https://image.tmdb.org/t/p/w300/${poster}`} onClick={handleCardClick}/>
            </li>
            
            
        </>
        
    )
}

export default FavoriteList