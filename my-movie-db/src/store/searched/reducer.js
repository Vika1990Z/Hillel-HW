import { SET_SEARCHED_MOVIES } from "./types";

const initialState = [];

export const searchedMovies = (state=initialState, action) => {
    switch(action.type) {
        case SET_SEARCHED_MOVIES:
            return action.payload;
        default:
            return state;
    }
}