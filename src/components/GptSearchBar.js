import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
<<<<<<< HEAD
import { useRef } from "react";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";
const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const langKey = useSelector((store) => store.config.lang);
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
    
        return json.results;
      };
    
      const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        // Make an API call to GPT API and get Movie Results
    
        const gptQuery =
          "Act as a Movie Recommendation system and suggest some movies for the query : " +
          searchText.current.value +
          ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });
    
        if (!gptResults.choices) {
          // TODO: Write Error Handling
        }
    
        console.log(gptResults.choices?.[0]?.message?.content);
    

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
        
    
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    
    
        const tmdbResults = await Promise.all(promiseArray);
    
        console.log(tmdbResults);
    
        dispatch(
          addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        );
      };
    return (
        <div className="">
        <form className="p-2 bg-black  absolute top-[30%] left-[20%] w-[60%] flex justify-around" onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className="p-4 m-4 w-[80%] rounded-lg  border-[1px]">
            </input>
            <button className=" bg-red-700 text-white rounded-md w-[10%] m-6" >{lang[langKey].search}</button>
        </form>
=======
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
        <form className="p-2 bg-black  relative top-[30%] left-[10%] w-[80%] flex justify-around rounded" onSubmit={(e) => e.preventDefault()}>
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
>>>>>>> 2ee4fc4 (Final Added Movie Recommendation Model)
        </div>
    )
}
export default GptSearchBar;