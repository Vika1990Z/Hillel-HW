import {ENTER_TODO} from './types';

const initialState = '';

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_TODO:
      return state=action.payload;
      
    default:
      return state;
  }
}