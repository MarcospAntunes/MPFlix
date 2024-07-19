import fetchDataProps from "./fetchData.type";
import {
  getAllMovies,
  getDiscoverMovieData,
  getNowPlayingMovieData,
  getTrendingMovieData,
} from "../api";

export const fetchData = async ({
  setMovieTrendingData,
  setMovieDiscoverData,
  setAllMovies,
  setMovieNowPlayingData,
  setDataLoaded,
}: fetchDataProps) => {
  try {
    await Promise.all([
      getTrendingMovieData("movie", setMovieTrendingData),
      getDiscoverMovieData("movie", setMovieDiscoverData),
      getAllMovies("movie", setAllMovies),
      getNowPlayingMovieData("movie", setMovieNowPlayingData),
    ]);
    setDataLoaded(true);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
