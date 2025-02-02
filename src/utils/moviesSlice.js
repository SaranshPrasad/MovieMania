import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
<<<<<<< HEAD
        }
    }
});
export const {addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;
=======
        },
        addMovieSuggestions: (state, action) => {
            state.movieSuggestion = action.payload;
        }
    }
});
export const {addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addUpcomingMovies, addMovieSuggestions } = movieSlice.actions;
>>>>>>> 2ee4fc4 (Final Added Movie Recommendation Model)
export default movieSlice.reducer;