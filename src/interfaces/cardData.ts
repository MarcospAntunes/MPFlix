export interface CardDataProps {
    id: number
    genre_ids: number[] 
    poster: string 
    title: string 
    release_date: string 
    overview: string 
    vote_average: number
    setClickedCard?: (data: CardDataProps | null) => void;
  }