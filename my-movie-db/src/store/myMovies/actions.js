import { SET_POPULAR_MOVIES, SET_SEARCHED_MOVIES, SET_MOVIE, SET_ERROR, SET_IS_PENDING} from "./types";

export const setPopularMovies = payload => ({
    type: SET_POPULAR_MOVIES,
    payload
})

export const setSearchedMovies = payload => ({
    type: SET_SEARCHED_MOVIES,
    payload
})

export const setMovie = payload => ({
    type: SET_MOVIE,
    payload
})

export const setError = payload => ({
    type: SET_ERROR,
    payload
})

export const setIsPending = payload => ({
    type: SET_IS_PENDING,
    payload
})