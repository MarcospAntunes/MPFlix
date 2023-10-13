import styled from "styled-components"
import { getTrendingMovieData } from "../../services/api"
import { useEffect, useState } from "react"

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 50%;
    width: 50vw;
    height: 50vh;
    background-color: #9b9b9b;
    border-radius: 15px;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    button {
        position: absolute;
        width: 150px;
        height: 50px;
        border: none;
        border-radius: 10px;
        color: white;
        background-color: #d63837;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            transform: translate(3px, 3px);
            transition: 0.3s;
        }
    }
`



function Banner(): JSX.Element {
    const [movieTrendingData, setMovieTrendingData] = useState<any>([])

    useEffect(() => {
    getTrendingMovieData("movie", setMovieTrendingData)
     }, [])
     const poster = movieTrendingData.map((poster: any) => {
        return poster.poster_path

     })
    return(
        <>
            {/* Banner que irá gerar um filme aleatório a cada refresh da página */}
            <SectionStyled>
                <img src={`https://image.tmdb.org/t/p/w300/${poster[0]}`} alt="" />
                <button style={{margin: '20px'}}>Watch now</button>
            </SectionStyled>     
        </>           
    )
}

export default Banner