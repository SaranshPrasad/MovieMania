import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src={BG_URL}
          alt="bg-image"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
