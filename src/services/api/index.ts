import axios from "axios";
import {
  MovieAPIMethods,
  getAllMoviesProps,
  getDiscoverMovieDataProps,
  getMovieGenreDataProps,
  getNowPlayingMovieDataProps,
  getTrendingMovieDataProps,
  getVideosMovieDataProps,
} from "./MovieAPI.type";

const api_key = "4fdd778d99f4d99cdcd4b7b84dafb119";

class MovieAPI implements MovieAPIMethods {
  // Seção Trending
  public async getTrendingMovieData({
    type,
    setMovieTrendingData,
  }: getTrendingMovieDataProps): Promise<void> {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?api_key=${api_key}&media_type=movie`
      );
      setMovieTrendingData(response.data.results);
    } catch (error: any) {
      this.addErrorOnScreen(error);
    }
  }

  // Seção Discover
  public async getDiscoverMovieData({
    type,
    setMovieDiscoverData,
  }: getDiscoverMovieDataProps) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${api_key}`
      );
      setMovieDiscoverData(response.data.results);
    } catch (error: any) {
      this.addErrorOnScreen(error);
    }
  }

  // Filmes em cartaz
  public async getNowPlayingMovieData({
    type,
    setNowPlayingMovieData,
  }: getNowPlayingMovieDataProps): Promise<void> {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/now_playing?api_key=${api_key}`
      );
      setNowPlayingMovieData(response.data.results);
    } catch (error: any) {
      this.addErrorOnScreen(error);
    }
  }

  // Gêneros dos filmes
  public async getMovieGenreData({
    type,
    setMovieGenreData,
  }: getMovieGenreDataProps): Promise<void> {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}`
      );
      setMovieGenreData(response.data.genres);
    } catch (error: any) {
      this.addErrorOnScreen(error);
    }
  }

  // Todos os filmes
  public async getAllMovies({
    type,
    setAllMovies,
  }: getAllMoviesProps): Promise<void> {
    const baseUrl = `https://api.themoviedb.org/3/${type}/popular`;
    const totalPages = 10;
    const results = []; // Crie um array para armazenar os resultados

    for (let page = 1; page <= totalPages; page++) {
      try {
        const response = await axios.get(
          `${baseUrl}?api_key=${api_key}&page=${page}`
        );
        results.push(...response.data.results); // Adicione os resultados ao array
      } catch (error) {
        this.addErrorOnScreen(error);
      }
    }

    // Atualize o estado com os resultados após todas as chamadas serem concluídas
    setAllMovies(results);
  }

  // Videos dos filmes
  public async getVideosMovieData({
    type,
    setVideosMovieData,
    movie_id,
  }: getVideosMovieDataProps): Promise<void> {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${movie_id}/videos?api_key=${api_key}`
      );
      setVideosMovieData(response.data.results);
    } catch (error: any) {
      this.addErrorOnScreen(error);
    }
  }

  private addErrorOnScreen(error: any) {
    const converteErro = error.toString();
    const erro = window.document.createElement("div");
    const conteudo = window.document.createTextNode(converteErro);
    erro.appendChild(conteudo);
  }
}

export default MovieAPI;
