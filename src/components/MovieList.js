import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    return (
        <div className=" bg-transparent">
            <h1 className="font-bold text-4xl  text-white p-3">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">      
                <div className="flex">
                    {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                    
                </div>
            </div>
        </div>
    )
}
export default MovieList;