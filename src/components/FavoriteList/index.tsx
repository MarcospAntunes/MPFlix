import { ImgStyled } from "./FavoriteList.style"
import { useCardData } from "../../hooks"
import CardProps from "./favoriteList.type"

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