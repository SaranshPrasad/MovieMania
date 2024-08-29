import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {

    return (
        <div className="w-40  pr-4 ">
            <img alt="poster" src={IMG_CDN + posterPath} className="rounded-lg"></img>
        </div>
    )
}
export default MovieCard;