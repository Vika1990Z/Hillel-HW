import { SET_MOVIES, SELECT_MOVIE } from "./types";

export const setMovies = payload => ({
    type: SET_MOVIES,
    payload
})

export const selectMovie = payload => ({
    type: SELECT_MOVIE,
    payload
})