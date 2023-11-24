import { movie } from "../interfaces/movie"

interface returnGenresProps {
    movieGenreData: any[]
    genre_ids: any
}

function returnGenres({movieGenreData, genre_ids}: returnGenresProps) {
    const genres = movieGenreData.map((genre) => genre_ids.find((id: number) => genre.id == id))
    const genresId: any[] = genres.filter((list:any) => list !== undefined)
    const genre = movieGenreData.filter((genre: movie) => genre.id === genresId.find((id) => id == genre.id))
    
    const genreName = genre.map((key) => key.name)

    return genreName.join(", ")
}

export default returnGenres

