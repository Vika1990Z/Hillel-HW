import { combineReducers } from "redux";
import { myMovies } from "./myMovies/reducer";

const rootReducer = combineReducers ({
    myMovies,
})

export default rootReducer;