import styled from "styled-components"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { Botao } from "../../Botao"

const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`

const ModalStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #363636;
    border-radius: 10px;


    .ConteudoModal {
        display: flex;
        flex-direction: row;

        img {
            width: 300px;
            height: 500px;
            border-radius: 10px 0px 0px 10px;
        }

        .average {
            position: absolute;
            bottom: 10px;
            left: 265px;
            padding: 5px;
            border: 2px solid #bf4343;
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

            
        }
    }
`


interface ModalMovieProps {
    isOpen: boolean
    setModalOpen: () => void
    id: number
    genre_ids: number
    poster: string
    title: string
    release_date: string
    overview: string
    vote_average: number
}

function ModalMovie({isOpen, setModalOpen, id, genre_ids, poster, title, release_date, overview, vote_average}: ModalMovieProps) {
    if(isOpen) {
        return (
            <BackgroundModal>
                <ModalStyled>
                    <div className="ConteudoModal">
                        <AiOutlineCloseCircle className="closeModal" onClick={setModalOpen} />
                        <img src={"https://image.tmdb.org/t/p/w300/" + poster} alt="" key={genre_ids} />
                        <div className="average">{vote_average.toFixed(1)}</div>
                        <div key={id} className="Overview">
                            <h1>{title}</h1>
                            <p>{overview}</p>

                            <hr />

                            <h2>Info on {title}</h2>
                            <p>Genres: {genre_ids}</p>
                            <p>Release date: {release_date}</p>

                            <Botao> 
                                <BsFillPlayFill clasName="playTrailer"/>
                                Trailer
                            </Botao>
                        </div>
                    </div>
                    
                </ModalStyled>
            </BackgroundModal>
        )
    }

    return null
}


export default ModalMovie