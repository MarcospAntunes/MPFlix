import { useEffect, useState } from "react"
import MovieAPI from "../../services/api"
import IframeVideoProps from "./IframeVideo.type"

function IframeVideo({ id, autoplay }: IframeVideoProps): JSX.Element {
  const movieAPI = new MovieAPI()
  const [VideosMovieData, setVideosMovieData] = useState<any>([])
  useEffect(() => {
    movieAPI.getVideosMovieData({type: "movie", setVideosMovieData: setVideosMovieData, movie_id: id})
  }, [id])
  

  const key = VideosMovieData.map((video: any) => {
    return video.key
  })

  return (
    <iframe 
      src={`https://www.youtube.com/embed/${key[0]}?autoplay=1`} 
      title="" 
      frameBorder="0" 
      allow={`accelerometer; ${autoplay}; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`} 
      allowFullScreen
    />
  )
}

export default IframeVideo