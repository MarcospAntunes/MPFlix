import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "../../IframeVideo"
import { numeroAleatorio } from "../../../utils"
import { BackgroundModal, ModalBannerStyled } from './ModalBaner.style'
import ModalBannerProps from './ModalBanner.type'

function ModalBanner({ movieNowPlayingData, setOpenModal, isOpen }: ModalBannerProps) {
  const id = movieNowPlayingData.map((video) => video.id)
  if(isOpen) {
    return (
      <BackgroundModal>
        <ModalBannerStyled>
          <div className="ConteudoModal">
            <AiOutlineCloseCircle className="closeModal" onClick={setOpenModal} />
            <IframeVideo
              id ={id[numeroAleatorio]}
              autoplay='autoplay'
            />
          </div>
        </ModalBannerStyled>
      </BackgroundModal>
    )
  }

  return null
}


export default ModalBanner