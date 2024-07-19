import axios from "axios";

const api_key = "4fdd778d99f4d99cdcd4b7b84dafb119";

// Seção Trending
export async function getTrendingMovieData(
  type: string,
  setMovieTrendingData: any
): Promise<void> {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${api_key}&media_type=movie`
    );
    setMovieTrendingData(response.data.results);
  } catch (error: any) {
    const converteErro = error.toString();
    const erro = window.document.createElement("div");
    const conteudo = window.document.createTextNode(converteErro);
    erro.appendChild(conteudo);
  }
}

// Seção Discover
export async function getDiscoverMovieData(
  type: string,
  setMovieDiscoverData: any
): Promise<void> {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${api_key}`
    );
    setMovieDiscoverData(response.data.results);
  } catch (error: any) {
    const converteErro = error.toString();
    const erro = window.document.createElement("div");
    const conteudo = window.document.createTextNode(converteErro);
    erro.appendChild(conteudo);
  }
}

// Filmes em cartaz
export async function getNowPlayingMovieData(
  type: string,
  setNowPlayingMovieData: any
): Promise<void> {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/now_playing?api_key=${api_key}`
    );
    setNowPlayingMovieData(response.data.results);
  } catch (error: any) {
    const converteErro = error.toString();
    const erro = window.document.createElement("div");
    const conteudo = window.document.createTextNode(converteErro);
    erro.appendChild(conteudo);
  }
}

// Gêneros dos filmes
export async function getMovieGenreData(
  type: string,
  setMovieGenreData: any
): Promise<void> {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}`
    );
    setMovieGenreData(response.data.genres);
  } catch (error: any) {
    const converteErro = error.toString();
    const erro = window.document.createElement("div");
    const conteudo = window.document.createTextNode(converteErro);
    erro.appendChild(conteudo);
  }
}

// Todos os filmes
export async function getAllMovies(
  type: string,
  setAllMovies: any
): Promise<void> {
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
      console.error(error);
    }
  }

  // Atualize o estado com os resultados após todas as chamadas serem concluídas
  setAllMovies(results);
}

// Videos dos filmes
export async function getVideosMovieData(
  type: string,
  setVideosMovieData: any,
  movie_id: number
): Promise<void> {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${movie_id}/videos?api_key=${api_key}`
    );
    setVideosMovieData(response.data.results);
  } catch (error: any) {
    const converteErro = error.toString();
    const erro = window.document.createElement("div");
    const conteudo = window.document.createTextNode(converteErro);
    erro.appendChild(conteudo);
  }
}
