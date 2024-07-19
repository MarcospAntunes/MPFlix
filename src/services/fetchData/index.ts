import {
  getAllMovies,
  getDiscoverMovieData,
  getNowPlayingMovieData,
  getTrendingMovieData,
} from "../api";

interface fetchDataProps {
  setMovieTrendingData: React.Dispatch<React.SetStateAction<any[]>>;
  setMovieDiscoverData: React.Dispatch<React.SetStateAction<any[]>>;
  setAllMovies: React.Dispatch<React.SetStateAction<any[]>>;
  setMovieNowPlayingData: React.Dispatch<React.SetStateAction<any[]>>;
  setDataLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

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
