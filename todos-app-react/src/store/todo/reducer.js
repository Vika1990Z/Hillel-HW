import {ENTER_TODO} from './types';

const initialState = '';

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_TODO:
      console.log(action, state)
      return state=action.payload;
      
    default:
      return state;
  }
}