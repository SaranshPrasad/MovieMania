import axios from "axios";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const GptMovieSuggestion = ({ recommendations }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!recommendations || recommendations.length === 0) return;

      const movieDetails = await Promise.all(
        recommendations.map(async (rec) => {
          try {
            const url = `https://api.themoviedb.org/3/movie/${rec.movie_id}`;
            const response = await axios.get(url, API_OPTIONS);
            return response.data;
          } catch (error) {
            console.error(`Error fetching movie ${rec.movie_id}:`, error);
            return null;
          }
        })
      );

      setMovies(movieDetails.filter((movie) => movie !== null));
    };

    fetchMovies();
  }, [recommendations]);

  return (
    <div className="mt-4"> {/* Adjusted margin to prevent pushing search bar */}
      {movies.length > 0 && (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Recommended Movies:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg w-36 sm:w-44"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h4 className="text-sm font-bold text-gray-900">
                    {movie.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    ⭐ {movie.vote_average} / 10
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
