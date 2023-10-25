import styled from "styled-components"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "./IframeVideo"
import { numeroAleatorio } from "../../../utils/numeroAleatorio"

const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`

const ModalBannerStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    background: #363636;
    border-radius: 10px;


    .ConteudoModal {
        display: flex;
        flex-direction: column;

        iframe {
            background-color: gray;
            border-radius: 10px;
            width: 660px; 
            height: 415px; 
        }

        .closeModal {
            position: absolute;
            width: 42px;
            height: 42px;
            cursor: pointer;
            right: 0;
        }
    }

    @media screen and (max-width: 500px) {
        
        left: 50%;

        .ConteudoModal {
        display: flex;
        flex-direction: column;

        iframe {
            width: 350px;
            height: 350px;
        }

        .closeModal {
            width: 32px;
            height: 32px;
        }
    }
`

interface ModalBannerProps {
    movieNowPlayingData: any 
    setOpenModal: any
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
                                />
                        
                    </div>
                    
                </ModalBannerStyled>
            </BackgroundModal>
        )
    }

    return null
}


export default ModalBanner