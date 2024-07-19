import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "../../IframeVideo"
import { BackgroundModal, ModalBannerStyled } from './ModalNowPlaying.style'
import ModalBannerProps from './ModalBannerProps.type'

function ModalBanner({id, setOpenModal, isOpen}: ModalBannerProps) {
  if(isOpen) {
    return (
      <BackgroundModal>
        <ModalBannerStyled>
          <div className="ConteudoModal">  
            <AiOutlineCloseCircle className="closeModal" onClick={setOpenModal} />
            <IframeVideo
              id ={id}
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