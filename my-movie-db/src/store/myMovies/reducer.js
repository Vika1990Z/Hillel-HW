import { SET_POPULAR_MOVIES, SET_SEARCHED_MOVIES, SET_MOVIE } from "./types";

const initialState = {
        popular: [],
        searched: [],
        movie: {},
};

export const myMovies = (state=initialState, action) => {
    switch(action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state,
                popular: action.payload  
            }
        case SET_SEARCHED_MOVIES:
            return {
                ...state,
                searched: action.payload
            }
        case SET_MOVIE: 
        return {
            ...state,
            movie: action.payload
        }
 
        default:
            return state;
    }
}