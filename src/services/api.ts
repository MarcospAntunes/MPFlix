import axios from "axios"

const api_key = "4fdd778d99f4d99cdcd4b7b84dafb119"

// Seção Trending
export async function getTrendingMovieData(type: string, setMovieTrendingData: any): Promise<void> {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api_key}&media_type=movie`)
        setMovieTrendingData(response.data.results)
    } catch(error: any) {
        const converteErro = error.toString()
        let erro = window.document.createElement("div")
        let conteudo = window.document.createTextNode(converteErro)
        erro.appendChild(conteudo)
    }
    
}

// Seção Discover
export async function getDiscoverMovieData(type: string, setMovieDiscoverData: any): Promise<void> {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/discover/${type}?api_key=${api_key}`)
        setMovieDiscoverData(response.data.results)
    } catch(error: any) {
        const converteErro = error.toString()
        let erro = window.document.createElement("div")
        let conteudo = window.document.createTextNode(converteErro)
        erro.appendChild(conteudo)
    }
    
}

// Filmes em cartaz
export async function getNowPlayingMovieData(type: string, setNowPlayingMovieData: any): Promise<void> {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/${type}/now_playing?api_key=${api_key}`)
        setNowPlayingMovieData(response.data.results)
    } catch(error: any) {
        const converteErro = error.toString()
        let erro = window.document.createElement("div")
        let conteudo = window.document.createTextNode(converteErro)
        erro.appendChild(conteudo)
    }
}

// Gêneros dos filmes
export async function getMovieGenreData(type: string, setMovieGenreData: any): Promise<void> {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}`)
        setMovieGenreData(response.data.genres)
    } catch(error: any) {
        const converteErro = error.toString()
        let erro = window.document.createElement("div")
        let conteudo = window.document.createTextNode(converteErro)
        erro.appendChild(conteudo)
    }
}

// Videos dos filmes
export async function getVideosMovieData(type: string, setVideosMovieData: any, movie_id: number): Promise<void> {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/${type}/${movie_id}/videos?api_key=${api_key}`)
        setVideosMovieData(response.data.results)
    } catch(error: any) {
        const converteErro = error.toString()
        let erro = window.document.createElement("div")
        let conteudo = window.document.createTextNode(converteErro)
        erro.appendChild(conteudo)
    }
    
}