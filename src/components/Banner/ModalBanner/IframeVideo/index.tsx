import { useEffect, useState } from "react"
import { getVideosMovieData } from "../../../../services/api"
import { numeroAleatorio } from "../../../../utils/numeroAleatorio"

interface IframeVIdeoProps {
    id: number
}

function IframeVideo({ id }: IframeVIdeoProps): JSX.Element {
    const [VideosMovieData, setVideosMovieData] = useState<any>([])
    useEffect(() => {
        getVideosMovieData("movie", setVideosMovieData, id)
    }, [])
    

    const key = VideosMovieData.map((video: any) => {
        return video.key
    })
    
    return (
        <iframe width="660" height="415" src={`https://www.youtube.com/embed/${key[numeroAleatorio]}?autoplay=1`} title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
}

export default IframeVideo