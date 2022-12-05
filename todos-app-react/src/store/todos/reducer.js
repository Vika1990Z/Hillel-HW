import {ADD_TODO, REMOVE_TODO, CHECK_TODO} from './types';

const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case CHECK_TODO:
      return state.map(todo => {
        if(todo.id === action.payload) {
          return {
            ...todo,
            checked: !todo.checked
          }
        }
        return todo
      })
      
    default:
      return state;
  }
}