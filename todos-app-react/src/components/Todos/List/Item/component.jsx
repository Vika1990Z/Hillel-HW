import React from "react";
import { connect } from "react-redux";
import { removeTodo, checkTodo } from "../../../../store/todos/actions";


import './styles.scss';

const Item = ({ id, value, checked, removeTodo, checkTodo }) => {
  return (
  <li 
    id = {id}
    className = {checked ? 'item checkClass' : 'item' } 
    >
    <div className="value">
      <input
        className="check todo"
        type="checkbox"
        onClick={()=> {checkTodo(id)}}
      />
      {value}
    </div>
    <button onClick={() => removeTodo(id)}>
      x
    </button>
  </li>
)
      }

const mapDispatchToProps = {
  removeTodo,
  checkTodo
}
export default connect(null, mapDispatchToProps)(Item);

