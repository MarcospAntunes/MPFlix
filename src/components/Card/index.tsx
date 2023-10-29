import ModalMovie from "./ModalMovie"
import { useState } from "react"
import { motion } from 'framer-motion'
import { ImgStyled } from "./styles"

interface CardProps {
    id: number
    genre_ids: number[]
    poster: string
    title: string
    release_date: string
    overview: string
    vote_average: number
}

function Card({id, genre_ids, poster, title, release_date, overview, vote_average}: CardProps): JSX.Element {
    const [openModal, setOpenModal] = useState(false)

    return(
        <>
            <motion.li className="itens" style={{height: '100%'}}>
            <ImgStyled src={`https://image.tmdb.org/t/p/w300/${poster}`} onClick={() => setOpenModal(true)}/>
            </motion.li>
            
            <ModalMovie
            isOpen={openModal}
            setModalOpen = {() => setOpenModal(!openModal)}
            id = {id} 
            genre_ids = {genre_ids} 
            title = {title}
            release_date = {release_date}
            overview = {overview}
            vote_average = {vote_average}
            />
        </>
        
    )
}

export default Card