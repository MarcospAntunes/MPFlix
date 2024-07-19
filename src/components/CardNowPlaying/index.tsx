import ModalBanner from "./ModalNowPlaying"
import { ContainerCardNowPlaying } from "./CardNowPlaying.style"
import { useState } from 'react'
import CardNowPlayingProps from "./CaradNowPlaying.type"

function CardNowPlaying({ id, poster_path, title, vote_average, release_date}: CardNowPlayingProps): JSX.Element {
  const [openModal, setOpenModal] = useState(false)

  return (
    <ContainerCardNowPlaying>
      <div className="conteudo" onClick={() => setOpenModal(true)}>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
        <div>
          <h3>{title}</h3>
          <div className="VotoEData">
            <span className="voto">{vote_average.toFixed(1)}</span>
            <span className="dataLancamento">{release_date.replace(new RegExp("-", "g"), "/")}</span>
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