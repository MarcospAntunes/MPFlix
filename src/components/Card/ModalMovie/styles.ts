import styled from "styled-components"

export const BackgroundModal = styled.div`
    position: fixed !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    
    
`

export const ModalStyled = styled.div`
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
            width: 100%;
            height: 415px;
            background-color: gray;
            border-radius: 10px 10px 0px 0px;
        }

        .average {
            position: absolute;
            top: 400px;
            right: 10px;
            padding: 5px;
            border: 2px solid #bf4343;
            background-color: #363636;
            border-radius: 50%;
        }

        .closeModal {
            position: absolute;
            width: 42px;
            height: 42px;
            cursor: pointer;
            right: 0;
        }

        .Overview {
            padding: 20px;
            text-align: left;
            
            h1, h2 {
                margin: 10px;
                text-align: left;
            }

            p {
                width: 500px;
                margin: 10px;
                text-align: left;
            }

            hr {
                border: 1px solid #8f8d8d;
            }

            button > svg {
                width: 28px;
                height: 28px;
                vertical-align: middle;
            }

            .favoriteContainer {
                width: 100%;
                height: 42px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .favorite {
                width: 42px;
                height: 42px;
                text-align: center;
                cursor: pointer;
            }

            .favorited {
                color: #D63837;
            }
        }
    }

    @media screen and (max-width: 500px) {
        left: 50%;
        iframe {
            width: 350px !important;
            height: 250px !important;
        }

        .average {
            top: 240px !important;
        }

        .closeModal {
            width: 32px !important;
            height: 32px !important;
        }

        .Overview {
            h1, h2 {
                margin: 10px 0px !important;
                font-size: 16px;
            }

            p {
                width: 310px !important;
                margin: 0px !important;
                text-align: left;
                font-size: 12px
            }

            hr {
                border: 1px solid #8f8d8d;
            }
        }
    }
`
