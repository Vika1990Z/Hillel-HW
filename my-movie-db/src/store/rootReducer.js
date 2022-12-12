import { combineReducers } from "redux";
import { movies } from "./movies/reducer";
import { movie } from "./movie/reducer";
import { searchedMovies } from "./searched/reducer";

const rootReducer = combineReducers ({
    movies,
    movie,
    searchedMovies
})

export default rootReducer;