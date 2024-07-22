import fetchDataProps from "./fetchData.type";
import MovieAPI from "../api";

export const fetchData = async ({
  setMovieTrendingData,
  setMovieDiscoverData,
  setAllMovies,
  setMovieNowPlayingData,
  setDataLoaded,
}: fetchDataProps) => {
  try {
    const movieAPI = new MovieAPI();

    await Promise.all([
      movieAPI.getTrendingMovieData({
        type: "movie",
        setMovieTrendingData: setMovieTrendingData,
      }),

      movieAPI.getDiscoverMovieData({
        type: "movie",
        setMovieDiscoverData: setMovieDiscoverData,
      }),

      movieAPI.getAllMovies({ type: "movie", setAllMovies: setAllMovies }),
      movieAPI.getNowPlayingMovieData({
        type: "movie",
        setNowPlayingMovieData: setMovieNowPlayingData,
      }),

    ]);
    setDataLoaded(true);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
