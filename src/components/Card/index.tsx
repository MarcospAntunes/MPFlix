import { motion } from 'framer-motion'
import { ImgStyled } from "./styles"
import { useCardData } from "../../hooks/useCard"
import { CardDataProps } from '../../interfaces/cardData'

function Card({id, genre_ids, poster, title, release_date, overview, vote_average}: CardDataProps): JSX.Element {
    const { setOpenModal, setClickedCard }: any = useCardData()

    const handleCardClick = () => {
        setClickedCard({id, genre_ids, poster, title, release_date, overview, vote_average})
        setOpenModal(true)
    }

    return(
        <>
            <motion.li className="itens" style={{height: '100%'}}>
            <ImgStyled src={`https://image.tmdb.org/t/p/w300/${poster}`} onClick={handleCardClick}/>
            </motion.li>   
        </>
    )
}

export default Card