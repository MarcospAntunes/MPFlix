import styled from "styled-components"
import ModalMovie from "./ModalMovie"
import { useState } from "react"


const ImgStyled = styled.img`
    border-radius: 10px;
    width: 200px;
    height: 250px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        transform: translate(3px, 3px);
        transition: .3s;
    }
`

interface CardProps {
    id: number
    genre_ids: number
    poster: string
    title: string
    release_date: string
    overview: string
    vote_average: number
}



function Card({id, genre_ids, poster, title, release_date, overview, vote_average}: CardProps) {
    const [openModal, setOpenModal] = useState(false)

    return(
        <li key={id}>
            <ImgStyled src={`https://image.tmdb.org/t/p/w300/${poster}`} onClick={() => setOpenModal(true)}/>
            <ModalMovie 
                isOpen={openModal}
                setModalOpen = {() => setOpenModal(!openModal)}
                id = {id} 
                genre_ids = {genre_ids} 
                poster = {poster}
                title = {title}
                release_date = {release_date}
                overview = {overview}
                vote_average = {vote_average}
                />
        </li>
    )
}

export default Card