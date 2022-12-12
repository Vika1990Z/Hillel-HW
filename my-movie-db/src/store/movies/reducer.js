import { SET_MOVIES, SELECT_MOVIE } from "./types";

const initialState = [];

export const movies = (state=initialState, action) => {
    switch(action.type) {
        case SET_MOVIES:
            return action.payload;
        case SELECT_MOVIE: 
            return state.filter(movie => movie.id===action.payload);
        default:
            return state;
    }
}