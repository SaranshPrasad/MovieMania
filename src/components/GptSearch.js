import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import {BG_URL} from "../utils/constants";

const GptSearch = () => {
    return (
        <>
        <div className="absolute -z-10 inset-0 w-full">
        <img
          src={BG_URL}
          alt="bg-image"
          className="w-full h-full object-cover"
        ></img>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </>
    )
}
export default GptSearch;