import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        movies && (
            <div className="bg-black w-screen">
                <div className="relative z-20 p-4 mt-56 md:-mt-72"> {/* Responsive margin-top */}
                    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                    <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                    <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
                </div>
            </div>
        )
    );
};
export default SecondaryContainer;
