import {combineReducers} from "redux";

import {todos} from './todos/reducer';
import {todo} from './todo/reducer';


const rootReducer = combineReducers({
  todos,
  todo

});

export default rootReducer;