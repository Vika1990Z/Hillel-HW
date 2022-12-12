import { SET_MOVIE } from "./types";

const initialState = {};

export const movie = (state=initialState, action) => {
    switch(action.type) {
        case SET_MOVIE:
            return action.payload;
        default:
            return state;
    }
}