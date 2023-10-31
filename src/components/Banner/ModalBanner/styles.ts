import styled from "styled-components"

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`

export const ModalBannerStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
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
    }
`