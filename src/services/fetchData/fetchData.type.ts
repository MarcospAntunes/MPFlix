import { movie } from "../../interfaces";

interface fetchDataProps {
  setMovieTrendingData: React.Dispatch<React.SetStateAction<movie[]>>;
  setMovieDiscoverData: React.Dispatch<React.SetStateAction<movie[]>>;
  setAllMovies: React.Dispatch<React.SetStateAction<movie[]>>;
  setMovieNowPlayingData: React.Dispatch<React.SetStateAction<movie[]>>;
  setDataLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default fetchDataProps;