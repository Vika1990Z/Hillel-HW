import React from "react";

import './styles.scss';

const Item = ({ id, value, checked, onRemoveTodo, onCheckTodo }) => {
  return (
  <li 
    id = {id}
    className = {checked ? 'item checkClass' : 'item' }  
    >
    <div className="value">
      <input
        className="check todo"
      
        type="checkbox"
        onClick={()=> {
          onCheckTodo(id)
        }}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)
      }

export default Item;

