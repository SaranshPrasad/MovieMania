import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
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
        </div>
    )
}
export default GptSearchBar;