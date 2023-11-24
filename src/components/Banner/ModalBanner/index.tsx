import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "../../IframeVideo"
import { numeroAleatorio } from "../../../utils/numeroAleatorio"
import { BackgroundModal, ModalBannerStyled } from './styles'

interface ModalBannerProps {
    movieNowPlayingData: any[] 
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
}

function ModalBanner({movieNowPlayingData, setOpenModal, isOpen}: ModalBannerProps) {
    const id = movieNowPlayingData.map((video: any) => video.id)
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