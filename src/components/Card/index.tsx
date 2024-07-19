import { motion } from 'framer-motion'
import { ImgStyled } from "./Card.style"
import { useCardData } from "../../hooks"
import { CardDataProps } from '../../interfaces'
import CardDataContextType from '../../contexts/CardData/CardData.type'

function Card({id, genre_ids, poster, title, release_date, overview, vote_average}: CardDataProps): JSX.Element {
  const { setOpenModal, setClickedCard }: CardDataContextType = useCardData()

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