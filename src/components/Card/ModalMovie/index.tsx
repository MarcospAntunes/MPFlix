import styled from "styled-components"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import IframeVideo from "./IframeVideo"
import { useEffect, useState } from "react"
import { getMovieGenreData } from "../../../services/api"

const BackgroundModal = styled.div`
    position: fixed !important;
    
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
    left: 55%;
    transform: translate(-50%, -50%);
    background: #363636;
    border-radius: 10px;
    
    .ConteudoModal {
        display: flex;
        flex-direction: column;

        iframe {
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
        }
    }

    @media screen and (max-width: 500px) {
        left: 50%;
        iframe {
            width: 350px;
            height: 250px;
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
            }

            p {
                width: 310px !important;
                margin: 0px !important;
                text-align: left;
            }

            hr {
                border: 1px solid #8f8d8d;
            }
        }
    }
`


interface ModalMovieProps {
    isOpen: boolean
    setModalOpen: () => void
    id: number
    genre_ids: number[]
    title: string
    release_date: string
    overview: string
    vote_average: number
    
}

function ModalMovie({isOpen, setModalOpen, id, genre_ids, title, release_date, overview, vote_average}: ModalMovieProps): JSX.Element | null {
    const [movieGenreData, setMovieGenreData] = useState<any[]>([])
    useEffect(() => {
        getMovieGenreData("movie", setMovieGenreData)
    }, [])
    const genres = movieGenreData.map((genre) => genre_ids.find(id => genre.id == id))
    const genresId: any[] = genres.filter((list:any) => list !== undefined)
    const genre = movieGenreData.filter((genre: any) => genre.id === genresId.find((id) => id == genre.id))
    
    const genreName = genre.map((key) => key.name)
    if(isOpen) {
        return (
            <BackgroundModal>
                <ModalStyled>
                    <div className="ConteudoModal">
                        <AiOutlineCloseCircle className="closeModal" onClick={setModalOpen} />
                        <IframeVideo
                            id ={id!}
                        />
                        <div className="average">{vote_average!.toFixed(1)}</div>
                        
                        <div key={id} className="Overview">
                            <h1>{title}</h1>
                            <p>{overview}</p>
                            <br /><hr /><br />
                            <h2>Info on {title}</h2>
                            <p>Genres: {genreName.join(", ")}</p>
                            <p>Release date: {release_date.replace(new RegExp("-", "g"), "/")}</p>
                        </div>
                    </div>
                </ModalStyled>
            </BackgroundModal>
        )
    }

    return null
}


export default ModalMovie