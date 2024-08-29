
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = (props) => {
    const {movieId} = props;
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieId);

   return (
    <div className="w-full">
        <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&loop=1"} ></iframe>
    </div>
   )
}
export default VideoBackground;