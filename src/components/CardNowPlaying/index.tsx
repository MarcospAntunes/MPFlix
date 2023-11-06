import ModalBanner from "./ModalNowPlaying"
import { ContainerCardNowPlaying } from "./style"
import { useState } from 'react'

interface CardNowPlayingProps {
    id: number
    poster_path: string
    title: string
    vote_average: number 
    release_date: string
}

function CardNowPlaying({ id, poster_path, title, vote_average, release_date}: CardNowPlayingProps): JSX.Element {

    const fullDate = release_date.split("-")
    const ano = fullDate[0]
    const [openModal, setOpenModal] = useState(false)


    return (
        <ContainerCardNowPlaying>
            <div className="conteudo" onClick={() => setOpenModal(true)}>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <div className="VotoEData">
                        <span className="voto">{vote_average.toFixed(1)}</span>
                        <span className="dataLancamento">{ano}</span>
                    </div>
                </div>
            </div>
            <ModalBanner
                    id = {id}
                    setOpenModal = {() => setOpenModal(!openModal)}
                    isOpen = {openModal}
                />
        </ContainerCardNowPlaying>
    )
}

export default CardNowPlaying