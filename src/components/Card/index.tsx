import styled from "styled-components"

interface CardProps {
    id: number
    genre_ids: number
    poster: string
    title: string
    release_date: string
}

const ImgStyled = styled.img`
    border-radius: 10px;
    width: 200px;
    height: 250px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        transform: translate(3px, 3px);
        transition: .3s;
    }
`


function Card({id, genre_ids, poster, title, release_date}: CardProps) {
    return(
        <li key="id">
            <ImgStyled src={`https://image.tmdb.org/t/p/w300/${poster}`}/>
            
        </li>
    )
}

export default Card