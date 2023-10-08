import axios from "axios"

const api_key = "4fdd778d99f4d99cdcd4b7b84dafb119"

export async function getTrendingMovieData(type: string, setMovieTrendingData: any) {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api_key}&media_type=movie`)
        setMovieTrendingData(response.data.results)
    } catch(error) {
        console.log(error)
    }
    
}

export async function getDiscoverMovieData(type: string, setMovieDiscoverData: any) {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/discover/${type}?api_key=${api_key}`)
        setMovieDiscoverData(response.data.results)
    } catch(error) {
        console.log(error)
    }
    
}

export async function getVideosMovieData(type: string, setMovieDiscoverData: any, movie_id: number) {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/${type}/${movie_id}/videos?api_key=${api_key}`)
        setMovieDiscoverData(response.data.results)
    } catch(error) {
        console.log(error)
    }
    
}