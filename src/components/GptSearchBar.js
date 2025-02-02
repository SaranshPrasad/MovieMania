import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useEffect,  useState } from "react";
import axios from "axios";
import { addMovieSuggestions } from "../utils/moviesSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";
const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
      const [movieList, setMovieList] = useState([]);
      const [movie, setMovie] = useState('');
      const dispatch = useDispatch();

      const [recommendations, setRecommendations] = useState([]);
    useEffect(()=>{
      const fetchMovies = async () => {
        try {
          const res = await axios.get("http://localhost:5000/movies")
          setMovieList(res.data.movies);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchMovies();
    }, []);

    const fetchMovieRecommendations = async () => {
      if(!movie) return;
      try {
        const response = await axios.post("http://localhost:5000/recommend", { movie });
        // console.log(response.data.recommended_movies)
        setRecommendations(response.data.recommended_movies);
        dispatch(addMovieSuggestions(recommendations));
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }

    }

    return (
        <div className="">
        <form className="p-2 bg-black  relative top-[30%] left-[10%] w-[80%] flex justify-around rounded-md" onSubmit={(e) => e.preventDefault()}>
            <select value={movie} onChange={(e) => setMovie(e.target.value)} className="p-4 m-4 w-[80%] rounded-lg  border-[1px]">
        <option value="" disabled>{lang[langKey].gptSearchPlaceholder}</option>
        {movieList.map((movieTitle, index) => (
          <option key={index} value={movieTitle}>
            {movieTitle}
          </option>
        ))}
      </select>
      <button onClick={fetchMovieRecommendations} className=" bg-red-700 text-white rounded-md w-[10%] m-6">{lang[langKey].search}</button>
        </form>
        <div className="mt-6 w-full flex justify-center">
        <GptMovieSuggestion recommendations={recommendations}/>
      </div>
        </div>
    )
}
export default GptSearchBar;