import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "../../IframeVideo"
import { BackgroundModal, ModalBannerStyled } from './ModalNowPlaying.style'

interface ModalBannerProps {
    id: number 
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
}

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