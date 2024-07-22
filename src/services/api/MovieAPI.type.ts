import { movie } from "../../interfaces";

interface MovieAPIMethods {
  getTrendingMovieData: ({
    type,
    setMovieTrendingData,
  }: getTrendingMovieDataProps) => Promise<void>;
  getDiscoverMovieData: ({
    type,
    setMovieDiscoverData,
  }: getDiscoverMovieDataProps) => Promise<void>;
  getNowPlayingMovieData: ({
    type,
    setNowPlayingMovieData,
  }: getNowPlayingMovieDataProps) => Promise<void>;
}

type getTrendingMovieDataProps = {
  type: string;
  setMovieTrendingData: React.Dispatch<React.SetStateAction<movie[]>>;
};

type getDiscoverMovieDataProps = {
  type: string;
  setMovieDiscoverData: React.Dispatch<React.SetStateAction<movie[]>>;
};

type getNowPlayingMovieDataProps = {
  type: string;
  setNowPlayingMovieData: React.Dispatch<React.SetStateAction<movie[]>>;
};

type getMovieGenreDataProps = {
  type: string;
  setMovieGenreData: React.Dispatch<React.SetStateAction<movie[]>>;
};

type getAllMoviesProps = {
  type: string;
  setAllMovies: React.Dispatch<React.SetStateAction<movie[]>>;
};

type getVideosMovieDataProps = {
  type: string;
  setVideosMovieData: React.Dispatch<React.SetStateAction<movie[]>>;
  movie_id: number;
};

export type {
  MovieAPIMethods,
  getTrendingMovieDataProps,
  getDiscoverMovieDataProps,
  getNowPlayingMovieDataProps,
  getMovieGenreDataProps,
  getAllMoviesProps,
  getVideosMovieDataProps,
};
